
const updateDate = document.getElementById('last-update');
updateDate.innerHTML = "Last Modification: " + document.lastModified;


// const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// const Tday = new Date();
// let day = days[Tday.getDay()];
// let month = months[Tday.getMonth()];
// document.getElementById('today').innerHTML = Tday.toDateString();

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("today").innerHTML = day;

//Wind chill 
const chillURL=""
const temp = document.querySelector('#t').textContent;
const windspeed = document.querySelector('#ws').textContent;

if (temp < 50 && windspeed >4.8) {
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow
        (windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

    const windchill = document.querySelector('#wc')

    windchill.textContent = chill;
}

//Weather Api
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=1858296&appid=17512653d8d6020390bf626d84d1e193";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    // °F = (K - 273.15)* 1.8000 + 32.00
    //console jsObject -> main -> temp
    document.querySelector('#current-temp').textContent = 
    ((jsObject.main.temp - 273.15 ) * 1.8 + 32).toFixed(2);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;

  };
getWeather();