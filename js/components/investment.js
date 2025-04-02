export function initInvestment() {
    const stats = document.querySelectorAll('.investment-stats .stat');
    
    stats.forEach(stat => {
        const value = stat.querySelector('h3');
        const target = parseInt(value.textContent);
        let current = 0;
        
        const animate = () => {
            if (current < target) {
                current++;
                value.textContent = current + (value.textContent.includes('+') ? '+' : '');
                requestAnimationFrame(animate);
            }
        };
        
        // Start animation when in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(stat);
    });
} 