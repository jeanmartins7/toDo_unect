const express = require('express');
const mongoose = require('mongoose');
const app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

mongoose.connect('mongodb+srv://masahiro:unect@cluster0.uausv.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true,
});

app.use(require('./routes'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
 
app.get('/', function (req, res) {
  res.send('Hello World');
});
 
app.listen(3333)