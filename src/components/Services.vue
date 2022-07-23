<template>
  <section id="services">
    <h2 class="title">{{ title }}</h2>
    <div class="services">
      <template v-for="service in services" :key="service.id">
        <div class="service">
          <div class="icon">
            <i :class="service.icon"></i>
          </div>
          <h3 class="name">{{ service.name }}</h3>
          <p class="description">{{ service.description }}</p>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import services from '../data/services.json';
export default {
  name: 'Services',

  data() {
    return {
      title: 'Serviços',
      services,
    };
  },
};
</script>

<style scoped>
.services {
  display: flex;
  gap: 32px;
}

.icon {
  display: flex;
  align-items: center;
  margin-bottom: var(--gap1);
  font-size: 96px;
}
</style>