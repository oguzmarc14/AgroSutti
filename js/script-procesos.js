/* ===========================
   JAVASCRIPT - AGROSUTTI TIMELINE
   =========================== */

document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = Array.from(document.querySelectorAll('.timeline-item'));
    initializeScrollReveal(timelineItems);
    initializeTimelineMap(timelineItems);
    initializeTimelineObserver(timelineItems);
    initializeScrollToTop();
    updateTimelineProgress(timelineItems);
    window.addEventListener('scroll', () => updateTimelineProgress(timelineItems), { passive: true });
    window.addEventListener('resize', () => updateTimelineProgress(timelineItems));
});

const stageLabels = [
    'Ganado',
    'Nutrición',
    'Higiene',
    'Ordeño',
    'Cuajado',
    'Planta',
    'Pasteurización',
    'Moldeado',
    'Prensado',
    'Maduración',
    'Empaque',
    'Distribución',
    'Mesa'
];

const stageDescriptors = [
    'Origen',
    'Alimentación',
    'Limpieza',
    'Extracción',
    'Creación',
    'Tecnología',
    'Control',
    'Corte',
    'Estructura',
    'Curación',
    'Protección',
    'Venta',
    'Entrega'
];

function initializeScrollReveal(timelineItems) {
    const revealTargets = [];

    const addTargets = (selector, delayStep = 70) => {
        const elements = Array.from(document.querySelectorAll(selector));
        elements.forEach((element, index) => {
            element.classList.add('scroll-reveal');
            element.style.setProperty('--reveal-delay', `${index * delayStep}ms`);
            revealTargets.push(element);
        });
    };

    addTargets('.hero-panel', 0);
    addTargets('.hero-copy .eyebrow', 0);
    addTargets('.hero-copy h2', 0);
    addTargets('.hero-copy p', 0);
    addTargets('.highlight-card', 120);
    addTargets('.timeline-title', 0);
    addTargets('.timeline-map', 0);
    addTargets('.cta-content', 0);
    addTargets('.footer-content', 0);

    timelineItems.forEach((item, index) => {
        item.classList.add('scroll-reveal', 'timeline-reveal');
        item.style.setProperty('--reveal-delay', `${index * 95}ms`);
        revealTargets.push(item);
    });

    if (!revealTargets.length) {
        return;
    }

    if (!('IntersectionObserver' in window)) {
        revealTargets.forEach((element) => element.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observerInstance.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px'
    });

    revealTargets.forEach((element) => observer.observe(element));
}

function initializeTimelineMap(timelineItems) {
    const timelineMap = document.getElementById('timelineMap');
    if (!timelineMap || !timelineItems.length) {
        return;
    }

    timelineMap.innerHTML = '';

    timelineItems.forEach((item, index) => {
        item.dataset.timelineIndex = String(index);
        item.dataset.stage = stageDescriptors[index] || '';

        if (!item.querySelector('.timeline-marker')) {
            const marker = document.createElement('div');
            marker.className = 'timeline-marker';
            if (index === timelineItems.length - 1) {
                marker.classList.add('final-marker');
            }
            marker.style.background = index % 2 === 0
                ? 'linear-gradient(135deg, #8B1616, #C41E1E)'
                : 'linear-gradient(135deg, #C41E1E, #D63C3C)';
            marker.innerHTML = `<span class="marker-number">${index + 1}</span>`;
            item.insertBefore(marker, item.firstChild);
        }

        const mapItem = document.createElement('button');
        mapItem.type = 'button';
        mapItem.className = 'timeline-map-item';
        mapItem.innerHTML = `
            <span class="map-index">${String(index + 1).padStart(2, '0')}</span>
            <span class="map-label">${stageLabels[index] || `Paso ${index + 1}`}</span>
        `;

        mapItem.addEventListener('click', () => {
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });

        timelineMap.appendChild(mapItem);
    });
}

function initializeTimelineObserver(timelineItems) {
    if (!timelineItems.length) {
        return;
    }

    if (!('IntersectionObserver' in window)) {
        timelineItems.forEach(item => item.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });

        updateTimelineProgress(timelineItems);
    }, {
        threshold: [0.18, 0.34, 0.5],
        rootMargin: '0px 0px -14% 0px'
    });

    timelineItems.forEach(item => observer.observe(item));
}

function updateTimelineProgress(timelineItems) {
    const timeline = document.querySelector('.timeline');
    const progress = document.querySelector('.timeline-progress');
    const mapItems = Array.from(document.querySelectorAll('.timeline-map-item'));

    if (!timeline || !progress || !timelineItems.length) {
        return;
    }

    const viewportTrigger = window.innerHeight * 0.62;
    let activeIndex = 0;

    timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= viewportTrigger) {
            activeIndex = index;
        }
    });

    const activeItem = timelineItems[activeIndex];
    const fillHeight = activeItem ? activeItem.offsetTop + (activeItem.offsetHeight / 2) : 0;
    progress.style.height = `${Math.max(0, fillHeight)}px`;

    timelineItems.forEach((item, index) => {
        item.classList.toggle('is-active', index === activeIndex);
    });

    mapItems.forEach((mapItem, index) => {
        mapItem.classList.toggle('is-current', index === activeIndex);
        if (index === activeIndex) {
            mapItem.setAttribute('aria-current', 'true');
        } else {
            mapItem.removeAttribute('aria-current');
        }
    });
}

function initializeScrollToTop() {
    const btn = document.createElement('button');
    btn.id = 'scrollToTop';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Volver al inicio');
    btn.innerHTML = '↑';
    document.body.appendChild(btn);

    const updateVisibility = () => {
        btn.style.display = window.pageYOffset > 320 ? 'flex' : 'none';
    };

    window.addEventListener('scroll', updateVisibility, { passive: true });
    updateVisibility();

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

console.log('✓ AgroSutti Timeline - Script premium inicializado');
