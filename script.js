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
            const name = `<h2>${json.name}</h2>`;
            const stats = getStatsHTML(json);
            superHeroDiv.innerHTML =  `
            ${name}
            <img src="${json.image.url}" alt="not working" height=300 width=300>
            ${stats}`;
        })
}

const getStatsHTML = (character) => {
   console.log(Object.keys(character.powerstats));
   const stats = Object.keys(character.powerstats).map(stat => {
       return `<p>${stat}:${character.powerstats[stat]}</p>`
   });
   console.log(stats);
   return stats;
}


const searchBtn = document.getElementById('searchBtn');


const searchSuperHero = () =>{
    const searchInput = document.getElementById('searchInput').value;
    console.log(searchInput)
    fetch(`${BASE_URL}search/${searchInput}`)
        .then(response => response.json())
        .then(json =>{
            console.log(json);
            const hero = json.results[0];
            const name = `<h2>${json.results[0].name}</h2>`;
            const stats = getStatsHTML(json.results[0]);

            superHeroDiv.innerHTML =  `
            ${name}
            <img src="${hero.image.url}" alt="not working" height=300 width=300>
            ${stats}`;
        })
}

searchBtn.onclick = () =>searchSuperHero();

newHeroBtn.onclick = () => superHero(getRandomNumber());

const getRandomNumber = () => {
    let RandomNum = Math.floor(Math.random()*400 + 1);
    return RandomNum;
}

console.log(getRandomNumber());

