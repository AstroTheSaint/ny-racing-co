// Navigation component for Brooklyn Racing Co.

import { debounce } from '../utils/helpers.js';

export const initNavigation = () => {
    const nav = document.querySelector('.main-nav');
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    let lastScroll = 0;

    // Handle scroll events
    const handleScroll = debounce(() => {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class based on scroll position
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Hide/show nav based on scroll direction
        if (currentScroll > lastScroll && currentScroll > 100) {
            nav.classList.add('nav-hidden');
        } else {
            nav.classList.remove('nav-hidden');
        }

        lastScroll = currentScroll;
    }, 100);

    // Mobile menu toggle
    const toggleMobileMenu = () => {
        navLinks.classList.toggle('active');
        mobileMenuButton.classList.toggle('active');
    };

    // Close mobile menu when clicking outside
    const closeMobileMenu = (e) => {
        if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuButton.classList.remove('active');
        }
    };

    // Close mobile menu when clicking a link
    const closeMenuOnLinkClick = () => {
        navLinks.classList.remove('active');
        mobileMenuButton.classList.remove('active');
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
    document.addEventListener('click', closeMobileMenu);
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenuOnLinkClick);
    });

    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    const setActiveNavItem = () => {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', debounce(setActiveNavItem, 100));
}; 