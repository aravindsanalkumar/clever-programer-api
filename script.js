// https://dog.ceo/api/breeds/image/random

const dogImage = document.getElementById('dogImage');

const randomDog = () => {
    console.log('start');
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response =>  response.json())
        .then(json => {
            console.log(json.message);
            dogImage.innerHTML = `<img src="${json.message}" alt="" height=300 width=300>`;
        });
    console.log('end');
}

console.log(fetch('https://dog.ceo/api/breeds/image/random'));

// how to do fetch api req ?
// how do i deal with promises ?
// how do i get json from promises ?

// ===================================================
// super hero api
// access token : defd2a3acb16c9bfd9bcd731460e1774
// api : https://superheroapi.com/api/defd2a3acb16c9bfd9bcd731460e1774

const superHeroDiv = document.querySelector('.superhero');
const newHeroBtn = document.getElementById('newHero');

const SUPERHERO_TOKEN = 245;

const BASE_URL = `https://superheroapi.com/api.php/defd2a3acb16c9bfd9bcd731460e1774/`;

console.log(BASE_URL)

const superHero = (id,name) => {
    console.log('superhero function called');
    fetch(`${BASE_URL}${id}`)
        .then(response => response.json())
        .then(json =>{
            console.log(json);
            superHeroDiv.innerHTML =  `<img src="${json.image.url}" alt="not working" height=300 width=300>`
        })
}

newHeroBtn.onclick = () => superHero(getRandomNumber());

const getRandomNumber = () => {
    let RandomNum = Math.floor(Math.random()*400 + 1);
    return RandomNum;
}

console.log(getRandomNumber());

