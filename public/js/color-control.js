class ColorControl {
  init() {
    const btnIconColorScheme = document.querySelector('.btn-color-scheme .icon');

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.body.classList.add('dark');
      btnIconColorScheme.classList.remove('icon-moon');
      btnIconColorScheme.classList.add('icon-sun');
      btnIconColorScheme.firstElementChild.setAttribute('href', '#icon-sun');
      localStorage.theme = 'dark';
    } else {
      document.body.classList.remove('dark');
      btnIconColorScheme.classList.remove('icon-sun');
      btnIconColorScheme.classList.add('icon-moon');
      btnIconColorScheme.firstElementChild.setAttribute('href', '#icon-moon');
      localStorage.theme = 'light';
    }

    if (localStorage.contrast === 'true') {
      document.body.classList.add('contrast');
      localStorage.contrast = 'true';
    } else {
      document.body.classList.remove('contrast');
      localStorage.contrast = 'false';
    }
  }

  toggleColorSheme() {
    const btnIconColorScheme = document.querySelector('.btn-color-scheme .icon');

    if (localStorage.theme === 'dark') {
      document.body.classList.remove('dark');
      btnIconColorScheme.classList.remove('icon-moon');
      btnIconColorScheme.classList.add('icon-moon');
      btnIconColorScheme.firstElementChild.setAttribute('href', '#icon-moon');
      localStorage.theme = 'light';
    } else {
      document.body.classList.add('dark');
      btnIconColorScheme.classList.remove('icon-moon');
      btnIconColorScheme.classList.add('icon-sun');
      btnIconColorScheme.firstElementChild.setAttribute('href', '#icon-sun');
      localStorage.theme = 'dark';
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

const colorControl = new ColorControl();
colorControl.init();

document.querySelector('.btn-color-scheme').addEventListener('click', () => {
  colorControl.toggleColorSheme();
});

document.querySelector('.btn-contrast-control').addEventListener('click', () => {
  colorControl.toggleContrast();
});
