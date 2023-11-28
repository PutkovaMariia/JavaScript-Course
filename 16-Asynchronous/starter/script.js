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
*/
//getCountryData('dfghjk');

///////////////////////////////////////////////
//coding challenge 1
///////////////////////////////////////////////
/*
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
 */
///////////////////////////////////////////////
/*
console.log('test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('resolved promise 1').then(res =>
    console.log(res));//microtasks have priority over regular callback functions
Promise.resolve('resolved promise 2').then(res =>{
    for (let i=0; i<1234567890; i++){}
    console.log(res);
});
console.log('test end');
//test start
// test end
// resolved promise 1
// resolved promise 2
// 0 sec timer
*/
/*
const lotteryPromise = new Promise(function (resolve, reject) {
    console.log('lottery draw is happening');
    setTimeout(function (){
    if (Math.random() >= 0.5){
        resolve('you win');
    } else{
        reject(new Error('you lost your money'));
    }
}, 2000);
});
lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

//promisifying setTimeout
const wait = function (seconds){
    return new Promise(function (resolve){
        setTimeout(resolve, seconds * 1000);
    });
};
wait(2).then(() => {
    console.log('i waited 2 second');
    return wait(1);
}).then(() => console.log('i waited for 1 ore second'));

////////

Promise.resolve('res').then(x => console.log(x));
Promise.reject('rej').catch(x => console.error(x));
*/

/*
const whereAmI = function () {
    getPosition().then(pos => {
        const {latitude: lat, longitude: lng} = pos.coords;

        return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=668908444357391448987x101983`)
    })
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

btn.addEventListener('click', whereAmI);
*/

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

// fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(res => console.log(res))

const whereAmI = async function (country) {
    try {    //geolocation
        const pos = await getPosition();
        const {latitude: lat, longitude: lng} = pos.coords;

        //reverse geocoding
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=668908444357391448987x101983`);
        if (!resGeo.ok) throw new Error('problem getting location data');
        const dataGeo = await resGeo.json();

        //country data
        const res = await fetch(`https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`);
        if (!res.ok) throw new Error('problem getting country data');
        const data = await res.json();
        renderCountry(data[0]);

        return `you are in ${dataGeo.city}, ${dataGeo.country}`;
    } catch (err) {
        console.error(`${err}💥💥💥`);
        renderError(`💥💥💥 ${err.message}`);

        //reject promise returned from async function
        throw err;
    }
};
console.log('1. will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//     .then(city => console.log(`2. ${city}`))
//     .catch(err => console.error(`2. ${err.message} !!!`))
//     .finally(() => console.log('3. finished getting location'));

(async function () {
    try {
        const city = await whereAmI();
        console.log(`2. ${city}`);
    } catch (err) {
        console.error(`2. ${err.message} !!!`);
    }
    console.log('3. finished getting location');
})();

// try {
//     let y = 1;
//     const x = 2;
//     x = 3;
// } catch (err) {
//     alert(err.message);
// }


