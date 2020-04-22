var express = require("express");
var fs = require("fs");
var path = require("path");
var app = express();
var Port = 3000;
app.use(express.static("public"));

app.get("/notes", function (req, res) {
    res.sendFile(__dirname + "/public/notes.html")
});
app.get("/api/notes", function (req, res) {
    res.sendFile(__dirname + "/db/db.json")
});
app.get("/*", function (req, res) {
    res.sendFile(__dirname + "/public/index.html")
});
app.post("/api/notes", function (req, res) {
    res
}

app.listen(Port, function () {
    console.log("App listening on Port" + Port);
});

