<template>
  <section id="skills">
    <h2 class="title">{{ title }}</h2>
    <div class="skills">
      <h3 class="name">Sistemas Operacionais</h3>
      <ul>
        <li class="skill" v-for="so in skills.sos" :key="so.name">
          {{ so.name }}
        </li>
      </ul>

      <h3 class="name">Softwares</h3>
      <ul>
        <li class="skill" v-for="software in skills.softwares" :key="software.name">
          {{ software.name }}
        </li>
      </ul>

      <h3 class="name">Linguagens</h3>
      <ul>
        <li class="skill" v-for="language in skills.languages" :key="language.name">
          {{ language.name }}
        </li>
      </ul>

      <h3 class="name">Sistemas</h3>
      <ul>
        <li class="skill" v-for="system in skills.systems" :key="system.name">
          {{ system.name }}
        </li>
      </ul>

      <h3 class="name">Acessibilidade</h3>
      <ul>
        <li class="skill" v-for="accessible in skills.accessibles" :key="accessible.name">
          {{ accessible.name }}
        </li>
      </ul>
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

<style lang="scss" scoped>
.skills {
  .name {
    margin-bottom: 8px;
  }

  ul {
    margin-bottom: 24px;

    &:last-child {
      margin: 0;
    }
  }

  .skill {
    display: inline-block;
    margin: 0 8px 8px 0;
    padding: 4px 12px;
    background: var(--neutral5);
    color: var(--neutral50);
  }
}

.dark {
  .skill {
    background: var(--neutral80);
    color: var(--neutral10);
  }
}

.contrast {
  .skill {
    background: transparent;
    color: black;
  }
}

.dark.contrast {
  .skill {
    background: transparent;
    color: white;
  }
}

@media (max-width: 960px) {
  .skill {
    padding: 8px 18px;
  }
}
</style>
