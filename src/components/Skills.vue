<template>
  <section id="skills">
    <div class="container">
      <h2 class="title">{{ title }}</h2>
      <div class="skills">
        <template v-for="skill in skills" :key="skill.id">
          <div class="skill">{{ skill }}</div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import skills from '../data/skills.json';
export default {
  name: 'Skills',

  data() {
    return {
      title: 'Habilidades',
      skills,
    };
  },
};
</script>

<style scoped>
.skill {
  display: inline-block;
  margin: 0 8px 8px 0;
  padding: 4px 12px;
  background: var(--skill-bg);
  color: var(--skill-fg);
}
</style>