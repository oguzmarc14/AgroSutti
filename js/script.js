/* ============================================
   AGROSUTTI — ANIMATIONS & LOGIC
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollReveal();
  initProductTilt();
  initCounters();
  initScrollToTop();
  initCursorGlow();
  initMagneticButtons();
  initCardFloatObserver();
  initParticleBackground();
  initScanLines();
});

function initNavigation() {
  const nav = document.querySelector('.main-nav');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navLogo = document.querySelector('.nav-logo img');
  const menuSection = document.getElementById('menu');

  const updateNavState = () => {
    let isMenuSection = false;

    if (menuSection) {
      const rect = menuSection.getBoundingClientRect();
      if (rect.top <= 80 && rect.bottom >= 80) {
        isMenuSection = true;
      }
    }

    const isScrolled = window.scrollY > 60;

    if (nav) {
      nav.classList.toggle('scrolled', isScrolled && !isMenuSection);
      nav.classList.toggle('nav-menu-active', isMenuSection);
    }

    if (navLogo) {
      const shouldBeDark = isScrolled && !isMenuSection;

      if (navLogo.dataset.logoState !== String(shouldBeDark)) {
        navLogo.dataset.logoState = String(shouldBeDark);

        const currentSrc = navLogo.getAttribute('src') || '';

        if (shouldBeDark) {
          navLogo.setAttribute('src', currentSrc.replace('logo-agro-sutti-bco.png', 'logo-agro sutti.png'));
        } else {
          navLogo.setAttribute('src', currentSrc.replace('logo-agro sutti.png', 'logo-agro-sutti-bco.png'));
        }
      }
    }
  };

  updateNavState();

  window.addEventListener('scroll', () => {
    if (!document.body.classList.contains('menu-open')) {
      updateNavState();
    }
  }, { passive: true });

  if (hamburger && navLinks) {
    const setMenuOpen = (isOpen) => {
      hamburger.classList.toggle('active', isOpen);
      navLinks.classList.toggle('open', isOpen);

      if (nav) {
        nav.classList.toggle('menu-open', isOpen);
      }

      document.body.classList.toggle('menu-open', isOpen);
      document.documentElement.classList.toggle('menu-open', isOpen);

      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      hamburger.setAttribute('aria-expanded', String(isOpen));
    };

    hamburger.addEventListener('click', () => {
      setMenuOpen(!navLinks.classList.contains('open'));
    });

    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        setMenuOpen(false);
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navLinks.classList.contains('open')) {
        setMenuOpen(false);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        setMenuOpen(false);
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const navHeight = nav ? nav.offsetHeight : 0;
        const y = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ---- SCROLL REVEAL ---- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  if (!reveals.length) return;

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ---- PRODUCT TILT ---- */
function initProductTilt() {
  const cards = document.querySelectorAll('.product-card');

  if (window.matchMedia('(hover: none)').matches) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const rx = ((e.clientY - r.top - r.height / 2) / (r.height / 2)) * -5;
      const ry = ((e.clientX - r.left - r.width / 2) / (r.width / 2)) * 5;

      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
      card.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';

      setTimeout(() => {
        card.style.transition = '';
      }, 500);
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });
}

/* ---- COUNTERS ---- */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');

  if (!counters.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const noFormat = el.dataset.noformat === 'true' || target === 2019;
  const duration = 2200;
  const start = performance.now();

  function update(now) {
    const p = Math.min((now - start) / duration, 1);
    const value = Math.floor((1 - Math.pow(1 - p, 4)) * target);
    el.textContent = (noFormat ? value.toString() : value.toLocaleString('es-MX')) + suffix;

    if (p < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/* ---- SCROLL TO TOP ---- */
function initScrollToTop() {
  const btn = document.getElementById('scrollToTop');

  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.style.display = window.pageYOffset > 400 ? 'flex' : 'none';
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ---- CURSOR GLOW ---- */
function initCursorGlow() {
  const cursor = document.createElement('div');
  cursor.classList.add('cursor-glow');
  document.body.appendChild(cursor);

  Object.assign(cursor.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(232, 201, 138, 0.15) 0%, rgba(0,0,0,0) 60%)',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
    transition: 'opacity 0.3s ease',
    opacity: '0'
  });

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.opacity = '1';
    cursor.style.transform = `translate(${mouseX - 200}px, ${mouseY - 200}px)`;
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });
}

/* ---- MAGNETIC BUTTONS ---- */
function initMagneticButtons() {
  const buttons = document.querySelectorAll('.btn');

  if (window.matchMedia('(hover: none)').matches) return;

  buttons.forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.3;

      btn.style.transform = `translate(${x}px, ${y}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
      btn.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';

      setTimeout(() => {
        btn.style.transition = '';
      }, 500);
    });

    btn.addEventListener('mouseenter', () => {
      btn.style.transition = 'none';
    });
  });
}

/* ---- CARD FLOAT OBSERVER ---- */
function initCardFloatObserver() {
  const cards = document.querySelectorAll('.dif-card');

  if (!cards.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'transform 0.6s ease';
        entry.target.style.transform = 'translateY(-10px)';

        setTimeout(() => {
          if (entry.target) {
            entry.target.style.transform = '';
          }
        }, 600);

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(el => observer.observe(el));
}

/* ---- PARTICLE BACKGROUND ---- */
function initParticleBackground() {
  const container = document.createElement('div');
  container.classList.add('particle-container');

  Object.assign(container.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: '-1',
    overflow: 'hidden'
  });

  document.body.prepend(container);

  if (!document.getElementById('particleKeyframes')) {
    const style = document.createElement('style');
    style.id = 'particleKeyframes';

    style.innerHTML = `
      @keyframes floatParticle {
        0% { transform: translateY(100vh) translateX(0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-20vh) translateX(30px); opacity: 0; }
      }
    `;

    document.head.appendChild(style);
  }

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    const size = Math.random() * 4 + 2;

    Object.assign(particle.style, {
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      background: 'rgba(232, 201, 138, 0.4)',
      borderRadius: '50%',
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animation: `floatParticle ${15 + Math.random() * 20}s linear infinite`,
      animationDelay: `-${Math.random() * 20}s`
    });

    container.appendChild(particle);
  }
}

/* ---- SCAN LINES ---- */
function initScanLines() {
  const scanlines = document.createElement('div');
  scanlines.classList.add('scanlines');

  Object.assign(scanlines.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: '9998',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.05))',
    backgroundSize: '100% 4px',
    opacity: '0.4'
  });

  document.body.appendChild(scanlines);
}