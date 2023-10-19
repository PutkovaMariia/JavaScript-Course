'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');
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
btnScrollTo.addEventListener('click', function (e) {
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
    .addEventListener('click', function (e) {
        e.preventDefault();

        //matching strategy (if the target element contains the class
        // we are interested in, because we aren't interested in
        // clicks on whole area)
        if (e.target.classList.contains('nav__link')) {
            const id = e.target.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth'
            });
        }
    })

//tab component

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');

    //guard clause
    if (!clicked) return;

    //remove active classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));

    //activate tab
    clicked.classList.add('operations__tab--active');

    //activate content area
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active');
})

//menu fade animation

const handleHover = function (e) {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach(el => {
            if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
    }
}

// nav.addEventListener('mouseover', function (e) {
//     handleHover(e, 0.5);
// });

//passing argument into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

/////////////////////////
//sticky navigation (this is the bad way of doing it, because it counts every time we scroll so it takes a lot of resources)

// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function (e){
//     if (window.scrollY > initialCoords.top) nav.classList.add('sticky')
//     else nav.classList.remove('sticky');
// })

////////////////////////////
//sticky navigation : intersection observer API

//this callback function will be called each time when the observed
// element (our target element) is intersecting the root element
// at the threshold that we defined

// const obsCallback = function (entries, observer){
//     entries.forEach(entry => {
//         console.log(entry);
//     })
// };
//
// const obsOptions = {
//     root: null,
//     threshold: [0, 0.2],
// };
//
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
/////////////////////////////////////
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries){
    const [entry] = entries;
    if (!entry.isIntersecting) nav.classList.add('sticky')
    else nav.classList.remove('sticky');
}

const headerObserver =
    new IntersectionObserver(stickyNav, {
        root: null,
        threshold: 0,
        rootMargin: `-${navHeight}px`,
    });
headerObserver.observe(header);

//reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer){
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};

const sectionObserver =
    new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

allSections.forEach(function (section){
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
})

/////////////////////////////////////////////////
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
/*
const h1 = document.querySelector('h1');

//going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style
    .background = 'var(--gradient-secondary)';

h1.closest('h1').style
    .background = 'var(--gradient-primary)';

//going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

//how we can work with all siblings of our element
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el){
  if (el !== h1) el.style.transform = 'scale(0.5)';
})
*/




