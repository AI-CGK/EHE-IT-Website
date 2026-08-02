(function () {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-main-nav]');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('is-open');
    });
  }

  const filterButtons = document.querySelectorAll('[data-filter]');
  const centerCards = document.querySelectorAll('[data-region]');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.getAttribute('data-filter');
      filterButtons.forEach((b) => b.classList.remove('is-active'));
      button.classList.add('is-active');

      centerCards.forEach((card) => {
        const region = card.getAttribute('data-region');
        card.hidden = !(selected === 'all' || selected === region);
      });
    });
  });

  const accordionTriggers = document.querySelectorAll('[data-accordion-trigger]');
  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      if (!item) return;
      item.classList.toggle('is-open');
    });
  });
})();
