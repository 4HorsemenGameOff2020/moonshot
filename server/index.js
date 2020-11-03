const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});