const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.listen(3000, function() {
  console.log("Server started on port number 3000");
});
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = weekday[currentDay];
  res.render("list", {kindOfDay: day});
});
