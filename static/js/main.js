import ColorControl from './color-control.js';
import PageControl from './page-control.js';

// Color control
const colorControl = new ColorControl();
colorControl.init();

// Get buttons
const btnColorScheme = document.querySelector('.btn-color-scheme');
const btnColorContrast = document.querySelector('.btn-contrast-control');

// Add events
btnColorScheme.addEventListener('click', (e) => {
  e.preventDefault();
  colorControl.toggleColorSheme();
});

btnColorContrast.addEventListener('click', (e) => {
  e.preventDefault();
  colorControl.toggleContrast();
});

// Page control
const pageControl = new PageControl();
pageControl.init();

// Get elements page
const nextPageButton = document.querySelector('#next-page');
const prevPageButton = document.querySelector('#prev-page');

// Keys
const keyLeft = ['KeyA', 'KeyW', 'KeyH', 'KeyK', 'ArrowLeft'];
const keyRight = ['KeyD', 'KeyS', 'KeyL', 'KeyJ', 'Space', 'ArrowRight'];

// Add events
window.addEventListener('keydown', (e) => {
  if (keyRight.indexOf(e.code) !== -1) {
    pageControl.changePage('next');
  } else if (keyLeft.indexOf(e.code) !== -1) {
    pageControl.changePage('prev');
  }
});

nextPageButton.addEventListener('click', () => {
  pageControl.changePage('next');
});

prevPageButton.addEventListener('click', () => {
  pageControl.changePage('prev');
});

// Get elements menu
const menuItems = document.querySelectorAll('#menu a');

// Add events
menuItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    pageControl.changePage(item.getAttribute('href').slice(1));
    pageControl.activateRippleEffect(event, 'span', 'ripple');
  });
});
