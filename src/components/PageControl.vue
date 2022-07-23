<template>
  <div class="page-control">
    <a href="#" id="prev-page" class="btn-icon" title="Página anterior" @click="prevPage"
      ><i class="fas fa-chevron-left"></i
    ></a>
    <a href="#" id="next-page" class="btn-icon" title="Próxima página" @click="nextPage"
      ><i class="fas fa-chevron-right"></i
    ></a>
    <a href="#" id="to-top" class="btn-icon" title="Ir para topo" @click="toTop"><i class="fas fa-chevron-up"></i></a>
  </div>
</template>

<script>
export default {
  name: 'PageControl',

  data() {
    return {
      container: '',
      pages: '',
      firstPage: '',
      lastPage: '',
    };
  },
  mounted() {
    this.container = document.querySelector('main');
    this.pages = this.container.querySelectorAll('section');
    this.firstPage = this.container.firstElementChild;
    this.lastPage = this.container.lastElementChild;
    this.pages.forEach((page) => {
      page.classList.add('animation');
    });
    this.firstPage.classList.add('active');
  },
  methods: {
    nextPage() {
      let activePage = document.querySelector('section.active');
      let nextPage = '';
      if (this.lastPage.classList.contains('active')) {
        nextPage = this.firstPage;
      } else {
        nextPage = activePage.nextElementSibling;
      }
      this.removeActive();
      nextPage.classList.add('active');
    },
    prevPage() {
      let activePage = document.querySelector('section.active');
      let prevPage = '';
      if (this.firstPage.classList.contains('active')) {
        prevPage = this.lastPage;
      } else {
        prevPage = activePage.previousElementSibling;
      }
      this.removeActive();
      prevPage.classList.add('active');
    },
    removeActive() {
      document.querySelector('section.active').classList.remove('active');
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
