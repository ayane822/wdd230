
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


// var messageList = $('#messages');

// //openweathermap（天気予報API）に接続
// var request = new XMLHttpRequest();
// var cityName = "Kure";
// var owmApiKey = "自分が取得したAPI";
// var owmURL = "http://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&APPID="+ owmApiKey +"";

// request.open('GET', owmURL, true);
// //結果をjson型で受け取る
// request.responseType = 'json';

// request.onload = function () {
//  var data = this.response;
//  console.log(data);
//  var messageElement = $("<il><p class='weather'>" + data["weather"][0]["main"] + "</p></il>");
//  //HTMLに取得したデータを追加する
//  messageList.append(messageElement);
// };

// request.send();