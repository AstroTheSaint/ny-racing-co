export function initSpaces() {
    const spaceCards = document.querySelectorAll('.space-card');
    
    spaceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover');
        });
    });
} 