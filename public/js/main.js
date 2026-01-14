import ColorControl from './color-control.js';
import PageControl from './page-control.js';

// Color control
const colorControl = new ColorControl();
colorControl.init();

document.querySelector('.btn-color-scheme').addEventListener('click', (e) => {
  e.preventDefault();
  colorControl.toggleColorSheme();
});

document.querySelector('.btn-contrast-control').addEventListener('click', (e) => {
  e.preventDefault();
  colorControl.toggleContrast();
});

// Page control
const pageControl = new PageControl();
pageControl.init();

// Keys
const keyLeft = ['KeyA', 'KeyW', 'KeyH', 'KeyK', 'ArrowLeft'];
const keyRight = ['KeyD', 'KeyS', 'KeyL', 'KeyJ', 'Space', 'ArrowRight'];

window.addEventListener('keydown', (e) => {
  if (keyRight.indexOf(e.code) !== -1) {
    pageControl.changePage('next');
  } else if (keyLeft.indexOf(e.code) !== -1) {
    pageControl.changePage('prev');
  }
});

// Buttons control
const nextPageButton = document.querySelector('#next-page');
const prevPageButton = document.querySelector('#prev-page');

nextPageButton.addEventListener('click', () => {
  pageControl.changePage('next');
});

prevPageButton.addEventListener('click', () => {
  pageControl.changePage('prev');
});

// Menu buttons
const menuItems = document.querySelectorAll('#menu a');

menuItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    pageControl.changePage(item.getAttribute('href').slice(1));
    pageControl.activateRippleEffect(event, 'span', 'ripple');
  });
});