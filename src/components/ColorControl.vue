<template>
  <div class="color-control">
    <a href="#" class="btn-icon" title="Alterar tema" @click.prevent="toggleColorSheme"><i class="fas fa-moon"></i></a>
    <a href="#" class="btn-icon" title="Alterar contraste" @click.prevent="toggleHighCoontrast"><i class="fas fa-adjust"></i></a>
  </div>
</template>

<script>
export default {
  name: 'ColorControl',

  data() {
    return {};
  },
  mounted() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.querySelector('body').classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.querySelector('body').classList.remove('dark');
      localStorage.theme = 'light';
    }

    if (localStorage.contrast === 'true' || !('theme' in localStorage)) {
      document.querySelector('body').classList.add('contrast');
      localStorage.contrast = 'true';
    } else {
      document.querySelector('body').classList.remove('contrast');
      localStorage.contrast = 'false';
    }
  },
  methods: {
    toggleColorSheme() {
      if (localStorage.theme === 'dark') {
        document.querySelector('body').classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        document.querySelector('body').classList.add('dark');
        localStorage.theme = 'dark';
      }
    },
    toggleHighCoontrast(e) {
      if (localStorage.contrast === 'true') {
        document.querySelector('body').classList.remove('contrast');
        localStorage.contrast = 'false';
      } else {
        document.querySelector('body').classList.add('contrast');
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
