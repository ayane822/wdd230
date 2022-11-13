const requestURL = 'https://ayane822.github.io/wdd230/businessjson/directory.json'

async function getBusiness(requestURL){
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok){
        const jsobject = await response.json();
        console.log(jsobject);
        const business = jsobject['businesses']
        console.log(businesses[0].lastname)
        businesses.forEach(displayBusiness);
    }
}

getBusiness(requestURL);

function displayBusiness(item){
    let card = document.createElement('section');
    let 
}