<template>
  <nav>
    <h1 class="logo">
      <a href="#">Vitor Melo</a>
    </h1>
    <div class="menu">
      <h2 class="invisible">Menu</h2>
      <template v-for="link in nav" :key="link.id">
        <a :data-page="link.slug" :href="link.link" @click.prevent="toggleActive($event)"
          ><i :class="link.icon"></i> <span class="name">{{ link.name }}</span></a
        >
      </template>
    </div>

    <div class="social">
      <template v-for="social in social" :key="social.name">
        <a class="btn-icon" :href="social.link" :title="social.name" target="_blank"
          ><i :class="social.icon"></i> <span class="invisible">{{ social.name }}</span></a
        >
      </template>
    </div>
  </nav>
</template>

<script>
import nav from '../data/nav.json';
import social from '../data/social.json';
import Pages from '../plugins/pages.js';

export default {
  name: 'Nav',

  data() {
    return {
      nav,
      social,
    };
  },
  mounted() {
    this.firstActive('.menu a');
  },
  methods: {
    firstActive(el) {
      const menuList = document.querySelectorAll(el);
      menuList[0].classList.add('active');
    },
    toggleActive(e) {
      Pages.toggleMenu(e.currentTarget);
      this.createRipple(e, 'span', 'ripple');
    },
    createRipple(e, el, className) {
      const btn = e.currentTarget;
      const ripple = document.createElement(el);

      const btnWidth = btn.clientWidth;
      const btnHeight = btn.clientHeight;
      const diameter = Math.max(btnWidth, btnHeight);
      const radius = diameter / 2;

      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.top = `${e.clientY - (btn.offsetTop + radius)}px`;
      ripple.style.left = `${e.clientX - (btn.offsetLeft + radius)}px`;
      ripple.classList.add(className);

      const oldRipple = document.querySelectorAll('.ripple')[0];
      if (oldRipple) {
        oldRipple.remove();
      }

      btn.insertAdjacentElement('beforeend', ripple);
    },
  },
};
</script>

<style lang="scss">
.menu {
  a {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 56px;
    padding: 0 var(--gap3);
    line-height: 1;
    color: var(--menu-fg);

    &:hover {
      background: var(--menu-bg-hover);
      color: var(--menu-fg-hover);
    }

    &:active {
      background: var(--menu-bg-active);
      color: var(--menu-fg-active);
      transition: none;
    }

    .name {
      display: flex;
      transition: all 0.2s;
    }
    &:hover .name,
    &:active .name,
    &.active .name {
      transform: translate3d(4px, 0, 0);
    }

    i {
      display: none;
    }
  }

  .active {
    background: var(--menu-bg-active);
    color: var(--menu-fg-active);
  }

  .ripple {
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 8px;
    background: var(--menu-ripple-bg);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.8s linear;
    opacity: 0.4;
  }
}

@media (max-width: 960px) {
  .menu a[data-page='services'],
  .menu a[data-page='education'] {
    display: none;
  }

  .menu {
    display: flex;
    flex-direction: row-reverse;
    flex-grow: 1;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

    a {
      display: flex;
      align-items: center;
      flex-grow: 1;
      min-height: 100%;
      padding: 0;

      i {
        display: block;
        margin-bottom: 6px;
        text-align: center;
        font-size: 18px;
      }

      .name {
        font-size: 13px;
      }

      &:hover .name,
      &:active .name,
      &.active .name {
        transform: none;
      }

      .ripple {
        position: absolute;
        top: 0;
        left: 0;
        width: 8px;
        height: 8px;
        background: var(--menu-ripple-bg);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.8s linear;
        opacity: 0.4;
      }
    }
  }
}
</style>

