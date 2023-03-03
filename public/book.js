// const selected = document.querySelector(".selected");
// const optionsContainer = document.querySelector(".options-container");

// const optionsList = document.querySelectorAll(".option");

// selected.addEventListener("click", () => {
//   optionsContainer.classList.toggle("active4");
// });

// optionsList.forEach(o => {
//   o.addEventListener("click", () => {
//     selected.innerHTML = o.querySelector("label").innerHTML;

//     o.querySelector("input").checked = true;
//     optionsContainer.classList.remove("active4");
//   });
// });

function getSelectValue() {
  let selectedValue = document.getElementById("list");
  console.log(selectedValue.value);
}
getSelectValue();

let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let phone = document.querySelector("#number");
let date = document.querySelector("#date");
let time = document.querySelector("#time");
let selectedValue = document.getElementById("list");

const contactForm = document.querySelector("#my-form");

contactForm.addEventListener("submit", e => {
  e.preventDefault();
  let formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    date: date.value,
    time: time.value,
    selectedValue: selectedValue.value,
  };
  console.log(formData);

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/book", true);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200) {
      window.location = "/thanks";
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      date.value = "";
      phone.value = "";
      time.value = "";
      selectedValue.value = "Select Service";
    } else {
    }
  };
  xhr.send(JSON.stringify(formData));
});
