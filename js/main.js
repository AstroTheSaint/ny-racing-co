// Main JavaScript file for Brooklyn Racing Co.

// Import components
import { initNavigation } from '@/components/navigation.js';
import { initHero } from '@/components/hero.js';
import { initSpaces } from '@/components/spaces.js';
import { initInvestment } from '@/components/investment.js';
import { initContact } from '@/components/contact.js';

// Utility functions
import { debounce, smoothScroll, isInViewport } from '@/utils/helpers.js';

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initNavigation();
    initHero();
    initSpaces();
    initInvestment();
    initContact();

    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                if (entry.target.classList.contains('feature')) {
                    entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and features
    document.querySelectorAll('section, .feature, .highlight, .space-card').forEach(element => {
        observer.observe(element);
    });

    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }

    // Add neon pulse effect to buttons
    document.querySelectorAll('.neon-pulse').forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.animation = 'neonPulse 1s infinite';
        });
        button.addEventListener('mouseout', () => {
            button.style.animation = 'none';
        });
    });

    // Add hover effect to space cards
    document.querySelectorAll('.space-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = 'var(--shadow-neon)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        });
    });

    // Add typing effect to hero tagline
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        typeWriter();
    }

    // Add glitch effect to headings
    document.querySelectorAll('h1, h2').forEach(heading => {
        heading.addEventListener('mouseover', () => {
            heading.style.textShadow = `
                2px 2px var(--accent-blue),
                -2px -2px var(--accent-purple)
            `;
            setTimeout(() => {
                heading.style.textShadow = 'var(--shadow-neon)';
            }, 100);
        });
    });
}); 