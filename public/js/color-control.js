export default {
  init() {
    this.btnColorScheme = document.querySelector('.btn-color-scheme');
    this.btnColorSchemeIcon = this.btnColorScheme.querySelector('.icon');
    this.btnColorContrast = document.querySelector('.btn-contrast-control');

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.toggleColorSheme('dark');
    } else {
      this.toggleColorSheme('light');
    }

    if (localStorage.contrast === 'true' || window.matchMedia('(prefers-contrast: more)').matches) {
      this.toggleContrast('more');
    }

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

  toggleColorSheme(colorScheme = '') {
    const isDark = colorScheme === '' ? document.body.classList.contains('light') : colorScheme === 'dark';
    document.body.classList.toggle('dark', isDark);
    document.body.classList.toggle('light', !isDark);
    const iconName = isDark ? 'icon-sun' : 'icon-moon';

    this.btnColorSchemeIcon.classList.remove('icon-sun', 'icon-moon');
    this.btnColorSchemeIcon.classList.add(iconName);
    this.btnColorSchemeIcon.firstElementChild.setAttribute('href', `#${iconName}`);

    localStorage.theme = isDark ? 'dark' : 'light';
  },

  toggleContrast(contrast = '') {
    const force = contrast === '' ? undefined : contrast === 'more';
    const hasContrast = document.body.classList.toggle('contrast', force);
    localStorage.contrast = hasContrast ? 'true' : 'false';
  }
};
