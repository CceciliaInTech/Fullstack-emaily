// on the server side, we use commonJS to import, unlike front=end using ES26
const express = require('express');
//generate a new express app, to set up configuration to listen for rounte handlers
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// PRODUCTION will use whatever PORT heroku tells
const PORT = process.env.PORT || 5000;
app.listen(PORT);
