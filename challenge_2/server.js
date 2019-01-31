const express = require('express');
const PORT = 3002;
const bodyParser = require('body-parser');
const Path = require('path');

const app = express();

app.use(express.static(Path.join(__dirname, '/public/')));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})

