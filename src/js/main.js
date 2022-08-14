const headerMain = document.querySelector('header.h-main');
const skillsList = document.querySelector('.carousel .skills__list');
const skills = document.querySelectorAll('.skills__list .skill__item');
const arrowLeft = document.querySelector('.skills__carousel .left span');
const arrowRight = document.querySelector('.skills__carousel .right span');
let indexX = 0;

const goingLeft = () => {
  if(indexX > 0) {
    indexX--;
    skillsList.style.transform = `translateX(${(-indexX * 18)}rem)`;
  }
}

const goingRight = () => {
  if(indexX < skills.length - 1) {
    indexX++;
    skillsList.style.transform = `translateX(${(-indexX * 18)}rem)`;
  }
}

document.addEventListener("scroll", function() {
  let positionY = window.pageYOffset;
  if (positionY > 100) {
    headerMain.classList.add('h-main--highlighted')
  } else {
    headerMain.classList.remove('h-main--highlighted')
  }
});

arrowLeft.addEventListener('click', () => { goingLeft() });
arrowRight.addEventListener('click', () => { goingRight() });

setInterval(() => {
  indexX++;
  if(indexX > skills.length - 1) {
    indexX = 0;
  }
  skillsList.style.transform = `translateX(${-indexX * 18}rem)`;
}, 3000);