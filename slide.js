let activeIndex = 3;
let indicator = 1;

let beforeIndex;
let afterIndex;

let clicked = false;
const carouselSlide = (activeChange) => {
  clicked = true;
  activeIndex += activeChange;
  indicator += activeChange;

  if (indicator === 4) indicator = 1;
  if (indicator === 0) indicator = 3;

  if (activeIndex === 4) activeIndex = 1;
  if (activeIndex === 0) activeIndex = 3;

  if (activeIndex === 1) {
    beforeIndex = 3;
    afterIndex = 2;
  } else if (activeIndex === 2) {
    beforeIndex = 1;
    afterIndex = 3;
  } else if (activeIndex === 3) {
    beforeIndex = 2;
    afterIndex = 1;
  }

  const before = document.querySelector(`.box${beforeIndex}`);
  const active = document.querySelector(`.box${activeIndex}`);
  const after = document.querySelector(`.box${afterIndex}`);

  active.classList.remove('active');
  active.classList.remove('before');
  active.classList.add('after');

  before.classList.remove('before');
  before.classList.remove('after');
  before.classList.add('active');

  after.classList.remove('after');
  after.classList.remove('active');
  after.classList.add('before');

  document.querySelector('.carousel-num').innerHTML = indicator;
  setTimeout(() => (clicked = false), 300);
};

document.querySelector('.next-button').addEventListener('click', () => {
  if (!clicked) carouselSlide(1);
});

document.querySelector('.prev-button').addEventListener('click', () => {
  if (!clicked) carouselSlide(-1);
});

//reset carouseel

const resetCarousel = () => {
  // reset the carousel
  activeIndex = 3;
  indicator = 1;
  document.querySelector('.carousel-num').innerHTML = indicator;

  const before = document.querySelector(`.box1`);
  const active = document.querySelector(`.box2`);
  const after = document.querySelector(`.box3`);

  active.classList.remove('after');
  active.classList.remove('before');
  active.classList.add('active');

  before.classList.remove('active');
  before.classList.remove('after');
  before.classList.add('before');

  after.classList.remove('before');
  after.classList.remove('active');
  after.classList.add('after');
};

// Work information popup

const data = [
  {
    title: 'Norms-App',
    img: ['./img/info-img/nor1.png', './img/info-img/nor2.png', './img/info-img/nor4.png'],
    alt: ['Norms app first image log in / sing in page', 'Norms app second image form to add norms', 'Norms app last image main page layout', ''],
    description: "It's a habit tracker application. Building this app I worked with Context, authentication, protected routes, and data visualization.",
    tech: ['React.js(context)', 'Bootstrap4', 'ApexChart.js', 'CountUp.js'],
    git: 'https://github.com/Aleksandar-Jocovic/Norms-React-App',
    demo: 'https://xenodochial-edison-e3f9a0.netlify.app/',
  },
  {
    title: 'CV Free',
    img: ['./img/info-img/cvf1.png', './img/info-img/cvf2.png', './img/info-img/cvf3.png'],
    alt: ['CV free first image work section', 'CV free second image skills section', 'CV free last image profile summary'],
    description: 'Online Circum Vitae (CV) building application. On this project I learned about jspdf library, uploading and downloading files.',
    tech: ['React.js', 'jspdf'],
    git: 'https://github.com/Aleksandar-Jocovic/CV-Free',
    demo: 'https://aleksandar-jocovic.github.io/CV-Free/',
  },
  {
    title: 'Project Base',
    img: ['./img/info-img/bas1.png', './img/info-img/bas2.png', './img/info-img/bas3.png'],
    description: 'This project is a simple web presentation with interesting design and overlapping animation in the third section.',
    tech: ['HTML5&CSS3', 'JS', 'SASS'],
    git: 'https://github.com/Aleksandar-Jocovic/Project-Base',
    demo: 'https://dazzling-montalcini-3e2474.netlify.app',
  },
  {
    title: 'County Info',
    img: ['./img/info-img/cou1.png', './img/info-img/cou2.png', './img/info-img/cou3.png'],
    description: 'Simple web app where I worked with restcountries api.',
    tech: ['HTML5&CSS3', 'JS', 'React.js', 'Bootstrap4', 'restcountries api'],
    git: 'https://github.com/Aleksandar-Jocovic/Country-Info',
    demo: 'https://aleksandar-jocovic.github.io/Country-Info/',
  },
  {
    title: 'Tech Shop',
    img: ['./img/info-img/tec1.png', './img/info-img/tec2.png', './img/info-img/tec3.png'],
    description: 'This is one of my first projects. Static website where i practiced implementing stuff that I learnded from tutorials.',
    tech: ['HTML5&CSS3', 'JS'],
    git: 'https://github.com/Aleksandar-Jocovic/TECH-SHOP-template',
    demo: 'https://frosty-kilby-034165.netlify.app/index.html',
  },
  {
    title: 'Random Color',
    img: ['./img/info-img/col1.png', './img/info-img/col2.png', './img/info-img/col3.png'],
    description: 'Simple random color generator with redux undo/redo implementation.',
    tech: ['HTML5&CSS3', 'React.js', 'Redux'],
    git: 'https://github.com/Aleksandar-Jocovic/Random-Color-UNDO-REDO-react-redux',
    demo: 'https://aleksandar-jocovic.github.io/Random-Color-UNDO-REDO-react-redux/',
  },
];

