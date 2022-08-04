const headerMain = document.querySelector('header.h-main')

document.addEventListener("scroll", function() {
  let positionY = window.pageYOffset;
  if (positionY > 100) {
    headerMain.classList.add('h-main--highlighted')
  } else {
    headerMain.classList.remove('h-main--highlighted')
  }
});