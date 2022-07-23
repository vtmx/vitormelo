<template>
  <nav>
    <h1 class="logo">
      <a href="#">Vitor Melo</a>
    </h1>
    <div class="menu">
      <h2 class="invisible">Menu</h2>
      <template v-for="link in nav" :key="link.id">
        <a
          :data="link.slug"
          :href="link.link"
          @click.prevent="toggleActive($event)"
          ><i :class="link.icon" class="invisible"></i>
          <span class="name">{{ link.name }}</span></a
        >
      </template>
    </div>

    <div class="social">
      <template v-for="social in social" :key="social.name">
        <a
          class="btn-icon"
          :href="social.link"
          :title="social.name"
          target="_blank"
          ><i :class="social.icon"></i>
          <span class="invisible">{{ social.name }}</span></a
        >
      </template>
    </div>
  </nav>
</template>

<script>
import nav from "../data/nav.json";
import social from "../data/social.json";

export default {
  name: "Nav",

  data() {
    return {
      nav,
      social,
    };
  },
  mounted() {
    this.firstActive(".menu a");
    if (window.matchMedia("(max-width: 720px)").matches) {
      const icons = document.querySelectorAll(".menu i.invisible");
      icons.forEach((icon) => {
        icon.classList.remove("invisible");
      });
    }
  },
  methods: {
    firstActive(el) {
      const menuList = document.querySelectorAll(el);
      menuList[0].classList.add("active");
    },
    toggleActive(e) {
      this.removeActive(".menu a", "active");
      this.addActive(e, "active");
      this.createRipple(e, "span", "ripple");
    },
    addActive(e, className) {
      e.target.classList.add(className);
    },
    removeActive(el, className) {
      document.querySelectorAll(el).forEach((link) => {
        link.classList.remove(className);
      });
    },
    createRipple(e, el, className) {
      const btn = e.target;
      const ripple = document.createElement(el);

      const btnWidth = btn.clientWidth;
      const btnHeight = btn.clientHeight;
      const diameter = Math.max(btnWidth, btnHeight);
      const radius = diameter / 2;

      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.top = `${e.clientY - (btn.offsetTop + radius)}px`;
      ripple.style.left = `${e.clientX - (btn.offsetLeft + radius)}px`;
      ripple.classList.add(className);

      const oldRipple = document.querySelectorAll(".ripple")[0];
      if (oldRipple) {
        oldRipple.remove();
      }

      btn.insertAdjacentElement("beforeend", ripple);
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  grid-area: menu;
  position: sticky;
  top: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 24vw;
  height: 100vh;
}

.logo a {
  display: flex;
  align-items: center;
  padding: var(--gap3);
  font-weight: bold;
  font-size: 32px;
  line-height: 1;
  color: var(--logo-fg);
}

.menu {
  a {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    padding: var(--gap2) var(--gap3);
    color: var(--menu-fg);

    .name {
      display: flex;
      transition: all 0.2s;
    }

    &:hover {
      background: var(--menu-bg-hover);
      color: var(--menu-fg-hover);
    }

    &:active {
      background: var(--menu-bg-active);
      color: var(--menu-fg-active);
      transition: none;
    }

    &:hover .name,
    &:active .name {
      transform: translate3d(4px, 0, 0);
    }
  }

  .active {
    background: var(--menu-bg-active);
    color: var(--menu-fg-active);
  }

  .active .name {
    transform: translate3d(4px, 0, 0);
  }
}

.social {
  display: flex;
  gap: 8px;
  margin: 16px;
  line-height: 0;
}

@media (max-width: 960px) {
  nav {
    display: flex;
    justify-content: center;
    width: auto;
    height: auto;
  }
  .menu {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    min-width: 100%;

    a {
      flex-grow: 1;
    }

    i {
      font-size: 24px;
    }
  }
  .menu a .name,
  .logo,
  .social {
    display: none;
  }
}
</style>

