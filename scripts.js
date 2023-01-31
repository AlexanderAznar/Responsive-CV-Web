const btn = document.getElementById('btn')

btn.addEventListener('click', function() {
  getPerson(getData)
})


function getPerson(cb){
  const url = "https://randomuser.me/api/?gender=male";
  const request = new XMLHttpRequest();

  request.open("GET", url, true);
  request.onload = function () {
    if (this.status === 200) {
      cb(this.responseText, showData);
    }
  };

  request.send();
}


function getData(response, cb) {
  const data = JSON.parse(response)

  const {
    name: { first },
    name: { last },
    picture: { large },
    location: { city },
    location: {state},
    location: { country },
    phone,
    email,
    dob: { age },
    location: { street : { name } },
    location: { street : { number } },
     } = data.results[0];
  cb(first, last, large, city, state, country, phone, email, age, name, number);
}


function showData(first, last, large, city, state, country, phone, email, age, name, number) {
  document.getElementById('first').textContent = `${first} ${last}`;
  document.getElementById('first').textContent = first;
  document.getElementById('last').textContent = last;
  document.getElementById('city').textContent = city;
  document.getElementById('state').textContent = state;
  document.getElementById('country').textContent = country;
  document.getElementById('phone').textContent = phone;
  document.getElementById('email').textContent = email;
  document.getElementById('photo').src = large;
  document.getElementById('age').textContent = age;
  document.getElementById('name').textContent = name;
  document.getElementById('number').textContent = number;
}


AOS.init({
  duration: 2000
}); 



function mostrarOcultarPerfil() {
  const perfiltxt = document.getElementById("perfiltxt");
  if (perfiltxt.style.display === "block") {
    perfiltxt.style.display = "none";
  } else {
    perfiltxt.style.display = "block";
  }
}

document.getElementById('esconderperfil').addEventListener('click', function() {
  mostrarOcultarPerfil();
})


const tooltips = Array.from(document.querySelectorAll(".tooltip"));
const tooltipContainer = document.querySelector(".tooltip-container");


let tooltipID;
tooltips.forEach((tooltip) => {
  tooltip.addEventListener("mouseenter", (e) => {

    tooltipID = e.target.getAttribute('data-id');
    tooltipContainer.classList.add("fade-in");
    tooltipContainer.style.rigth = `${e.pageX}px`;
    tooltipContainer.style.footer = `${e.pageY}px`;
    tooltipContainer.innerText = data[tooltipID - 1].txt;
  });

  tooltip.addEventListener("mouseout", (e) => {
    tooltipContainer.classList.remove("fade-in");
  });
});

tooltipContainer.addEventListener('mouseenter', () => {

    tooltipContainer.classList.add("fade-in");

})
tooltipContainer.addEventListener('mouseout', () => {
    
    tooltipContainer.classList.remove("fade-in");

})
