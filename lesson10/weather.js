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