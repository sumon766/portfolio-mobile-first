const nav = document.querySelector('.nav');
const bars = document.querySelector('#bars');
const cross = document.querySelector('#cross');
const headerContainer = document.querySelector('.header-container');
const emailIcon = document.querySelector('.fa-envelope');

if (window.screen.width < 769) {
  bars.addEventListener('click', () => {
    nav.style.display = 'block';
    bars.style.display = 'none';
    cross.style.display = 'block';
    headerContainer.style.position = 'fixed';
    emailIcon.style.display = 'none';
  });

  cross.addEventListener('click', () => {
    nav.style.display = 'none';
    bars.style.display = 'block';
    cross.style.display = 'none';
    headerContainer.style.position = 'static';
  });

  nav.addEventListener('click', () => {
    nav.style.display = 'none';
    bars.style.display = 'block';
    cross.style.display = 'none';
    headerContainer.style.position = 'static';
  });
}