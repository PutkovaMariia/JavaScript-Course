'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
};
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

const getJSON = function (url, errorMsg = 'something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok)
            throw new Error(`${errorMsg} ${response.status}`);
        return response.json();
    });
    };

    // const getCountryData = function (country) {
    //     //country 1
    //     fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    //         .then(response => {
    //
    //             if (!response.ok)
    //                 throw new Error(`country not found ${response.status}`);
    //
    //             return response.json();
    //         }) //at all promises we can call `then` method, callback function inside `then` will be executed as soon as the promise is fulfilled (result is available)
    //         //err => alert(err))//catching the error
    //         .then(data => {
    //             renderCountry(data[0]);
    //             //const neighbour = data[0].borders?.[0];
    //             //const neighbour = data[0].borders[2];
    //             const neighbour = 'dfghjk';
    //
    //             if (!neighbour) return;
    //
    //             //country 2
    //             return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`);
    //         })
    //         .then(response => {
    //
    //             if (!response.ok)
    //                 throw new Error(`country not found ${response.status}`);
    //
    //             return response.json();
    //         })
    //         .then(data => renderCountry(data, 'neighbour'))
    //         .catch(err => {//instead of catching the error in each place we can call `catch` ones
    //             console.error(`${err} is caught💥💥💥`);
    //             renderError(`something went wrong 💔 ${err.message}`)
    //         })
    //         .finally(() => {//works always, not depends on is the `then` of `catch`
    //             countriesContainer.style.opacity = 1;
    //         })
    // };
/*
const getCountryData = function (country) {
    //country 1
    getJSON(`https://countries-api-836d.onrender.com/countries/name/${country}`, 'country not found')
        .then(data => {
            renderCountry(data[0]);
            //const neighbour = data[0].borders?.[0];
            const neighbour = data[0].borders[2];

            if (!neighbour) throw new Error('no neighbour found');

            //country 2
            return getJSON(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`, 'country not found');
        })
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {//instead of catching the error in each place we can call `catch` ones
            console.error(`${err} is caught💥💥💥`);
            renderError(`something went wrong 💔 ${err.message}`)
        })
        .finally(() => {//works always, not depends on is the `then` of `catch`
            countriesContainer.style.opacity = 1;
        })
};

btn.addEventListener('click', function () {
        getCountryData('ukraine');
    });

//getCountryData('dfghjk');
*/
///////////////////////////////////////////////
//coding challenge 1
///////////////////////////////////////////////
const whereAmI = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=668908444357391448987x101983`)
        .then(res => {
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
            return res.json();
        })
        .then(data => {
            console.log(data);
            console.log(`You are in ${data.city}, ${data.country}`);

            return fetch(`https://countries-api-836d.onrender.com/countries/name/${data.country}`);
        })
        .then(res => {
            if (!res.ok) throw new Error(`Country not found (${res.status})`);

            return res.json();
        })
        .then(data => renderCountry(data[0]))
        .catch(err => console.error(`${err.message} 💥`));
};
whereAmI(52.508, 13.381);
///////////////////////////////////////////////
