/* WIX: menu hamburger, sottomenu a tendina, accordion e animazioni di ingresso hanno equivalente nativo.
   WIX: il filtro centri in dove-curarsi (data-center-filter / data-center-region / data-center-card) va riscritto in Velo + CMS. */
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

  const submenuTriggers = [...document.querySelectorAll('[data-submenu-trigger]')];
  const isDesktop = () => window.matchMedia('(min-width: 768px)').matches;

  const setSubmenu = (trigger, open) => {
    const panel = document.getElementById(trigger.getAttribute('aria-controls'));
    trigger.setAttribute('aria-expanded', String(open));
    if (panel) panel.classList.toggle('open', open);
  };

  const closeAllSubmenus = (except) => {
    submenuTriggers.forEach((trigger) => {
      if (trigger !== except) setSubmenu(trigger, false);
    });
  };

  submenuTriggers.forEach((trigger) => {
    const item = trigger.closest('[data-nav-item]');

    trigger.addEventListener('click', () => {
      const open = trigger.getAttribute('aria-expanded') === 'true';
      closeAllSubmenus(trigger);
      setSubmenu(trigger, !open);
    });

    if (item) {
      item.addEventListener('mouseenter', () => {
        if (!isDesktop()) return;
        closeAllSubmenus(trigger);
        setSubmenu(trigger, true);
      });

      item.addEventListener('mouseleave', () => {
        if (!isDesktop()) return;
        setSubmenu(trigger, false);
      });

      item.addEventListener('focusout', (event) => {
        if (!isDesktop()) return;
        if (!item.contains(event.relatedTarget)) setSubmenu(trigger, false);
      });
    }
  });

  if (submenuTriggers.length) {
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      const openTrigger = submenuTriggers.find(
        (trigger) => trigger.getAttribute('aria-expanded') === 'true'
      );
      if (!openTrigger) return;
      setSubmenu(openTrigger, false);
      openTrigger.focus();
    });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('[data-nav-item]')) closeAllSubmenus();
    });

    window.addEventListener('resize', () => closeAllSubmenus());
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
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    revealElements.forEach((el) => el.classList.add('show'));
  } else if ('IntersectionObserver' in window && revealElements.length) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('show'));
  }
})();
