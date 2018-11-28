const express = require('express');
const { Prize } = require('./models');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({msg: 'This is the root!'});
});


app.listen(3000, () => console.log('up and running on: '));
