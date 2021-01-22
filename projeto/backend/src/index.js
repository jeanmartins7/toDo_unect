const express = require('express')
const app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3333)