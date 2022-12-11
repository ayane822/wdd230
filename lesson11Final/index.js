//hamberger//

const ham = document.querySelector('.ham');
const navigation = document.querySelector('.navigation')
function menu(){
    navigation.classList.toggle('responsive');
    ham.classList.toggle('responsive');
}
ham.addEventListener('click', menu,false);

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=1858296&appid=17512653d8d6020390bf626d84d1e193';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    // Calc Kelvin to Fahrenheit 
    document.querySelector('#t').textContent = ((jsObject.main.temp - 273.15)*1.8 + 32).toFixed(2);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    console.log(iconsrc);

document.querySelector('#ws').textContent = jsObject.wind.speed;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);

// Calc WindChill
const temp = document.querySelector('#t').textContent;
const windspeed = document.querySelector('#ws').textContent;

// 35.74 + 0.6215T – 35.75(V0.16) + 0.4275T(V0.16)
let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

const windchill = document.querySelector('#wc')
windchill.textContent = chill;
  });