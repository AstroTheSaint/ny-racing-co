export function initHero() {
    const heroVideo = document.querySelector('.hero video');
    
    if (heroVideo) {
        // Ensure video plays on mobile
        heroVideo.addEventListener('canplay', () => {
            heroVideo.play().catch(() => {
                // Auto-play was prevented
                console.log('Video autoplay prevented');
            });
        });
    }
} 