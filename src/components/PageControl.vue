<template>
  <div class="page-control">
    <a href="#" id="prev-page" class="btn-icon" title="Página anterior" @click.prevent="prevPage"><i class="fas fa-chevron-left"></i></a>
    <a href="#" id="next-page" class="btn-icon" title="Próxima página" @click.prevent="nextPage"><i class="fas fa-chevron-right"></i></a>
    <a href="#" id="to-top" class="btn-icon" title="Ir para topo" @click.prevent="toTop"><i class="fas fa-chevron-up"></i></a>
  </div>
</template>

<script>
import Pages from '../plugins/pages.js';

export default {
  name: 'PageControl',

  data() {
    return {
      container: '',
      firstPage: '',
      lastPage: '',
    };
  },
  mounted() {
    this.container = document.querySelector('main');
    this.firstPage = this.container.firstElementChild;
    this.lastPage = this.container.lastElementChild;

    this.keyLeft = ['KeyA', 'KeyW', 'KeyH', 'KeyK', 'ArrowLeft', 'ArrowUp'];
    this.keyRight = ['KeyD', 'KeyS', 'KeyL', 'KeyJ', 'Space', 'ArrowRight', 'ArrowDown'];

    window.addEventListener('keydown', (e) => {
      if (this.keyRight.indexOf(e.code) !== -1) {
        this.nextPage();
      } else if (this.keyLeft.indexOf(e.code) !== -1) {
        this.prevPage();
      }
    });
  },
  methods: {
    prevPage() {
      let activePage = document.querySelector('section.active');
      let prevPage = '';
      if (this.firstPage.classList.contains('active')) {
        prevPage = this.lastPage;
      } else {
        prevPage = activePage.previousElementSibling;
      }
      Pages.togglePage(prevPage);
    },
    nextPage() {
      let activePage = document.querySelector('section.active');
      let nextPage = '';
      if (this.lastPage.classList.contains('active')) {
        nextPage = this.firstPage;
      } else {
        nextPage = activePage.nextElementSibling;
      }
      Pages.togglePage(nextPage);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-control {
  grid-area: page;
  display: flex;
  gap: 8px;
  line-height: 0;
}
</style>
