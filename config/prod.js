// prod.js- production keys-commit prod.js
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI:process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
  };
  mongodb+srv://emailyprod1:MvDUTMQrPTDGKifp@cluster0-yryww.mongodb.net/test?retryWrites=true&w=majority