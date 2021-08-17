'use strict';
import sass from '../sass/main.scss';
import { gsap } from 'gsap';
// Getting Ui Elements for Nav bar
const hamburger = document.querySelector('.header-toggle');
const menu = document.querySelector('.header-menu');
const bannerAddition = document.querySelector('#bannerBgAddition');
const body = document.querySelector('body');
const mobileLinks = document.querySelectorAll('.mobile-link');
const header = document.querySelector('.header');
const anim = document.querySelectorAll('.anim');
const navbar = document.querySelector('.header-nav');
const hero = document.querySelector('.hero');
const text = document.querySelector('.text');
const hand = document.querySelector('.hero-hand');
const card = document.querySelector('.operation-card');
const h3 = document.querySelector('.text-h3');
const heroes = document.querySelectorAll('.heroes');
const getStarted = document.querySelector('.hero-button');
const hero1 = document.querySelector('.red');
const hero2 = document.querySelector('.green');
const hero3 = document.querySelector('.dark');
const sponsor = document.querySelector('.hero-sponsor');
hamburger.addEventListener('click', function (e) {
  //   console.log('i love this');
  body.classList.toggle('noscroll');
  header.classList.toggle('open');
  // hero.classList.toggle('opacity');
});

// Event Listener for mobile nav items
mobileLinks.forEach((item) => {
  item.addEventListener('click', function () {
    // if (header.classList.contains('open')) {
    //   header.classList.remove('open');
    // }
    header.classList.contains('open')
      ? header.classList.remove('open')
      : header.classList.add('open');
    // console.log('i');
  });
});

// Testing for the banner
const bannertl = gsap.timeline();

console.log(anim);
// bannertl.to([bannerAddition], {
//   duration: 1.1,
//   width: 0,
//   // opacity: ,
//   skewX: 7,
//   ease: 'power3.inOut',
//   stagger: {
//     amount: 0.2,
//   },
// });

// Adding a listener to listen for tweens on different sizes
// function buildConditionalTween(mediaQuery) {
//   console.log('query', mediaQuery);
//   if (mediaQuery.matches) {
//     bannertl.to([bannerAddition], {
//       duration: 1.1,
//       width: 0,
//       // opacity: ,
//       skewX: 12,
//       ease: 'power3.inOut',
//       stagger: {
//         amount: 0.2,
//       },
//     });
//   } else {
//     bannertl.to([bannerAddition], {
//       duration: 1.1,
//       width: 0,
//       // opacity: ,
//       skewX: 7,
//       ease: 'power3.inOut',
//       stagger: {
//         amount: 0.2,
//       },
//     });
//   }
// }
bannertl
  .from(anim, {
    y: 16,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.inOut',
  })
  .to([bannerAddition], {
    delay: -0.2,
    duration: 1,
    width: 0,
    opacity: 0,
    skewX: 12,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.2,
    },
    clearPops: 'all',
  })
  .from(text, {
    delay: -0.6,
    y: 80,
    duration: 0.8,
    ease: 'power3.out',
    opacity: 0,
    stagger: {
      amount: 0.2,
    },
  })
  .from(h3, {
    delay: -0.6,
    y: 80,
    duration: 0.8,
    ease: 'power3.out',
    opacity: 0,
    stagger: {
      amount: 0.2,
    },
  })
  .from(sponsor, {
    delay: -0.8,
    y: 80,
    duration: 0.9,
    ease: 'power3.out',
    opacity: 0,
    stagger: {
      amount: 0.2,
    },
  })
  // .from(getStarted, {
  //   delay: -0.7,
  //   x: 80,
  //   duration: 0.9,
  //   ease: 'power3.out',
  //   opacity: 0,
  // })
  .from(hand, {
    delay: 0.5,
    x: -100,
    skewX: 2,
    duration: 0.8,
    opacity: 0,
    ease: 'power3.out',
  })
  .to(hero1, {
    delay: -0.8,
    // x: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power3.inOut',
  })
  .to(hero2, {
    delay: -0.8,
    // x: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power3.inOut',
  })
  .to(hero3, {
    delay: -0.8,
    // x: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power3.inOut',
  });
const tl = gsap.timeline({
  paused: false,
  defaults: {
    duration: 0.5,
    ease: 'power2.out',
    yoyo: true,
    repeat: -1,
  },
});

tl.to(card, { y: -20 });

