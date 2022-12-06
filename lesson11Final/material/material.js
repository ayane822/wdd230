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
        let address = document.createElement('p');
        address.textContent = `Address: ${material.address}`
        let phone  = document.createElement('p');
        phone.textContent = `Phone: ${material.phone}`;
        let website  = document.createElement('p');
        website.textContent = `Website: ${material.website}`;
        let img = document.createElement('img');
        // let image_path = `images/${material.image}`
        img.setAttribute('src', material.image);
        // img.setAttribute('alt', `${material.name} logo`);
        
        card.appendChild(img); 
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        
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
        let td_name = document.createElement('td');
        td_name.textContent = `${material.name}`;

        let td_address = document.createElement('td');
        td_address.textContent = `${material.address}`;

        let td_number = document.createElement('td');
        td_number.textContent = `${material.phone}`;

        let td_web = document.createElement('td');
        let web_p = document.createElement('a')
        web_p.setAttribute('href', material.website);
        web_p.textContent = `${material.website}`;

        td_web.appendChild(web_p)
        list_row.appendChild(td_name)
        list_row.appendChild(td_address)
        list_row.appendChild(td_number)
        list_row.appendChild(td_web)
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