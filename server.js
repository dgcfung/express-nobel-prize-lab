const express = require('express');

const app = express();
const PORT = 8085;

app.listen('/', (req, res) => {
  res.json({msg: 'This is thr root!'});
});

app.listen(PORT, () => console.log('up and running on: ', PORT));
