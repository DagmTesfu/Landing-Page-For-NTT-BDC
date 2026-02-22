/* ============================================================
   animations.js – NTT BDC Site-Wide Animation Engine
   ============================================================ */

/* ── Page Loader ─────────────────────────────────────────── */
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('page-loader');
        if (loader) loader.classList.add('hidden');
    }, 1800);
});

/* ── Scroll-triggered Reveals ────────────────────────────── */
function initReveal() {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const staggered = document.querySelectorAll('[data-stagger]');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const el = e.target;
                const delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0;
                setTimeout(() => el.classList.add('visible'), delay * 1000);
                io.unobserve(el);
            }
        });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    staggered.forEach((group) => {
        const children = group.querySelectorAll('.stagger-child');
        const childObserver = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    children.forEach((child, i) => {
                        setTimeout(() => child.classList.add('visible'), i * 120);
                    });
                    childObserver.unobserve(e.target);
                }
            });
        }, { threshold: 0.1 });
        childObserver.observe(group);
    });
}

/* ── Nav Scroll Effect ───────────────────────────────────── */
function initNav() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    const handleScroll = () => {
        if (window.scrollY > 60) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
}

/* ── Mobile Menu ─────────────────────────────────────────── */
function initMobileMenu() {
    const ham = document.querySelector('.hamburger');
    const menu = document.querySelector('.mob-menu');
    const close = document.querySelector('.mob-close');
    if (!ham || !menu) return;
    ham.addEventListener('click', () => menu.classList.add('open'));
    if (close) close.addEventListener('click', () => menu.classList.remove('open'));
    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => menu.classList.remove('open'));
    });
}

/* ── Animated Counter ────────────────────────────────────── */
function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 2000;
    const start = performance.now();
    const easeOutQuart = t => 1 - Math.pow(1 - t, 4);
    const tick = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutQuart(progress);
        const value = Math.floor(eased * target);
        el.textContent = prefix + value.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
}

function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                animateCounter(e.target);
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(el => io.observe(el));
}

/* ── Parallax Effect ─────────────────────────────────────── */
function initParallax() {
    const layers = document.querySelectorAll('[data-parallax]');
    if (!layers.length) return;
    window.addEventListener('scroll', () => {
        layers.forEach(el => {
            const speed = parseFloat(el.dataset.parallax) || 0.3;
            const rect = el.closest('section')?.getBoundingClientRect() || { top: 0 };
            const offset = rect.top * speed;
            el.style.transform = `translateY(${offset}px)`;
        });
    }, { passive: true });
}

/* ── Cursor Glow ─────────────────────────────────────────── */
function initCursorGlow() {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.cssText = `
    position:fixed; pointer-events:none; z-index:9998;
    width:300px; height:300px; border-radius:50%;
    background:radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%);
    transform:translate(-50%,-50%);
    transition: opacity 0.3s ease;
    top:0; left:0;
  `;
    document.body.appendChild(glow);
    let mx = 0, my = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    const animGlow = () => {
        cx += (mx - cx) * 0.08;
        cy += (my - cy) * 0.08;
        glow.style.left = cx + 'px';
        glow.style.top = cy + 'px';
        requestAnimationFrame(animGlow);
    };
    animGlow();
}

/* ── Particle Canvas (Hero) ──────────────────────────────── */
function initParticles(canvasId, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = canvas.width = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;
    window.addEventListener('resize', () => {
        W = canvas.width = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
    });
    const count = Math.min(80, Math.floor(W * H / 14000));
    const particles = Array.from({ length: count }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1,
        alpha: Math.random() * 0.5 + 0.1,
    }));
    const draw = () => {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = color.replace(')', `,${p.alpha})`).replace('rgb', 'rgba');
            ctx.fill();
            p.x += p.vx; p.y += p.vy;
            if (p.y < -2) { p.y = H + 2; p.x = Math.random() * W; }
            if (p.x < -2) p.x = W + 2;
            if (p.x > W + 2) p.x = -2;
        });
        requestAnimationFrame(draw);
    };
    draw();
}

/* ── Floating Orb Animation ──────────────────────────────── */
function initOrbs() {
    document.querySelectorAll('.float-orb').forEach((orb, i) => {
        const duration = 6 + i * 2;
        orb.style.animation = `orbFloat ${duration}s ease-in-out ${i * 1.2}s infinite`;
    });
}

/* ── Tab / Accordion Components ──────────────────────────── */
function initTabs() {
    document.querySelectorAll('[data-tabs]').forEach(wrap => {
        const btns = wrap.querySelectorAll('[data-tab]');
        const panels = wrap.querySelectorAll('[data-panel]');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                btns.forEach(b => b.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));
                btn.classList.add('active');
                wrap.querySelector(`[data-panel="${btn.dataset.tab}"]`)?.classList.add('active');
            });
        });
        if (btns.length) btns[0].click();
    });
}

/* ── Smooth Section Scroll ───────────────────────────────── */
function initSmoothAnchor() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
    });
}

/* ── CSS Keyframes injection ─────────────────────────────── */
const kf = document.createElement('style');
kf.textContent = `
  @keyframes orbFloat {
    0%,100% { transform: translateY(0) scale(1); }
    50%      { transform: translateY(-20px) scale(1.05); }
  }
  .stagger-child {
    opacity:0; transform:translateY(28px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .stagger-child.visible { opacity:1; transform:translateY(0); }
`;
document.head.appendChild(kf);

/* ── Init All ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initReveal();
    initCounters();
    initParallax();
    initCursorGlow();
    initOrbs();
    initTabs();
    initSmoothAnchor();
    initMobileMenu();
    // Particles per page
    initParticles('hero-canvas-coffee', 'rgb(201,168,76)');
    initParticles('hero-canvas-agri', 'rgb(76,175,114)');
    initParticles('hero-canvas-main', 'rgb(201,168,76)');
});
