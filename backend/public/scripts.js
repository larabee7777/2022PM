var contacts = [];

function refreshContacts() {
  jQuery(document).ready(function () {
    jQuery.get("http://localhost:8080/api/contacts", function (res) {
      contacts = res;
      listContacts(contacts);
    });
  });
}

refreshContacts();

/*
function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const value = Object.fromEntries(data.entries());

  console.log({ value });
}


const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

*/

function openTab(roleName) {
  var i;
  var x = document.getElementsByClassName("role");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(roleName).style.display = "block";
  document.getElementById(roleName).style.marginLeft = "15px";
}

function listContacts(contacts) {
  document.write(`<div>`);

  contacts.forEach(function (item) {
    document.write(
      `<div style="display:flex; justify-content: space-between;">`
    );

    document.write(
      `<h3 class="${item.role}" style="font-family: Arial, Helvetica, sans-serif" >${item.name}</h3>`
    );

    document.write(
      `<div style="display:flex; justify-content: space-between;">`
    );

    document.write(
      `<p class="${item.role}" style="font-family: Arial, Helvetica, sans-serif; margin-left:70px">${item.unit}</p>`
    );
    document.write(
      `<p class="${item.role}" style="font-family: Arial, Helvetica, sans-serif; margin-left:70px">${item.contactnumber}</p>`
    );
    document.write(
      `<p class="${item.role}" style="font-family: Arial, Helvetica, sans-serif; margin-left:70px; margin-right: 180px">${item.email}</p>`
    );
    document.write(`<div style="margin-left:90px">`);
    document.write(
      `<button id="${item.name}" data-toggle="tooltip" data-placement="top" title="Edit">&#9998;</button>`
    );
    document.write(
      `<button id="${item.name}" onclick="deleteTenantTest()" data-toggle="tooltip" data-placement="top" title="Delete">&#9747;</button>`
    );
    document.write(`</div>`);
    document.write(`</div>`);

    document.write(`</div>`);
    document.write(`<hr></hr>`);
  });

  document.write(`</div>`);
}

function listTenants(tenantsarr) {
  //document.write('<h1>Contacts</h1>');

  tenantsarr.forEach(function (item) {
    //document.write(`<div class="${item.role}">`);
    document.write(
      `<h2 class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.name}</h2>`
    );
    document.write(
      `<p class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.unit}</p>`
    );
    document.write(
      `<p class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.contactnumber}</p>`
    );
    document.write(
      `<p class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.email}</p>`
    );
  });
}

function listOwners(ownersarr) {
  //document.write('<h1>Contacts</h1>');

  ownersarr.forEach(function (item) {
    //document.write(`<div class="${item.role}">`);
    document.write(
      `<h2 class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.name}</h2>`
    );
    document.write(
      `<p class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.unit}</p>`
    );
    document.write(
      `<p class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.contactnumber}</p>`
    );
    document.write(
      `<p class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.email}</p>`
    );
  });
}

function listEmployees(employeesarr) {
  //document.write('<h1>Contacts</h1>');

  employeesarr.forEach(function (item) {
    //document.write(`<div class="${item.role}">`);
    document.write(
      `<h2 class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.name}</h2>`
    );
    document.write(
      `<p class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.unit}</p>`
    );
    document.write(
      `<p class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.contactnumber}</p>`
    );
    document.write(
      `<p class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.email}</p>`
    );
  });
}

function listServiceProviders(serviceprovidersarr) {
  //document.write('<h1>Contacts</h1>');

  serviceprovidersarr.forEach(function (item) {
    //document.write(`<div class="${item.role}">`);
    document.write(
      `<h2 class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.name}</h2>`
    );
    document.write(
      `<p class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.unit}</p>`
    );
    document.write(
      `<p class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.contactnumber}</p>`
    );
    document.write(
      `<p class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.email}</p>`
    );
  });
}

function listTrustees(trusteesarr) {
  //document.write('<h1>Contacts</h1>');

  trusteesarr.forEach(function (item) {
    //document.write(`<div class="${item.role}">`);
    document.write(
      `<h2 class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.name}</h2>`
    );
    document.write(
      `<p class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.unit}</p>`
    );
    document.write(
      `<p class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.contactnumber}</p>`
    );
    document.write(
      `<p class="${item.role}" style="font-family: Arial, Helvetica, sans-serif">${item.email}</p>`
    );
  });
}
