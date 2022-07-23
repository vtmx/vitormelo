<template>
  <section id="education">
    <div class="container">
      <h2 class="title">{{ title }}</h2>
      <div class="educations">
        <template v-for="education in education" :key="education.id">
          <div class="education">
            <div class="name">{{ education.name }}</div>
            <div class="org">
              {{ education.org_name }}
            </div>
            <div class="time">
              <span>{{ education.year_start }}</span> &ndash; <span>{{ education.year_end }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import education from '../data/education.json';
export default {
  name: 'Education',

  data() {
    return {
      title: 'Formação',
      education,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
