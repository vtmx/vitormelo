<template>
  <div class="color-control">
    <a href="#" class="btn-icon btn-color-scheme" title="Alterar tema" @click.prevent="toggleColorSheme">
      <i class="fa fa-moon"></i>
    </a>
    <a href="#" class="btn-icon btn-contrast-control" title="Alterar contraste" @click.prevent="toggleHighCoontrast">
      <i class="fa-solid fa-circle-half-stroke"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ColorControl',

  data() {
    return {};
  },
  mounted() {
    let iconBtnColorScheme = document.querySelector('.btn-color-scheme i');

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.body.classList.add('dark');
      iconBtnColorScheme.classList.add('fa-sun');
      iconBtnColorScheme.classList.remove('fa-moon');
      localStorage.theme = 'dark';
    } else {
      document.body.classList.remove('dark');
      iconBtnColorScheme.classList.add('fa-sun');
      iconBtnColorScheme.classList.remove('fa-moon');
      localStorage.theme = 'light';
    }

    if (localStorage.contrast === 'true' || !('theme' in localStorage)) {
      document.body.classList.add('contrast');
      localStorage.contrast = 'true';
    } else {
      document.body.classList.remove('contrast');
      localStorage.contrast = 'false';
    }
  },
  methods: {
    toggleColorSheme() {
      let iconBtnColorScheme = document.querySelector('.btn-color-scheme i');

      if (localStorage.theme === 'dark') {
        document.body.classList.remove('dark');
        iconBtnColorScheme.classList.add('fa-moon');
        iconBtnColorScheme.classList.remove('fa-sun');
        localStorage.theme = 'light';
      } else {
        document.body.classList.add('dark');
        iconBtnColorScheme.classList.add('fa-sun');
        iconBtnColorScheme.classList.remove('fa-moon');
        localStorage.theme = 'dark';
      }
    },
    toggleHighCoontrast() {
      if (localStorage.contrast === 'true') {
        document.body.classList.remove('contrast');
        localStorage.contrast = 'false';
      } else {
        document.body.classList.add('contrast');
        localStorage.contrast = 'true';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.color-control {
  grid-area: color;
  display: flex;
  flex-direction: column;
  gap: 8px;
  line-height: 0;
}
</style>
