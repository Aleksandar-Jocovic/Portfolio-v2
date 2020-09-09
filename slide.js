let activeIndex = 3;
let indicator = 1;

let beforeIndex;
let afterIndex;

let clicked = false;
const carouselSlide = (activeChange) => {
  clicked = true;
  activeIndex += (activeChange);
  indicator += (activeChange);

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
  setTimeout(() => clicked = false, 300)
}

document.querySelector('.next-button').addEventListener('click', () => {
  if (!clicked) carouselSlide(1)
})

document.querySelector('.prev-button').addEventListener('click', () => {
  if (!clicked) carouselSlide(-1)
})

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
}

// Work information popup

const data = [
  {
    title: 'Norms-App',
    img: ["./img/info-img/nor1.png", "./img/info-img/nor2.png", "./img/info-img/nor4.png"],
    description: "Asklaslk laskdlaskd laskdlaskdlas alskdlaskd lskdalkdl alsdk aaaalskl aslk la skdl askd laskd las dlasl skdalkdl alsdk aaaalsklaslk la skdl askd laskd laskdlas alskdalkdl alsdk aaaalsklaslk laskdlaskd laskdlaskdlas alskdlaskd alskdalkdl alsdk",
    tech: ["React.js(context)", "Bootstrap4", "ApexChart.js"],
    git: 'https://github.com/Aleksandar-Jocovic/Norms-React-App',
    demo: 'https://xenodochial-edison-e3f9a0.netlify.app/'
  },
  {
    title: 'Project Base',
    img: ["./img/info-img/bas1.png", "./img/info-img/bas2.png", "./img/info-img/bas3.png"],
    description: "aaaalsklaslk laskdlaskd laskdlaskdlas alskdlaskd alskdalkdl alsdk",
    tech: ["HTML5&CSS3", "JS", "SASS"],
    git: 'https://github.com/Aleksandar-Jocovic/Project-Base',
    demo: 'https://dazzling-montalcini-3e2474.netlify.app'
  },
  {
    title: 'County Info',
    img: ["./img/info-img/cou1.png", "./img/info-img/cou2.png", "./img/info-img/cou3.png"],
    description: "aaaalsklaslk laskdlaskd laskdlaskdlas alskdlaskd alskdalkdl alsdk",
    tech: ["HTML5&CSS3", "JS", "React.js", "Bootstrap4", "restcountries api"],
    git: 'https://github.com/Aleksandar-Jocovic/Country-Info',
    demo: 'https://aleksandar-jocovic.github.io/Country-Info/'
  },
  {
    title: 'Tech Shop',
    img: ["./img/info-img/tec1.png", "./img/info-img/tec2.png", "./img/info-img/tec3.png"],
    description: "aaaalsklaslk laskdlaskd laskdlaskdlas alskdlaskd alskdalkdl alsdk",
    tech: ["HTML5&CSS3", "JS"],
    git: 'https://github.com/Aleksandar-Jocovic/TECH-SHOP-template',
    demo: 'https://frosty-kilby-034165.netlify.app/index.html'
  },
  {
    title: 'Random Color',
    img: ["./img/info-img/col1.png", "./img/info-img/col2.png", "./img/info-img/col3.png"],
    description: "aaaalsklaslk laskdlaskd laskdlaskdlas alskdlaskd alskdalkdl alsdk",
    tech: ["HTML5&CSS3", "JS", "React.js", "Redux"],
    git: 'https://github.com/Aleksandar-Jocovic/Random-Color-UNDO-REDO-react-redux',
    demo: 'https://aleksandar-jocovic.github.io/Random-Color-UNDO-REDO-react-redux/'
  },
  {
    title: 'Continent Quiz',
    img: ["./img/info-img/qui1.png", "./img/info-img/qui2.png", "./img/info-img/qui3.png"],
    description: "aaaalsklaslk laskdlaskd laskdlaskdlas alskdlaskd alskdalkdl alsdk",
    tech: ["HTML5&CSS3", "JS", "SASS"],
    git: 'https://github.com/Aleksandar-Jocovic/continent-quiz-app',
    demo: 'https://keen-meitner-d8cb1c.netlify.app'
  }
]

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


  let technologiesToAddToHTML = ''

  data[index].tech.forEach(el => {
    technologiesToAddToHTML += `<p>${el}</p>`;
  });

  modulTech.innerHTML = technologiesToAddToHTML;

  modulDescription.innerText = data[index].description;
  git.href = data[index].git
  demo.href = data[index].demo



  modulImgOne.src = data[index].img[0];
  modulImgTwo.src = data[index].img[1];
  modulImgThree.src = data[index].img[2];

}

infoButtons.forEach((el) => {
  el.addEventListener('click', displayWorkInfo);
})

const closeWork = document.querySelector('.modul-close-button');
closeWork.addEventListener('click', () => {
  projectModul.classList.remove('active-modul');
  resetCarousel()
})

window.onclick = (event) => {
  console.log(event)
  if (
    event.target.tagName === "SECTION" &&
    projectModul.classList.contains('active-modul')
  ) {
    projectModul.classList.remove('active-modul');
    resetCarousel()
  }
};

/* menu toggle */


// toggle menu

const menuBtn = document.querySelector('.menu-button')
const menu = document.getElementById('navigation')

const toggleMenu = () => {

  menu.classList.add('menu-animatable');

  if (!menu.classList.contains('active-menu')) {
    menu.classList.add('active-menu');
    menuBtn.classList.add('active-menu-button');
  } else {
    menu.classList.remove('active-menu');
    menuBtn.classList.remove('active-menu-button');
  }
}

const onTransitionEnd = () => {
  menu.classList.remove('menu-animatable');
}

menu.addEventListener('transitionend', onTransitionEnd, false);

menuBtn.addEventListener('click', toggleMenu, false)

// Close menu on outside click

window.addEventListener('click', (e) => {
  if (menu.classList.contains('active-menu')
    && event.target.tagName === "SECTION"
  ) {
    console.log('ins', e)
    menu.classList.add('menu-animatable');
    menu.classList.remove('active-menu');
    menuBtn.classList.remove('active-menu-button');
  }
})

