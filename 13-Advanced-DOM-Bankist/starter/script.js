'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////
//button scrolling
btnScrollTo.addEventListener('click', function (e){
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({behavior: 'smooth'});
})

//////////////////////////////
//page navigation

//this method can be used when we have few links, but if there are 10,000 of them, it will be time-consuming and resource-intensive
// document.querySelectorAll('.nav__link')
//     .forEach(function (el){
//   el.addEventListener('click', function (e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'
//     });
//   })
// })

//1.add event listener to common parent element
//2.determine what element originated the event

//event delegation which is better than attaching the same event handler
//to multiple elements, instead we simply added one, big event handler
// function to the parent element of all the elements we are interested in
//than we determined where the click event came from
document.querySelector('.nav__links')
    .addEventListener('click', function (e){
      e.preventDefault();

      //matching strategy (if the target element contains the class
      // we are interested in, because we aren't interested in
      // clicks on whole area)
      if (e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({
          behavior: 'smooth'
        });
      }
})

/////////////////////////////////////////////////
/*
//selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);//if DOM changes - this collection also changes automatically

console.log(document.getElementsByClassName('btn'));

//creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie--message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
    'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it</button>';
// header.prepend(message);//add message before header
header.append(message);//add message after header
// header.append(message.cloneNode(true));//now message is in two places, because we cloned it. previous we just moved it, as it inserts to code only one time
// header.before(message);
// header.after(message);

//delete elements
document.querySelector('.btn--close-cookie')
    .addEventListener('click', function (){
      message.remove();
    })

//styles
message.style.backgroundColor = '#37383d';
message.style.width = '100%';

console.log(message.style.height);//<empty string>
console.log(message.style.backgroundColor);//rgb(55, 56, 61) - works only with styles that we set manually

console.log(getComputedStyle(message).height);//50.3px - now we can get style that we didn't set with help getComputedStyle
message.style.height = Number
    .parseFloat(getComputedStyle(message).height, 10)
    + 20 + 'px';//we add Number.parseFloat because without it ...height will be a string and we can not add number to it
console.log(message.style.height);//70.3px

document.documentElement.style.setProperty('--color-primary', 'orangered');

//attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);//Bankist logo
console.log(logo.src);//http://localhost:63342/JavaScript-Course/13-Advanced-DOM-Bankist/starter/img/logo.png
console.log(logo.getAttribute('src'));//img/logo.png
console.log(logo.className);//nav__logo - that is how we get content from attributes in html

logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);//Beautiful minimalist logo

const link = document.querySelector('.nav__link--btn');
console.log(link.href);//http://localhost:63342/JavaScript-Course/13-Advanced-DOM-Bankist/starter/index.html?_ijt=isk3011dqlecbo3ag0hdulpd93&_ij_reload=RELOAD_ON_SAVE#
console.log(link.getAttribute('href'));//#

//data attributes (word 'data' need to be in attribute)
console.log(logo.dataset.versionNumber);//3.0 - we need to write attribute in camelCase

//classes (what we can do with them)
logo.classList.add('c');//'c' as an example
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');//not 'includes' (contains only in DOM JS)

logo.className = 'jonas';//DON"T USE THIS because it will rewrite all existing classes
*/
/*
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e){
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  //
  // console.log(e.target.getBoundingClientRect());
  //
  // console.log('current scroll (x/y)', window.pageXOffset, window.pageYOffset);
  //
  // console.log('height/width viewport', document.documentElement.clientHeight,
  //     document.documentElement.clientWidth);

  //scrolling
  //window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

  //old way to scroll
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // })

  //new way to scroll
  section1.scrollIntoView({behavior: 'smooth'});
})
 */
/*
const h1 = document.querySelector('h1');

//new way
const alertH1 = function (e){
  alert('addEventListener: great! you are reading a heading');

  h1.removeEventListener('mouseenter', alertH1);
};
h1.addEventListener('mouseenter', alertH1);
// setTimeout(() =>
//     h1.removeEventListener('mouseenter', alertH1), 3000);

//old way
// h1.onmouseenter = function (e){
//   alert('onmouseenter: great! you are reading a heading');
// };
*/
/*
//rgb (255, 255, 255)
const randomInt = (min, max) =>
    Math.floor(Math.random() * (max-min+1) + min);
const  randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click',
    function (e){
      this.style.backgroundColor = randomColor();
      console.log('link', e.target, e.currentTarget);

      //stop event propagation
      // e.stopPropagation();
    });
document.querySelector('.nav__links').addEventListener('click',
    function (e){
      this.style.backgroundColor = randomColor();
      console.log('container', e.target, e.currentTarget);
    });
document.querySelector('.nav').addEventListener('click',
    function (e){
      this.style.backgroundColor = randomColor();
      console.log('nav', e.target, e.currentTarget);
    });
*/

