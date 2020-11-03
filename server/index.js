const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(cors());
app.use(morgan('dev'));
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});