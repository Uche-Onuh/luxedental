const selectElement = element => document.querySelector(element);
const containers = document.querySelectorAll(".container");

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
    } else {
      entry.target.style.animation = "none";
    }
  });
});
containers.forEach(container => {
  observer.observe(container);
});

selectElement(".menu-icons").addEventListener("click", () => {
  selectElement("nav").classList.toggle("active");
});

const myslide = document.querySelectorAll(".myslider"),
  dot = document.querySelectorAll(".dot");
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
  counter += 1;
  slidefun(counter);
}
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active1", "");
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active1";
}

function initMap() {
  //map otions
  var options = {
    zoom: 8,
    center: { lat: 6.585573265488569, lng: -3.3398982507300357 },
  };

  var map = new google.maps.Map(document.getElementById("map"), options);

  var marker = new google.maps.Marker({
    position: { lat: 6.583547766577229, lng: -3.357659639003751 },
    map: map,
  });

  var infoWindow = new google.maps.infoWindow({
    content: "<h1>Luxe Dental</h1>",
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });
}

// let firstName = document.querySelector("#firstName");
// let lastName = document.querySelector("#lastName");
// let subject = document.querySelector("#subject");
// let email = document.querySelector("#email");
// let message = document.querySelector("#message");
// let time = document.querySelector("#time");

// const contactForm = document.querySelector("#my-forms");

// contactForm.addEventListener("submit", e => {
//   e.preventDefault();
//   let formData = {
//     firstName: firstName.value,
//     lastName: lastName.value,
//     email: email.value,
//     subject: subject.value,
//     message: message.value,
//   };

//   let xhr = new XMLHttpRequest();
//   xhr.open("post", "/", true);
//   xhr.setRequestHeader("content-type", "application/json");
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       firstName.value = "";
//       lastName.value = "";
//       email.value = "";
//       subject.value = "";
//       message.value = "";
//     } else {
//       console.log("error");
//     }
//   };
//   xhr.send(JSON.stringify(formData));
// });

