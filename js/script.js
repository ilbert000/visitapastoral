gsap.registerPlugin(ScrollTrigger);

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const menuOverlay = document.querySelector('.menu-overlay');
const body = document.body;

function closeMenu() {
    if (!navMenu) return;

    navMenu.classList.remove('active');
    menuOverlay?.classList.remove('active');
    body.classList.remove('menu-open');

    if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
    }
}

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('active');
        menuOverlay?.classList.toggle('active', isOpen);
        body.classList.toggle('menu-open', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    menuOverlay?.addEventListener('click', closeMenu);

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            closeMenu();
        }
    });
}

const tl = gsap.timeline();

tl.from(".header", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
})

.from(".hero-badge", {
    y: 30,
    opacity: 0,
    duration: .6,
    ease: "power3.out"
}, "-=.5")

.from(".hero-content h1", {
    y: 70,
    opacity: 0,
    duration: .8,
    ease: "power4.out"
}, "-=.3")

.from(".hero-content p", {
    y: 40,
    opacity: 0,
    duration: .7,
    ease: "power3.out"
}, "-=.4")

.fromTo(
    ".hero-buttons button",
    {
        y: 30,
        opacity: 0
    },
    {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.7)",
        clearProps: "all"
    },
    "-=.3"
)

.from(".scroll-indicator", {
    opacity:0,
    y:20,
    duration:.8
}, "-=.4");