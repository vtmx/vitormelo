<template>
  <section id="certifications">
    <div class="container">
      <h2 class="title">{{ title }}</h2>
      <div class="certifications">
        <template v-for="certification in certifications" :key="certification.id">
          <div class="certification">
            <div class="name">{{ certification.name }}</div>
            <div class="org">{{ certification.org_name }}</div>
            <div class="time">{{ certification.year }}</div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import certifications from '../data/certifications.json';
export default {
  name: 'Certification',

  data() {
    return {
      title: 'Certificações',
      certifications,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
