const express = require('express');
const PORT = 3002;
const bodyParser = require('body-parser');
const Path = require('path');
const axios = require('axios');

const app = express();

app.use(express.static(Path.join(__dirname, '/public/')));
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})

app.get('/getCoinData', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
  .then(data => {
    res.send(data.data);
  })
})

