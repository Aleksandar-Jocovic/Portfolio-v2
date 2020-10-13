//slider
const nextBtn = document.getElementById('next-button');
const prevBtn = document.getElementById('prev-button');


const imagesWrap = document.querySelector('.images-wrap');
let position = -300;
let clicked = false;

activeImg = 2;  
    
const slide = (el, positionChange, index) => {
  clicked = true;
  imagesWrap.style.transform = `translateX(${position + positionChange}px)`;
  position = position + positionChange;

  if (position < -300) {
    console.log('600')
    document.getElementById(`pop-img${activeImg + index}`).style.zIndex = '222';
    document.getElementById(`pop-img${activeImg + index}`).style.transform = 'translateX(900px)';
    position + 300;
    activeImg += 1;
  }
  console.log(activeImg)
  activeImg += index;
  console.log(activeImg)


  setTimeout(() => {
    clicked = false;
  }, 350)
}

nextBtn.addEventListener('click', (e) => {
  if (!clicked) {
    slide(e, 300, 1)
  }
})
prevBtn.addEventListener('click', (e) => {
  if (!clicked) {
    slide(e, -300, -1)
  }
})

/* mozda bolje pomeriti sve slike */