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

    if (localStorage.contrast === 'more' ||
      window.matchMedia('(prefers-contrast: more)').matches) {
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
    // Update body class
    const html = document.documentElement;
    const currentTheme = html.dataset.theme || 'light';

    // Get value
    const isDark = colorScheme === '' ? currentTheme === 'light' : colorScheme === 'dark';
    const newTheme = isDark ? 'dark' : 'light';

    // Update theme
    html.dataset.theme = newTheme;

    // Update icons
    const iconName = isDark ? 'icon-sun' : 'icon-moon';
    this.btnColorSchemeIcon.classList.remove('icon-sun', 'icon-moon');
    this.btnColorSchemeIcon.classList.add(iconName);
    this.btnColorSchemeIcon.firstElementChild.setAttribute('href', `#${iconName}`);

    const btnColorSchemeLabel = isDark ? 'Alterar para tema claro' : 'Alterar para tema escuro';
    this.btnColorScheme.setAttribute('aria-label', btnColorSchemeLabel);

    // Salva storage
    localStorage.theme = isDark ? 'dark' : 'light';
  },

  toggleContrast(contrast = '') {
    const html = document.documentElement;
    const hasContrastMore = html.dataset.contrast === 'more';
    const changeContrast = contrast === '' ? !hasContrastMore : contrast === 'more';

    if (changeContrast) {
      html.dataset.contrast = 'more';
      this.btnColorContrast.setAttribute('aria-label', 'Desativar alto contraste');
    } else {
      html.removeAttribute('data-contrast');
      this.btnColorContrast.setAttribute('aria-label', 'Ativar alto contraste');
    }

    localStorage.contrast = changeContrast ? 'more' : 'no-preference';
  }
};
