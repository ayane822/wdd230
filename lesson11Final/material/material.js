const requestURL = 'https://ayane822.github.io/wdd230/lesson11Final/material/material.json';

function showCards(){
    let row = document.querySelectorAll('tr');
    row.forEach((item) => {
        item.remove();
    });

    let section = document.querySelectorAll('section');
        section.forEach((item) => {
        item.remove();
    });

    fetch(requestURL)
    .then((response)=> {
        if(response.ok){
            return response.json();
        } else {
            alert('Data not Available');
        }
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  
        const material = jsonObject['materials'];
        material.forEach(displayMaterialCards);
    });

    function displayMaterialCards(material) {  
        let cards = document.querySelector('.cards');
        cards.setAttribute('style', 'grid-template-columns: 2fr 1fr 1fr 1fr;');

        let card = document.createElement('section') 
        let name = document.createElement('p');
        name.textContent = `Material: ${material.name}`
        let level  = document.createElement('p');
        level.textContent = `Level: ${material.level}`;
        let about  = document.createElement('p');
        about.textContent = `${material.about}`;
        let img = document.createElement('img');
        // let image_path = `images/${material.image}`
        img.setAttribute('src', material.image);
        // img.setAttribute('alt', `${material.name} logo`);
        
        card.appendChild(img); 
        card.appendChild(name);
        card.appendChild(level);
        card.appendChild(about);
        
        document.querySelector('div.cards').appendChild(card);
        
        
    }
    
}


function showList(){
    let section = document.querySelectorAll('section');
        section.forEach((item) => {
            item.remove();
    });
    
    let row = document.querySelectorAll('tr');
        row.forEach((item) => {
        item.remove();
    });
    fetch(requestURL)
    .then((response)=> {
        if(response.ok){
            return response.json();
        } else {
            alert('Data not Available');
        }
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  
        const material = jsonObject['materials'];
        material.forEach(displayMaterialList);
    });

    function displayMaterialList(material) { 

        let list_row = document.createElement('tr');
        let td_rank = document.createElement('td');
        td_rank.textContent = `${material.rank}`;

        let td_name = document.createElement('td');
        td_name.textContent = `${material.name}`;

        let td_level = document.createElement('td');
        td_level.textContent = `${material.level}`;

        let td_abo = document.createElement('td');
        let abo_p = document.createElement('a')
        // abo_p.setAttribute('href', material.about);
        abo_p.textContent = `${material.about}`;

        td_abo.appendChild(abo_p)
        list_row.appendChild(td_rank)
        list_row.appendChild(td_name)
        list_row.appendChild(td_level)
        list_row.appendChild(td_abo)
        document.querySelector('table').appendChild(list_row);

     }
}

showCards();

let cards = document.querySelector('#cards');
cards.addEventListener('click', showCards);

let list = document.querySelector('#list');
list.addEventListener('click', showList);


function reportWindowSize() {
  if (window.innerWidth > 900 && window.innerWidth < 1100) {
      showList();
  } else {
      showCards();
  }
  console.log(window.innerWidth);
}

window.addEventListener('resize', reportWindowSize);
window.addEventListener('load', reportWindowSize);

//TODAY'S DATE
let w_names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let m_names = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let mydate = new Date();
console.log(mydate);

let weekname = w_names[mydate.getDay()];
console.log(mydate.getDay());
let monthname = m_names[mydate.getMonth()];

const dateoutput = document.querySelector('#date');

dateoutput.textContent = weekname + ", " + mydate.getDate() + " " + monthname + " " + mydate.getFullYear();
