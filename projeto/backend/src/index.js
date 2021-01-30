const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use("/alltodo", express.static("public"));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false }));

require("./controller/authController")(app);

app.listen(3333);
