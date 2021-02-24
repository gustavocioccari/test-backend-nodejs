const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended:false }));

app.use(routes);

app.listen(process.env.PORT || 3333,
  "0.0.0.0",
  null, () => {
    console.log("app listening");
});