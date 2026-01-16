export default class ColorControl {
  init() {
    const btnIconColorScheme = document.querySelector('.btn-color-scheme .icon');

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.setDark(btnIconColorScheme);
    } else {
      this.setLight(btnIconColorScheme);
    }

    if (localStorage.contrast === 'true' || window.matchMedia('(prefers-contrast: more)').matches) {
      document.body.classList.add('contrast');
      localStorage.contrast = 'true';
    } else {
      document.body.classList.remove('contrast');
      localStorage.contrast = 'false';
    }
  }

  setDark(btnIconColorScheme) {
    document.body.classList.add('dark');
    btnIconColorScheme.classList.remove('icon-moon');
    btnIconColorScheme.classList.add('icon-sun');
    btnIconColorScheme.firstElementChild.setAttribute('href', '#icon-sun');
    localStorage.theme = 'dark';
  }

  setLight(btnIconColorScheme) {
    document.body.classList.remove('dark');
    btnIconColorScheme.classList.remove('icon-moon');
    btnIconColorScheme.classList.add('icon-moon');
    btnIconColorScheme.firstElementChild.setAttribute('href', '#icon-moon');
    localStorage.theme = 'light';
  }

  toggleColorSheme() {
    const btnIconColorScheme = document.querySelector('.btn-color-scheme .icon');

    if (localStorage.theme === 'dark') {
      this.setLight(btnIconColorScheme);
    } else {
      this.setDark(btnIconColorScheme);
    }
  }

  toggleContrast() {
    if (localStorage.contrast === 'true') {
      document.body.classList.remove('contrast');
      localStorage.contrast = 'false';
    } else {
      document.body.classList.add('contrast');
      localStorage.contrast = 'true';
    }
  }
}
