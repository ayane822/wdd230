const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=17512653d8d6020390bf626d84d1e193";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
  };
getWeather();