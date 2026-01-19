export default {
  init() {
    // Add active class on first elements
    document.querySelector('#menu a').classList.add('active');
    document.querySelector('main section').classList.add('active');

    // Get first and last page
    this.firstPage = document.querySelector('main section:first-of-type');
    this.lastPage = document.querySelector('main section:last-of-type');

    // Keys
    this.keyLeft = ['KeyA', 'KeyW', 'KeyH', 'KeyK', 'ArrowLeft'];
    this.keyRight = ['KeyD', 'KeyS', 'KeyL', 'KeyJ', 'Space', 'ArrowRight'];

    // Add events
    window.addEventListener('keydown', (e) => {
      if (this.keyRight.indexOf(e.code) !== -1) {
        this.changePage('next');
      } else if (this.keyLeft.indexOf(e.code) !== -1) {
        this.changePage('prev');
      }
    });

    // Get elements page
    this.nextPageButton = document.querySelector('#next-page');
    this.prevPageButton = document.querySelector('#prev-page');

    this.nextPageButton.addEventListener('click', () => {
      this.changePage('next');
    });

    this.prevPageButton.addEventListener('click', () => {
      this.changePage('prev');
    });

    // Get elements menu
    this.menuItems = document.querySelectorAll('#menu a');

    // Add events
    this.menuItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        this.changePage(item.getAttribute('href').slice(1));
        this.activateRippleEffect(event, 'span', 'ripple');
      });
    });
  },

  changePage(page) {
    let activePage = document.querySelector('section.active');

    switch (page) {
      case 'next':
        if (this.lastPage.classList.contains('active')) {
          activePage = this.firstPage;
        } else {
          activePage = activePage.nextElementSibling;
        }
        break;

      case 'prev':
        if (this.firstPage.classList.contains('active')) {
          activePage = this.lastPage;
        } else {
          activePage = activePage.previousElementSibling;
        }
        break;

      default:
        activePage = document.querySelector(`main #${page}`);
        break;
    }

    // Get active menu and page
    let activePageId = activePage.getAttribute('id');
    let activeMenuItem = document.querySelector(`#menu a[href*="${activePageId}"]`);

    // Remove active class
    document.querySelector('#menu a.active').classList.remove('active');;
    document.querySelector('section.active').classList.remove('active');

    // Add active class
    activeMenuItem.classList.add('active');
    activePage.classList.add('active');
  },

  activateRippleEffect(e, el, className) {
    const btn = e.currentTarget;
    const btnWidth = btn.clientWidth;
    const btnHeight = btn.clientHeight;
    const diameter = Math.max(btnWidth, btnHeight);
    const radius = diameter / 2;

    const ripple = document.createElement('div');
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.top = `${e.clientY - (btn.offsetTop + radius)}px`;
    ripple.style.left = `-${btn.clientWidth / 2}px`;
    ripple.classList.add(className);

    const oldRipple = document.querySelector('.ripple');
    if (oldRipple) oldRipple.remove();
    btn.appendChild(ripple);
  }
};
