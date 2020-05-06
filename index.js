// on the server side, we use commonJS to import, unlike front=end using ES26
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
//generate a new express app, to set up configuration to listen for rounte handlers
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// PRODUCTION will use whatever PORT heroku tells
const PORT = process.env.PORT || 5000;
app.listen(PORT);
