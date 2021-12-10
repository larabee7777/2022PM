const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/api/contacts", function (req, res) {
  const contactsFile = fs.readFileSync(
    path.join(__dirname, "public/contactsdatabase.json"),
    "utf-8"
  );
  const contacts = JSON.parse(contactsFile);
  res.send(contacts.people);
});

app.get("/dashboard", function (req, res) {
  res.sendFile(path.join(__dirname, "/dashboard.html"));
});
app.get("/reports", function (req, res) {
  res.sendFile(path.join(__dirname, "/reports.html"));
});
app.get("/contacts", function (req, res) {
  res.sendFile(path.join(__dirname, "/contacts.html"));
});

app.get("/public/scripts.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/scripts.js"));
});

app.get("/database/contacts.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/contacts.js"));
});

app.get("/addcontacts", function (req, res) {
  res.sendFile(path.join(__dirname, "/addcontacts.html"));
});

app.get("/public/contactslist", function (req, res) {
  res.sendFile(path.join(__dirname, "/contactslist.html"));
});

app.get("/public/contactstenants", function (req, res) {
  res.sendFile(path.join(__dirname, "/contactstenants.html"));
});

app.get("/public/contactsowners", function (req, res) {
  res.sendFile(path.join(__dirname, "/contactsowners.html"));
});

app.get("/public/contactsemployees", function (req, res) {
  res.sendFile(path.join(__dirname, "/contactsemployees.html"));
});

app.get("/public/contactsserviceproviders", function (req, res) {
  res.sendFile(path.join(__dirname, "/contactsserviceproviders.html"));
});

app.get("/public/contactstrustees", function (req, res) {
  res.sendFile(path.join(__dirname, "/contactstrustees.html"));
});

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/css"));
app.use(express.static(__dirname + "/public/js"));
app.use(express.static(__dirname + "/public/js/demo"));
app.use(express.static(__dirname + "/public/images"));

//app.post('/addcontacts', (req, res) => {
//  console.log('Posting from addcontacts')
//})

app.listen(port);
console.log("Server started at http://localhost:" + port);
