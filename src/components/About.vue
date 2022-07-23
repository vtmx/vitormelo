<template>
  <section id="about">
    <h2 class="title">{{ about.title }}</h2>
    <img class="avatar" :src="`${baseUrl}vitormelo.jpg`" :alt="about.alt" />
    <p>{{ about.text }}</p>
  </section>
</template>

<script>
import about from "../data/about.json";
export default {
  name: "About",

  data() {
    return {
      about,
      baseUrl: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  margin-bottom: var(--gap2);
}
</style>
