let dataContact = [];
const from = document.querySelector("#submitForm");
let inputName = document.querySelector("#name");
let inputAddress = document.querySelector("#address");
let displayContact = document.querySelector(".contact");
const fromEdit = document.querySelector("#editForm");
let inputEditName = document.querySelector("#editName");
let inpuEditAddress = document.querySelector("#editAddress");

// Add Contact// Add Contact//
// amati flownya adi!!!
function loopContact(data) {
  let html = "";

  for (let datas of data) {
    html += `<div class="card" id="${datas.id}">
    <p class="names"><span>Name</span> : ${datas.name}</p>
    <p class="address"><span>Address</span> : ${datas.address}</p>
    <div class="button-contact">
      <button class="delete-contact" onclick="deleteContact(${datas.id})">delete</button>
      <a href="#editForm"><button class="edit-contact" onclick="editContact(${datas.id})">edit</button></a>
    </div>
  </div>`;
  }
  // pahami konsepnya adi !!!
  displayContact.innerHTML = html;
}

// Add Contact // Add Contact//
from.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = inputName.value;
  let address = inputAddress.value;
  let data = {
    id: Date.now(),
    name: name,
    address: address,
  };

  if (inputName.value == "" || inputAddress.value == "") {
    alert("Tolong Isi Data Dengan Lengkap");
    return;
  }

  inputName.value = "";
  inputAddress.value = "";
  dataContact.push(data);
  loopContact(dataContact);
  console.log(dataContact);
});

let dataDelet = {};
// Add Contact // Add Contact//
function deleteContact(id) {
  dataDelet = dataContact.filter((item) => {
    return item.id != id;
  });

  console.log(dataDelet);
  loopContact(dataDelet);

  // dataContact.splice(
  //   dataContact.findIndex((data) => data.id === id),
  //   1
  // );
}

// Edit Contact// Edit Contact//

let dataOld = {};
function editContact(id) {
  // console.log(id);
  dataContact.map((data) => {
    if (data.id == id) {
      inputEditName.value = data.name;
      inpuEditAddress.value = data.address;
      let dataUser = {
        idOld: data.id,
        nameOld: data.name,
        addressOld: data.address,
      };
      dataOld = dataUser;
      console.log(dataOld);
    }
  });
}

// Proses Edit Contact // Proses Edit Contact //
fromEdit.addEventListener("submit", (e) => {
  e.preventDefault();

  dataContact.map((data) => {
    if (data.id == dataOld.idOld) {
      data.name = inputEditName.value;
      data.address = inpuEditAddress.value;
      // dataContact.splice(data.id);
      console.log(dataContact);
      loopContact(dataContact);
    }
  });
  if (inputEditName.value == "" || inpuEditAddress.value == "") {
    alert("Tolong Isi Data Dengan Lengkap");
    return;
  }
  inputEditName.value = "";
  inpuEditAddress.value = "";
});
