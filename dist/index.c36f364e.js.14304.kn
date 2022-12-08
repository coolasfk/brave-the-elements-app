const hamburger = document.querySelector(".hamburger--collapse");
const btn = document.querySelector(".input__button");
const thanks = document.querySelector(".input__thank-you");
btn.addEventListener("click", ()=>{
    btn.style.display = "none";
    thanks.style.display = "flex";
    thanks.style.opacity = 1;
    setTimeout(()=>{
        btn.style.display = "flex";
        thanks.style.display = "none";
        thanks.style.opacity = 0;
    }, 4000);
});
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("is-active");
});
const weatherDescription = document.querySelector(".weather-description");
const weatherTemp = document.querySelector(".icon-wrapper__temp");
const weatherIcon = document.querySelector(".icon-wrapper__icon");
let lat;
let lon;
const weather = navigator.geolocation.getCurrentPosition(()=>{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    return lat;
});
var api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=98cf5456a9a3e919f85b22a378be2b52`;

//# sourceMappingURL=index.c36f364e.js.map
