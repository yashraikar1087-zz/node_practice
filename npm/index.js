var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.use("/", function(req, res, next) {
  console.log(req.params.id);
  next();
});

app.get("/person/:id", function(req, res) {
  res.send(
    "<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>" +
      req.params.id +
      "</h1></body></html>"
  );
});

app.get("/", function(req, res) {
  console.log();
  res.render("index", {
    ID: req.params.id
  });
});

app.listen(port);
