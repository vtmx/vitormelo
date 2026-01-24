export default {
  init() {
    document.addEventListener('DOMContentLoaded', () => {
      const navLinks = document.querySelectorAll('#nav-main nav a[href^="#"]');
      const sections = document.querySelectorAll('section[id]');

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('id');
              updateActive(id);
            }
          });
        },
        {
          rootMargin: '-300px 0px -60% 0px' // ajusta quando considera "visível"
          // Exemplo: -300px no topo (header), 60% na parte de baixo
        }
      );

      sections.forEach(section => observer.observe(section));

      // Força último item no bottom (IntersectionObserver não detecta sozinho o final)
      window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
          const lastId = sections[sections.length - 1]?.getAttribute('id');
          if (lastId) updateActive(lastId);
        }
      });

      function updateActive(id) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
        history.replaceState(null, '', `#${id}`);
      }

      // Chamada inicial
      const firstVisible = [...sections].find(s => s.getBoundingClientRect().top <= 300);
      if (firstVisible) updateActive(firstVisible.getAttribute('id'));
    });
  }
};
