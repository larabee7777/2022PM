const express = require("express");
const path = require("path");
const fs = require("fs");
const { end } = require("@popperjs/core");

const app = express();
const port = process.env.PORT || 8080;

let contacts;

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
  contacts = JSON.parse(contactsFile);
  res.send(contacts.people);
});

// app.get("/api/contacts", function (req, res) {
//   const contactsFile = fs.readFileSync(
//     path.join(__dirname, "public/contactsdatabase.json"),
//     "utf-8"
//   );
//   const contacts = JSON.parse(contactsFile);
//   res.send(contacts.people);
// });

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

app.get("/addcontactssuccesspage", function (req, res) {
  res.sendFile(path.join(__dirname, "/addcontactssuccesspage.html"));
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

app.post("/api/addcontacts", (req, res) => {
  console.log("Posting from addcontacts");
  //console.log(req.body);
  contacts.people.push(req.body);

  fs.writeFileSync("contactsdatabase.json", JSON.stringify(contacts), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(contacts);
    console.log("file written successfully");
  });

  res.redirect("/contacts");
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
