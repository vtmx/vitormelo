export default {
  init() {
    document.addEventListener('DOMContentLoaded', () => {
      // Recebe elementos visíveis
      const sections = [...document.querySelectorAll('section[id]')].filter(el => getComputedStyle(el).display !== 'none');
      const navLinks  = [...document.querySelectorAll('nav a[href^="#"]')].filter(el => getComputedStyle(el).display !== 'none');
      let lastActiveId = '';  // para evitar atualizações desnecessárias

      function activateLink() {
        let current = '';

        // Encontra a seção mais relevante
        sections.forEach(section => {
          const sectionTop    = section.offsetTop;
          const sectionHeight = section.clientHeight;

          // Ajuste o -300 conforme a altura do seu header fixo
          // Quanto maior o número, mais cedo a seção "ativa"
          if (scrollY >= sectionTop - 300) {
            current = section.getAttribute('id');
          }
        });

        // Só atualiza se mudou
        if (current && current !== lastActiveId) {
          // Atualiza a URL (sem recarregar a página)
          history.replaceState(null, '', `#${current}`);
          lastActiveId = current;
        }

        // Atualiza as classes .active nos links
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
          }
        });
      }

      // Executa ao carregar e ao rolar
      window.addEventListener('scroll', activateLink);
      activateLink(); // chama uma vez no início
    });
  }
}
