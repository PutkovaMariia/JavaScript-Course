'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/*
const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `
          <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
    });
};

getCountryData('ukraine');
getCountryData('poland');
getCountryData('germany');
*/

const renderCountry = function (data, className = '') {
    const html = `
          <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
        `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

/*
const getCountryAndNeighbour = function (country) {

    //AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        //render country 1
        renderCountry(data);

        //get neighbour country(2)
        //const [neighbour] = data.borders; //it shows belarus so i decided to choose another neighbour
        const neighbour = data.borders[2];

        if (!neighbour) return;

        //AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText);
            console.log(data2);

            renderCountry(data2, 'neighbour');
        })
    });
};

getCountryAndNeighbour('ukraine');
*/

//the old way
// const request = new XMLHttpRequest();
// request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
// request.send();

//new way with ES6 (immediately return a promise)
// const request = fetch('https://countries-api-836d.onrender.com/countries/name/ukraine');
// console.log(request);

// const getCountryData = function (country){
//     fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//         .then(function (response){//at all promises we can call `then` method, callback function inside `then` will be executed as soon as the promise is fulfilled (result is available)
//             console.log(response);
//             return response.json();
//         })
//         .then(function (data){
//         console.log(data);
//         renderCountry(data[0]);
//     });
// };

const getCountryData = function (country){
    fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
        .then(response => response.json())//at all promises we can call `then` method, callback function inside `then` will be executed as soon as the promise is fulfilled (result is available)
        .then(data => renderCountry(data[0]));
};
getCountryData('ukraine');
