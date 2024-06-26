export default class PageControl {
  init() {
    document.querySelector('#menu a').classList.add('active');
    document.querySelector('main section').classList.add('active');
    this.firstPage = document.querySelector('main section:first-of-type');
    this.lastPage = document.querySelector('main section:last-of-type');
  }

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
  }

  activateRippleEffect(e, el, className) {
    const btn = e.currentTarget;
    const btnWidth = btn.clientWidth;
    const btnHeight = btn.clientHeight;
    const diameter = Math.max(btnWidth, btnHeight);
    const radius = diameter / 2;

    const ripple = document.createElement('div');
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.top = `${e.clientY - (btn.offsetTop + radius)}px`;
    // Atributo stick provoca positionamento errado quando centralizado
    // ripple.style.left = `${e.clientX - (btn.offsetLeft + radius)}px`;
    ripple.style.left = `-${btn.clientWidth / 2}px`;
    ripple.classList.add(className);

    const oldRipple = document.querySelector('.ripple');
    if (oldRipple) oldRipple.remove();
    btn.appendChild(ripple);
  }
}
