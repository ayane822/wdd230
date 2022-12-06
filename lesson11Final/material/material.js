const requestURL = 'https://ayane822.github.io/wdd230/chamber2/directory.json';

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
        const business = jsonObject['businesses'];
        business.forEach(displayBusinessCards);
    });

    function displayBusinessCards(business) {  
        let cards = document.querySelector('.cards');
        cards.setAttribute('style', 'grid-template-columns: 2fr 1fr 1fr 1fr;');

        let card = document.createElement('section') 
        let address = document.createElement('p');
        address.textContent = `Address: ${business.address}`
        let phone  = document.createElement('p');
        phone.textContent = `Phone: ${business.phone}`;
        let website  = document.createElement('p');
        website.textContent = `Website: ${business.website}`;
        let img = document.createElement('img');
        // let image_path = `images/${business.image}`
        img.setAttribute('src', business.image);
        // img.setAttribute('alt', `${business.name} logo`);
        
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
        const business = jsonObject['businesses'];
        business.forEach(displayBusinessList);
    });

    function displayBusinessList(business) { 

        let list_row = document.createElement('tr');
        let td_name = document.createElement('td');
        td_name.textContent = `${business.name}`;

        let td_address = document.createElement('td');
        td_address.textContent = `${business.address}`;

        let td_number = document.createElement('td');
        td_number.textContent = `${business.phone}`;

        let td_web = document.createElement('td');
        let web_p = document.createElement('a')
        web_p.setAttribute('href', business.website);
        web_p.textContent = `${business.website}`;

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