const infoButtons = document.querySelectorAll('.info-button');
const projectModul = document.querySelector('.project-modul');

const displayWorkInfo = (e) => {
  const modulTitle = document.getElementById('modul-title');
  const fakeModulTitle = document.getElementById('fake-modul-title');
  const modulTech = document.getElementById('modul-tech');

  const modulDescription = document.getElementById('modul-description');
  const git = document.getElementById('git-link');
  const demo = document.getElementById('demo-link');

  const modulImgOne = document.querySelector('.modul-img1');
  const modulImgTwo = document.querySelector('.modul-img2');
  const modulImgThree = document.querySelector('.modul-img3');

  let index = e.target.name;

  projectModul.classList.add('active-modul');

  modulTitle.innerText = data[index].title;
  fakeModulTitle.innerText = data[index].title;

  let technologiesToAddToHTML = '';

  data[index].tech.forEach((el) => {
    technologiesToAddToHTML += `<p>${el}</p>`;
  });

  modulTech.innerHTML = technologiesToAddToHTML;

  modulDescription.innerHTML = data[index].description;
  git.href = data[index].git;
  demo.href = data[index].demo;

  modulImgOne.src = data[index].img[0];
  modulImgTwo.src = data[index].img[1];
  modulImgThree.src = data[index].img[2];
};

infoButtons.forEach((el) => {
  el.addEventListener('click', displayWorkInfo);
});

const closeWork = document.querySelector('.modul-close-button');
closeWork.addEventListener('click', () => {
  projectModul.classList.remove('active-modul');
  resetCarousel();
});

// toggle menu

const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

const toggleMenu = () => {
  menu.classList.add('menu-animatable');

  if (!menu.classList.contains('active-menu')) {
    menu.classList.add('active-menu');
    menuBtn.classList.add('active-menu-button');
  } else {
    menu.classList.remove('active-menu');
    menuBtn.classList.remove('active-menu-button');
  }
};

const onTransitionEnd = () => {
  menu.classList.remove('menu-animatable');
};

menu.addEventListener('transitionend', onTransitionEnd, false);

menuBtn.addEventListener('click', toggleMenu, false);

// show menu on scroll up

const largeScreen = (width) => {
  window.onscroll = function () {
    if (width.matches) {
      if (this.oldScroll > this.scrollY) {
        menu.classList.add('menu-on-scroll-up');
      } else menu.classList.remove('menu-on-scroll-up');
      this.oldScroll = this.scrollY;
    }
    console.log('matches');
  };
};

let width = window.matchMedia('(min-width: 800px');
largeScreen(width);
window.addEventListener('resize', () => {
  width = window.matchMedia('(min-width: 800px');
});

// Close menu on outside click

window.addEventListener('click', (e) => {
  if (menu.classList.contains('active-menu') && e.target.className !== 'menu active-menu' && e.target.className !== 'menu-button active-menu-button' && e.target.className !== 'line') {
    console.log('ins', e);
    menu.classList.add('menu-animatable');
    menu.classList.remove('active-menu');
    menuBtn.classList.remove('active-menu-button');
  }
  // close work modal
  if (e.target.tagName === 'SECTION' && projectModul.classList.contains('active-modul')) {
    projectModul.classList.remove('active-modul');
    resetCarousel();
  }
});

// pop up gmail and skype id

document.querySelectorAll('.pop-up-btn').forEach((el) => {
  el.addEventListener('click', (e) => btnFun(e));
});

