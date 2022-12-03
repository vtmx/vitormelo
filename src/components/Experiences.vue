<template>
  <section id="experiences">
    <h2 class="title">{{ title }}</h2>
    <div class="experiences">
      <template v-for="experience in experiences" :key="experience.id">
        <div class="experience">
          <div class="name">{{ experience.name }}</div>
          <div class="org">{{ experience.org_name }}</div>
          <div class="time">
            <span>{{ experience.date_start }}</span> &ndash;
            <span>{{ experience.date_end }}</span>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import experiences from '../data/experiences.json';
export default {
  name: 'Experiences',

  data() {
    return {
      title: 'Experiências',
      experiences,
    };
  },
};
</script>