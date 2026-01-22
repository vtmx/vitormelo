export default {
  init() {
    this.btnIconColorScheme = document.querySelector('.btn-color-scheme .icon');

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.setDark(this.btnIconColorScheme);
    } else {
      this.setLight(this.btnIconColorScheme);
    }

    if (localStorage.contrast === 'true' || window.matchMedia('(prefers-contrast: more)').matches) {
      document.body.classList.add('contrast');
      localStorage.contrast = 'true';
    } else {
      document.body.classList.remove('contrast');
      localStorage.contrast = 'false';
    }

    // Get buttons
    this.btnColorScheme = document.querySelector('.btn-color-scheme');
    this.btnColorContrast = document.querySelector('.btn-contrast-control');

    // Add events
    this.btnColorScheme.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleColorSheme();
    });

    this.btnColorContrast.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleContrast();
    });
  },

  toggleColorSheme() {
    const btnIconColorScheme = document.querySelector('.btn-color-scheme .icon');

    if (localStorage.theme === 'dark') {
      this.setLight(btnIconColorScheme);
    } else {
      this.setDark(btnIconColorScheme);
    }
  },

  toggleContrast() {
    if (localStorage.contrast === 'true') {
      document.body.classList.remove('contrast');
      localStorage.contrast = 'false';
    } else {
      document.body.classList.add('contrast');
      localStorage.contrast = 'true';
    }
  },

  setDark(btnIconColorScheme) {
    document.body.classList.add('dark');
    this.btnIconColorScheme.classList.remove('icon-moon');
    this.btnIconColorScheme.classList.add('icon-sun');
    this.btnIconColorScheme.firstElementChild.setAttribute('href', '#icon-sun');
    localStorage.theme = 'dark';
  },

  setLight(btnIconColorScheme) {
    document.body.classList.remove('dark');
    this.btnIconColorScheme.classList.remove('icon-moon');
    this.btnIconColorScheme.classList.add('icon-moon');
    this.btnIconColorScheme.firstElementChild.setAttribute('href', '#icon-moon');
    localStorage.theme = 'light';
  }
};
