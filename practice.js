//sequence
let date = new Date();

console.log(date);

let year = date.getFullYear();

console.log(year);

document.querySelector('h1').textContent = year ;

let currentdate = document.lastModified;

console.log(currentdate);

document.querySelector('div').textContent = currentdate;

document.querySelector('.year').textContent = year;

`There are ${daycount} days until ${targetEvent}!`