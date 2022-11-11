//ASYNC AWAIT FETCH

// const { default: imagemin } = require("imagemin");

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


//async and await should be always together
async function getProphets(requestURL){
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok){
        const jsobject = await response.json();
        console.log(jsobject);
        const prophets = jsobject['prophets']
        console.log(prophets[0].lastname)
        prophets.forEach(displayProphets);
    }
}

getProphets(requestURL);

function displayProphets(item){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h3');
    //img
    let img = document.createElement('img');

    h2.textContent = item.name + ' ' + item.lastname;
    h3.textContent = 'Date of Birth: ' + item.birthdate;
    h4.textContent = 'Place of Birth: ' + item.birthplace;
    //img
    img.setAttribute('src', item.imageurl);

    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h4);
    //img
    card.appendChild(img);
    document.querySelector('.cards').appendChild(card);   
    
    // card.style.display = 'none'; 
    // card.forEach((item) => {
    //     item.remove();
    }



