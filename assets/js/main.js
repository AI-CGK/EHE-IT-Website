(() => {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-main-nav]');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  const centerFilterInput = document.querySelector('[data-center-filter]');
  const centerRegionSelect = document.querySelector('[data-center-region]');
  const centerCards = [...document.querySelectorAll('[data-center-card]')];

  const applyCenterFilter = () => {
    if (!centerCards.length) return;
    const textValue = (centerFilterInput?.value || '').toLowerCase().trim();
    const regionValue = centerRegionSelect?.value || 'tutte';

    centerCards.forEach((card) => {
      const haystack = (card.dataset.search || '').toLowerCase();
      const region = card.dataset.region || 'altro';
      const textMatch = !textValue || haystack.includes(textValue);
      const regionMatch = regionValue === 'tutte' || regionValue === region;
      card.hidden = !(textMatch && regionMatch);
    });
  };

  centerFilterInput?.addEventListener('input', applyCenterFilter);
  centerRegionSelect?.addEventListener('change', applyCenterFilter);

  const accordionButtons = [...document.querySelectorAll('[data-accordion-trigger]')];
  accordionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      if (panel) panel.hidden = expanded;
    });
  });

  const revealElements = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window && revealElements.length) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('show'));
  }
})();
