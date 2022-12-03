<template>
  <section id="about" class="active">
    <h2 class="title">{{ about.title }}</h2>
    <img class="avatar" :src="'/' + about.image" :alt="about.alt" />
    <p>{{ about.text }}</p>
  </section>
</template>

<script>
import about from '../data/about.json';
export default {
  name: 'About',

  data() {
    return {
      about,
    };
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  margin-bottom: 16px;
}
</style>
