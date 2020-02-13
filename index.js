const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

console.log(date);
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

const tasks = ["Buy Food","Cook Food","Eat Food"];
const workTasks = [];
app.listen(3000, function() {
  console.log("Server started on port number 3000");
});

app.get("/", function(req, res) {

  const day = date.getDate();
  res.render("list", {kindOfDay: day, newTasks: tasks, actionRoute: "/"});
});

app.post("/", function(req, res) {
  const newTask = req.body.task;
  tasks.push(newTask);

  res.redirect("/");
});

app.get("/work", function(req, res) {
  res.render("list", {
    kindOfDay: "Work",
    newTasks: workTasks,
    actionRoute: "/work"
  })
});

app.post("/work", function(req, res) {
  const newTask = req.body.task;
  workTasks.push(newTask);

  res.redirect("/work");
});

app.get("/about", function(req, res) {
  res.render("about");
});