function btnFun(e) {
  if (e.target.classList.contains('pop-up-btn')) {
    if (!popOne.classList.contains('pop-up-false') || !popTwo.classList.contains('pop-up-false')) {
      popOne.classList.add('pop-up-false');
      popTwo.classList.add('pop-up-false');
    }
    let pop = document.getElementById(`pop${e.target.value}`);
    if (pop.classList.contains('pop-up-false')) {
      pop.classList.remove('pop-up-false');
    } else pop.classList.add('pop-up-false');
  }
}
const popOne = document.getElementById('pop0');
const popTwo = document.getElementById('pop1');

const emailBtn = document.getElementById('email-popup-button');
const emailContactBtn = document.getElementById('email-contact-btn');

emailBtn.addEventListener('click', () => {
  window.open('mailto:jocovic099@gmail.com');
});

window.onclick = (event) => {
  if (event.target.tagName !== 'BUTTON' && event.target.id !== 'pop0' && event.target.id !== 'pop1' && event.target.className !== 'pop-text') {
    if (!popOne.classList.contains('pop-up-false') || !popTwo.classList.contains('pop-up-false')) {
      popOne.classList.add('pop-up-false');
      popTwo.classList.add('pop-up-false');
    }
  }
};

// Copy skype and gmail to clipboard
const copyText = (e) => {
  const text = document.querySelector(`.pop-text${e.target.name}`).innerText;

  const el = document.createElement('textarea');
  el.value = text;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

document.querySelectorAll('.copy-btn').forEach((el) => {
  el.addEventListener('click', (e) => copyText(e));
});

// chak if el is in wiewport

var scroll =
  /* window.requestAnimationFrame || */
  function (callback) {
    window.setTimeout(callback, 200);
  };

var sections = document.querySelectorAll('.sec');

const topPageNavigationNum = document.getElementById('page-num1');
const bottomPageNavigationNum = document.getElementById('page-num2');

const topPageNavigationLink = document.getElementById('page-link1');
const bottomPageNavigationLink = document.getElementById('page-link2');

let numTop;
let numBottom;

// enter animations elements
const enterUp = document.querySelectorAll('.enter-up');
const enterDown = document.querySelectorAll('.enter-down');

function loop() {
  // page navigation and links disabling
  sections.forEach(function (element) {
    if (isSectionInViewport(element)) {
      let currentSection = +element.id;
      numTop = `0${currentSection - 1}`;
      numBottom = `0${currentSection + 1}`;

      if (+element.id === 1) {
        topPageNavigationLink.classList.add('disable-link');
        numTop = '';
      } else topPageNavigationLink.classList.remove('disable-link');
      if (+element.id === 4) {
        numBottom = '';
        bottomPageNavigationLink.classList.add('disable-link');
      } else bottomPageNavigationLink.classList.remove('disable-link');

      topPageNavigationNum.innerHTML = numTop;
      bottomPageNavigationNum.innerHTML = numBottom;
      topPageNavigationLink.href = `#${+element.id - 1}`;
      bottomPageNavigationLink.href = `#${+element.id + 1}`;
    }
  });

  enterUp.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('fade-enter');
    }
  });
  enterDown.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('fade-enter');
    }
  });

  scroll(loop);
}

loop();

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (rect.top <= 0 && rect.bottom >= 0 - rect.height / 2)
    || (rect.bootom - rect.height / 2 >= (window.innerHeight || document.documentElement.clientHeight)
      && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    ) || (rect.top >= 0 && rect.bottom - rect.height / 2 <= (window.innerHeight
      || document.documentElement.clientHeight));
}

function isSectionInViewport(el) {
  var rect = el.getBoundingClientRect();
  return rect.top < document.documentElement.clientHeight / 2 && rect.bottom > document.documentElement.clientHeight / 2;
}

// scroll to next prev page animation

const pageNavLinks = document.querySelectorAll('.page-nav-link');
const pageNavLine = document.getElementById('page-nav-line');

pageNavLinks.forEach((item) => {
  item.addEventListener('click', () => {
    pageNavLine.classList.add('page-navigation-line-animation');
    removePageNavAnimation();
  });
});

const removePageNavAnimation = () => {
  setTimeout(() => {
    pageNavLine.classList.remove('page-navigation-line-animation');
  }, 300);
};

// ligt/dark theme

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// menu navigationnnnananananan
