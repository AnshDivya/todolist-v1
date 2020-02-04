const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.listen(3000, function() {
  console.log("Server started on port number 3000");
});

app.get("/", function(req, res) {
  var today = new Date();

  var options = {
    weekday: "short",
    day: "numeric",
    month: "long"
  }
  var day = today.toLocaleDateString("en-US", options);
  res.render("list", {kindOfDay: day});
});

app.post("/", function(req, res) {
  console.log(req.body.task);
});
