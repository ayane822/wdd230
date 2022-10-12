
const updateDate = document.getElementById('last-update');
updateDate.innerHTML = "Last Modification: " + document.lastModified;


// const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const Tday = new Date();
let day = days[Tday.getDay()];
let month = months[Tday.getMonth()];
document.getElementById('today').innerHTML = Tday.toDateString();
