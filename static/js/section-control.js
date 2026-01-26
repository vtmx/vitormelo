export default {
  init() {
    // Nav links
    this.navLinks = document.querySelectorAll('#menu a[href^="#"]');
    this.navLinkFirst = document.querySelector('#menu a[href^="#"]');
    this.navLinkFirst.setAttribute('aria-current', 'true');

    // Sections
    this.sections = document.querySelectorAll('main section[id]');
    this.sectionFirst = this.sections[0];
    this.sectionLast = this.sections[this.sections.length - 1];
    this.sectionFirst.setAttribute('aria-current', 'true');

    // Event keys
    const keys = {
      next: ['KeyJ', 'Space', 'ArrowRight'],
      prev: ['KeyK', 'ArrowLeft']
    };

    window.addEventListener('keydown', (e) => {
      if (keys.next.includes(e.code)) this.changeSection('next');
      if (keys.prev.includes(e.code)) this.changeSection('prev');
    });

    // Events click
    document.querySelectorAll('#section-control button').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.classList.contains('next') ? 'next' :
                     btn.classList.contains('prev') ? 'prev' : 'top';
        this.changeSection(type);
      });
    });

    // Ripple effects
    this.navLinks.forEach((item) => {
      item.addEventListener('click', (event) => {
        this.changeSection(item.getAttribute('href').slice(1));
        this.activateRippleEffect(event, 'span', 'ripple');
      });
    });

    this.isScrolling = false;
    this.scrollSpy();
  },

  updateUI(id) {
    if (this.isScrolling) return;

    const section = document.getElementById(id);
    if (!section) return;

    document.querySelectorAll('[aria-current="true"]').forEach(el => el.removeAttribute('aria-current'));
    section.setAttribute('aria-current', 'true');

    const navLink = document.querySelector(`#menu a[href="#${id}"]`);
    if (navLink) navLink.setAttribute('aria-current', 'true');

    const title = section.querySelector('.title')?.textContent || '';
    document.title = `Vitor Melo - ${title}`;
    history.replaceState(null, '', `#${id}`);
  },

  changeSection(target) {
    let current = document.querySelector('section[aria-current="true"]') || this.sectionFirst;
    let destination;

    if (target === 'next') {
      destination = (current === this.sectionLast) ? this.sectionFirst : current.nextElementSibling;
    } else if (target === 'prev') {
      destination = (current === this.sectionFirst) ? this.sectionLast : current.previousElementSibling;
    } else if (target === 'top') {
      destination = this.sectionFirst;
    } else {
      destination = document.getElementById(target);
    }

    if (destination) {
      this.isScrolling = false;
      this.updateUI(destination.id);
      this.isScrolling = true;

      destination.scrollIntoView({ behavior: 'smooth' });

      // Libera o ScrollSpy após o término da animação
      setTimeout(() => {
        this.isScrolling = false;
      }, 1000);
    }
  },

  scrollSpy() {
    const observer = new IntersectionObserver(entries => {
      if (this.isScrolling) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) this.updateUI(entry.target.id);
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    this.sections.forEach(s => observer.observe(s));
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
