// global variables
//let contacts;
//var newContactsArray = [];

//////////////readfile

/*
fs.readFile('contactsdatabase.json', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log("data: " + data);
        newContactsArray = JSON.parse(data);
        console.log("new contacts array: "+ newContactsArray[0].name);
        //neeem = newContactsArray[0].name;
        
    });
*/

console.log("contacts : " + contacts);

/*

function updatedb() {


fs.writeFile('contactsdatabase.json', JSON.stringify(newContactsArray), err => {
  if (err) {
    console.error(err)
    return
  }
  console.log("file updated successfully");
})

}

//updatedb();
*/

//console.log("later new contacts array" + newContactsArray);
//console.log("contacts: " + contacts);

var tenantsarr = [];
for (var i = 0; i < contacts.length; i++) {
  if (JSON.stringify(contacts[i].role) == '["tenant"]') {
    tenantsarr.push(contacts[i]);
  }
}

var ownersarr = [];
for (var j = 0; j < contacts.length; j++) {
  if (JSON.stringify(contacts[j].role) == '["owner"]') {
    ownersarr.push(contacts[j]);
  }
}

var employeesarr = [];
for (var k = 0; k < contacts.length; k++) {
  if (JSON.stringify(contacts[k].role) == '["employee"]') {
    employeesarr.push(contacts[k]);
  }
}

var serviceprovidersarr = [];
for (var l = 0; l < contacts.length; l++) {
  if (JSON.stringify(contacts[l].role) == '["serviceprovider"]') {
    serviceprovidersarr.push(contacts[l]);
  }
}

var trusteesarr = [];
for (var m = 0; m < contacts.length; m++) {
  if (JSON.stringify(contacts[m].role) == '["trustee"]') {
    trusteesarr.push(contacts[m]);
  }
}

function deleteContact() {
  var deleteval = 5;
  for (var ix = 0; ix <= contacts.length; ix++) {
    if (contacts[ix].id !== deleteval) {
      newContactsArray.push(contacts[ix]);
    }
  }

  //updatedb();
}

//deleteContact();
//console.log(newContactsArray);

var lengtharr = contacts.length;
console.log(contacts[5]);
console.log(tenantsarr);
console.log(lengtharr);

// module.exports = {
//   contacts,
//   tenantsarr,
//   ownersarr,
//   employeesarr,
//   serviceprovidersarr,
//   trusteesarr,
// };
