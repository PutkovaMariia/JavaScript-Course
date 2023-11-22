'use strict';
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const imagesContainer = document.querySelector('.images');
const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imagesContainer.append(img);
            resolve(img);
        });

        img.addEventListener("error", function () {
            reject(new Error('image not found'));
        });
    });
};

let currentImage;
createImage('img/img-1.jpg')
    .then(img => {
        currentImage = img;
        console.log('img 1');
        return wait(2);
    })
    .then(() => {
        currentImage.style.display = 'none';
        return createImage('img/img-2.jpg');
    })
    .then(img => {
        currentImage = img;
        console.log('img 2');
        return wait(2);
    })
    .then(() => {
        currentImage.style.display = 'none';
    })
    .catch(err => console.error(err));

