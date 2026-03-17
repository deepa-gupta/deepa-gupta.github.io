/* =============================================
   DEEPA GUPTA — Career Site
   Vanilla JS interactions
   ============================================= */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -----------------------------------------------
     Sticky Nav
  ----------------------------------------------- */
  const header = document.getElementById('site-header');

  function handleScroll() {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run once on load

  /* -----------------------------------------------
     Mobile Hamburger Nav
  ----------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* -----------------------------------------------
     Smooth Scroll with Header Offset
  ----------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const headerHeight = header ? header.offsetHeight : 64;
      const targetY = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

      window.scrollTo({ top: targetY, behavior: prefersReducedMotion ? 'instant' : 'smooth' });
    });
  });

  /* -----------------------------------------------
     Section Fade-in on Scroll
  ----------------------------------------------- */
  if (!prefersReducedMotion) {
    const fadeEls = document.querySelectorAll('.fade-in');

    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '-60px 0px 0px 0px'
    });

    fadeEls.forEach(el => fadeObserver.observe(el));
  } else {
    // Immediately show everything if reduced motion
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
  }

  /* -----------------------------------------------
     Metric Counter Animation
  ----------------------------------------------- */
  function animateCounter(el, target, suffix, duration) {
    if (prefersReducedMotion) return;

    const start = performance.now();
    const isFloat = String(target).includes('.');
    const decimals = isFloat ? String(target).split('.')[1].length : 0;

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      el.textContent = isFloat
        ? current.toFixed(decimals) + (suffix || '')
        : Math.round(current) + (suffix || '');

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + (suffix || '');
      }
    }

    requestAnimationFrame(update);
  }

  const metricNumbers = document.querySelectorAll('.metric-number[data-target]');

  if (metricNumbers.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.target);
          const suffix = el.dataset.suffix || '';
          animateCounter(el, target, suffix, 1400);
          counterObserver.unobserve(el);
        }
      });
    }, {
      threshold: 0.5
    });

    metricNumbers.forEach(el => counterObserver.observe(el));
  }

  /* -----------------------------------------------
     Active nav link highlight on scroll
  ----------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

  function setActiveNav() {
    const scrollY = window.scrollY + 100;

    let currentId = '';
    sections.forEach(section => {
      if (section.offsetTop <= scrollY) {
        currentId = section.id;
      }
    });

    navItems.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.style.color = href === currentId ? 'var(--text-primary)' : '';
      link.style.fontWeight = href === currentId ? '600' : '';
    });
  }

  window.addEventListener('scroll', setActiveNav, { passive: true });
  setActiveNav();

})();
