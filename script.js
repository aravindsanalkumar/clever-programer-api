// https://dog.ceo/api/breeds/image/random

const dogImage = document.getElementById('dogImage');

console.log('start');
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response =>  response.json())
    .then(json => {
        console.log(json.message);
        dogImage.innerHTML = `<img src="${json.message}" alt="" height=300 width=300>`
    });
console.log('end');


console.log(fetch('https://dog.ceo/api/breeds/image/random'));

// how to do fetch api req ?
// how do i deal with promises ?
// how do i get json from promises ?

