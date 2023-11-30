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
/*
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
*/

const loadNPause = async function () {
    try {
        //load image 1
        let img = await createImage('img/img-1.jpg');
        console.log('img 1');
        await wait(2);
        img.style.display = 'none';

        //load image 2
        img = await createImage('img/img-2.jpg');
        console.log('img 2');
        await wait(2);
        img.style.display = 'none';

    } catch (err) {
        console.error(`${err.message} !!!`);
    }
};
//loadNPause();

const loadAll = async function(imgArr){
    try {
        const imgs = imgArr.map(async img => await createImage(img));
        //console.log(imgs);

        const imgEl = await Promise.all(imgs);
        console.log(imgEl);

        imgEl.forEach(img => img.classList.add('parallel'));
    } catch (err) {
        console.error(err);
    }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])


