// keys.js  production side
// if (process.env.NODE_ENV === 'production') {
//   app.use((req, res, next) => {
//     if (req.header('x-forwarded-proto') !== 'https')
//       res.redirect(`https://${req.header('host')}${req.url}`);
//     else next();
//   });
//   module.exports = require('./prod');
// } else {
//   module.exports = require('./dev');
// }

// if(process.env.NODE_ENV === 'production') {
//   app.use((req, res, next) => {
//     if (req.header('x-forwarded-proto') !== 'https')
//       res.redirect(`https://${req.header('host')}${req.url}`)
//     else
//       next()
//   })
// }

if (process.env.NODE_ENV === 'production') {
  //return production keys
  module.exports = require('./prod');
} else {
  // return development keys
  module.exports = require('./dev');
}
