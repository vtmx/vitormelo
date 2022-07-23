<template>
  <Nav />
  <main>
    <About />
    <Experiences />
    <Education />
    <Certifications />
    <Services />
    <Skills />
    <Contact />
  </main>
  <nav id="controls">
    <PageControl />
    <ColorControl />
  </nav>
</template>

<script>
import About from "./components/About.vue";
import Certifications from "./components/Certifications.vue";
import Education from "./components/Education.vue";
import Experiences from "./components/Experiences.vue";
import Nav from "./components/Nav.vue";
import Services from "./components/Services.vue";
import Skills from "./components/Skills.vue";
import Contact from "./components/Contact.vue";
import PageControl from "./components/PageControl.vue";
import ColorControl from "./components/ColorControl.vue";
import "./scss/main.scss";
import "./js/main.js";

export default {
  name: "App",
  components: {
    About,
    Certifications,
    Education,
    Experiences,
    Nav,
    Services,
    Skills,
    Contact,
    PageControl,
    ColorControl,
  },
};
</script>
