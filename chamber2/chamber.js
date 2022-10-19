
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


const temp = document.querySelector('#t').textContent;
const windspeed = document.querySelector('#ws').textContent;

if (temp < 50 && windspeed >4.8) {
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow
        (windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

    const windchill = document.querySelector('#wc')

    windchill.textContent = chill;
}
