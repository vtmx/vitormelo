export default {
  init() {
    // Add active class on first elements
    this.menuItemFirst = document.querySelector('#menu a');
    this.menuItemFirst.classList.add('active');

    // Get first and last section
    this.sectionFirst = document.querySelector('main section:first-of-type');
    this.sectionFirst.classList.add('active');
    this.sectionLast = document.querySelector('main section:last-of-type');

    // Keys
    this.keyLeft = ['KeyA', 'KeyW', 'KeyH', 'KeyK', 'ArrowLeft'];
    this.keyRight = ['KeyD', 'KeyS', 'KeyL', 'KeyJ', 'Space', 'ArrowRight'];

    // Add events
    window.addEventListener('keydown', (e) => {
      if (this.keyRight.indexOf(e.code) !== -1) {
        this.changeSection('next');
      } else if (this.keyLeft.indexOf(e.code) !== -1) {
        this.changeSection('prev');
      }
    });

    // Get elements section
    this.buttonSectionNext = document.querySelector('#section-control .next');
    this.buttonSectionPrev = document.querySelector('#section-control .prev');
    this.buttonSectionTop = document.querySelector('#section-control .top');

    this.buttonSectionNext.addEventListener('click', () => {
      this.changeSection('next');
    });

    this.buttonSectionPrev.addEventListener('click', () => {
      this.changeSection('prev');
    });

    this.buttonSectionTop.addEventListener('click', () => {
      this.changeSection('top');
    });

    // Get elements menu
    this.menuItems = document.querySelectorAll('#menu a');

    // Add events
    this.menuItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        this.changeSection(item.getAttribute('href').slice(1));
        this.activateRippleEffect(event, 'span', 'ripple');
      });
    });
  },

  changeSection(section) {
    let sectionActive = document.querySelector('section.active');

    switch(section) {
      case 'next':
        if (this.sectionLast.classList.contains('active')) {
          sectionActive = this.sectionFirst;
        } else {
          sectionActive = sectionActive.nextElementSibling;
        }
        break;

      case 'prev':
        if (this.sectionFirst.classList.contains('active')) {
          sectionActive = this.sectionLast;
        } else {
          sectionActive = sectionActive.previousElementSibling;
        }
        break;

      case 'top':
        sectionActive = this.sectionFirst;
        break;

      default:
        sectionActive = document.querySelector(`main #${section}`);
        break;
    }

    // Get active menu and section
    const sectionActiveId = sectionActive.getAttribute('id');
    const menuItemActive = document.querySelector(`#menu a[href*="${sectionActiveId}"]`);

    // Remove active class
    const menuItemActiveOld = document.querySelector('#menu a.active');
    menuItemActiveOld.classList.remove('active');
    menuItemActiveOld.removeAttribute('aria-current');

    const sectionActiveOld = document.querySelector('section.active');
    sectionActiveOld.classList.remove('active');
    sectionActiveOld.removeAttribute('aria-current');

    // Add active class
    menuItemActive.classList.add('active');
    menuItemActive.setAttribute('aria-current', 'true');
    sectionActive.classList.add('active');
    sectionActive.setAttribute('aria-current', 'true');

    // Go to section
    sectionActive.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Change window location
    history.replaceState(null, '', `#${sectionActiveId}`);
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
