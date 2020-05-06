const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      //   relative path
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
//     (accessToken, refreshToken, profile, done) => {
//       // make a query to find id that matched(asysn operation, reach to Mongo
//       // database, then we get a promise so chain to a .then()
//       User.findOne({ googleId: profile.id }).then((existingUser) => {
//         if (exsitingUser) {
//           //already have a record with the id
//           done(null, existingUser);
//         } else {
//           // we don't have a user record with the user
//           new User({ googleId: profile.id })
//             .save()
//             .then((user) => done(null, user));
//         }
//       });
//     }
//   )
// );