// Slider component of the page
const slider = function () {
  const slide = document.querySelectorAll('.testimonial-slide');
  const slider = document.querySelector('.testimonial-slider');
  const dots = document.querySelector('.testimonial-dots');
  // console.log(slider);
  // slider.style.transform = 'scale(0.4)';
  // slider.style.overflow = 'visible';

  let currSlide = 0;
  const maxSlide = slide.length;
  console.log(maxSlide);

  console.log(slide);
  // Creating tthe go to slide functionality
  const goToSlide = function (sliden) {
    slide.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - sliden)}%)`)
    );
    console.log(sliden);
  };
  // Creating dots
  const createDots = function () {
    slide.forEach(function (_, i) {
      dots.insertAdjacentHTML(
        'beforeend',
        `<button class="testimonial-dots-dot" data-slide="${i}"></button>`
      );
    });
  };
  const activeDot = function (slide) {
    document.querySelectorAll('.testimonial-dots-dot').forEach((dot) => {
      dot.classList.remove('testimonial-dots-active');
    });
    document
      .querySelector(`.testimonial-dots-dot[data-slide="${slide}"]`)
      .classList.add('testimonial-dots-active');
  };
  // initialising all the slide component
  const init = function () {
    goToSlide(0);
    createDots();
    activeDot(0);
  };
  init();
  // go to nextslide functionality
  const nextslide = function () {
    if (currSlide === maxSlide - 1) {
      currSlide = 0;
    } else {
      currSlide++;
    }
    console.log(currSlide);
    goToSlide(currSlide);
    activeDot(currSlide);
  };
  dots.addEventListener('click', function (e) {
    if (e.target.classList.contains('testimonial-dots-dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeDot(slide);
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextslide();
  });
};
slider();

// counter for release date to september 10 2021
// setting the date of the countdown to
const count = new Date(2021, 8, 10);
const timeTitle = document.querySelector('.footer-timer-title');
const timerTileDate = document.querySelectorAll('.footer-timer-counter');
function setDate(count) {
  // const dd = count.getDate();
  // const MM = count.toLocaleString('en-us', { month: 'short' });
  // const yyyy = count.getFullYear();
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    // weekday: 'long',
  };
  // timeTitle.textContent = `${dd} ${MM} ${yyyy}`;
  timeTitle.textContent = Intl.DateTimeFormat('en-us', options).format(count);
}
setDate(count);

function countDown(count) {
  let eventTime = count.getTime();
  let nowTime = new Date().getTime();
  let distance = eventTime - nowTime;
  // console.log(distance);

  let day = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((distance % (1000 * 60)) / 1000);

  timerTileDate[0].innerText = `${day}`.padStart(2, 0);
  timerTileDate[1].innerText = `${hours}`.padStart(2, 0);
  timerTileDate[2].innerText = `${min}`.padStart(2, 0);
  timerTileDate[3].innerText = `${sec}`.padStart(2, 0);
}
countDown(count);

setInterval(countDown, 1000, count);

// Tabbed component function
const tab = document.querySelector('.operation-tab-container');
const tabbedAll = document.querySelectorAll('.operation-tab');
const content = document.querySelectorAll('.operation-content');
function component(e) {
  const clicked = e.target.closest('.operation-tab');
  // const clicked = e.target.closest('.operation-tab');

  // console.log(Boolean(clicked));
  // console.log(clicked.dataset.tab);

  // this is catching a falsy value, if it is null which is a falsy valur return immediately
  if (!clicked) return;
  // tabbedAll.forEach((t) => t.classList.remove('operation-tab-active'));
  content.forEach((c) => c.classList.remove('operation-active'));

  clicked.classList.add('operations-tab-active');

  // Activating the content area
  document
    .querySelector(`.operation-content-${clicked.dataset.tab}`)
    .classList.add('operation-active');
}

tab.addEventListener('click', component);

// Intersection observer api for the header section
const navHeight = navbar.getBoundingClientRect().height;
console.log(navHeight);
const options = {
  root: null,
  rootMargin: `${navHeight}px`,
  threshold: 0,
};

// Callback function
// const sticky = function (entries) {
//   const [entry] = entries;
//   if (!entry.isInterecting) {
//     navbar.classList.add('sticky');
//     console.log('intersecting');
//   } else {
//     navbar.classList.remove('sticky');
//     console.log('not interscecting');
//   }
//   // !entry.isInterecting
//   //   ? navbar.classList.add('sticky')
//   //   : navbar.classList.remove('sticky');
// };
// const headerObserver = new IntersectionObserver(sticky, options);

// headerObserver.observe(header);

const feature = document.querySelectorAll('section');
const option = {
  root: null,
  threshold: 0.15,
};
const head = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section-hidden');
  observer.unobserve(entry.target);
};
const section = new IntersectionObserver(head, option);

// section.observe(feature);
feature.forEach((item) => {
  section.observe(item);
  item.classList.add('section-hidden');
});
// Controlling modal
// function open modal
const modal = document.querySelectorAll('.show-modal');
const modalClose = document.querySelector('.btn-close-modal');
const overlay = document.querySelector('.overlay');
const modals = document.querySelector('.modal');
function open(e) {
  e.preventDefault();
  modals.classList.remove('hidden');
  overlay.classList.remove('hidden');
  body.classList.add('noscroll');
}
function close(e) {
  modals.classList.add('hidden');
  overlay.classList.add('hidden');
  body.classList.remove('noscroll');
}

modal.forEach((item) => {
  item.addEventListener('click', open);
});
modalClose.addEventListener('click', close);
overlay.addEventListener('click', close);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modals.classList.contains('hidden')) {
    close();
  }
});

// const hold = document.querySelector('#features');
// const holds = document.querySelector('.features');

// let hel;
// hold.addEventListener('click', function () {
//   holds.innerHTML = `<div class="ddd">h is here </div>`;

//   // const self = this;
//   hel = document.querySelector('.ddd');
//   // console.log(hel.innerText);
//   hel.addEventListener('click', function () {
//     // holds.style.display = 'none';
//     // this.style.display = 'none';
//     // holds.innerHTML = '<div class="q">mess</div>';
//     requestAnimationFrame(() => {
//       holds.innerHTML = '<div class="q">mess</div>';
//     });
//     console.log(this);
//   });
// });

// he.addEventListener('click', function () {
//   he.innerHTML = `<div class="dd">he is here </div>`;
// });
