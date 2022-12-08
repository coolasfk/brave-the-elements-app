const hamburger = document.querySelector(".hamburger--collapse");

const btn = document.querySelector(".input__button");
const thanks = document.querySelector(".input__thank-you");

btn.addEventListener("click", () => {
  btn.style.display = "none";
  thanks.style.display = "flex";
  thanks.style.opacity = 1;

  setTimeout(() => {
    btn.style.display = "flex";
    thanks.style.display = "none";
    thanks.style.opacity = 0;
  }, 4000);
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
});

const weatherDescription = document.querySelector(".weather-description");
const weatherTemp = document.querySelector(".icon-wrapper__temp");
const weatherIcon = document.querySelector(".icon-wrapper__icon");

function success() {
  console.log("success");
}

function error() {
  console.log("error");
}
function addWeather(position) {
  (weatherDescription.textContent = `The weather today in ${position.name} is:  \r\n ${position.weather[0].description}`),
    // (a = `${position.main.temp}`),
    // (b = Math.round(a - 273.15)),
    (temp = Math.round(position.main.temp)),
    (weatherTemp.textContent = `${temp}°C`),
    console.log(position),
    (weatherIcon.src = `http://openweathermap.org/img/wn/${position.weather[0].icon}@2x.png`);
}
// function convertK(kelvin) =>

let getWeather = navigator.geolocation.getCurrentPosition((position) => {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=98cf5456a9a3e919f85b22a378be2b52&units=metric`,
  )
    .then((response) => response.json())
    .then((position) => {
      addWeather(position);
    })
    .catch((error) => console.log(error));
});

const logo = document.querySelectorAll(".logo");
console.log(logo);

logo.style.border = "4px red solid";
