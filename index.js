const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.listen(process.env.PORT || 3333,
  "0.0.0.0",
  null, () => {
    console.log("app listening");
});