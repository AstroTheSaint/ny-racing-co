// Location Experience Handler
document.querySelectorAll('.explore-btn').forEach(button => {
    button.addEventListener('click', function() {
        const location = this.dataset.location;
        showLocationExperience(location);
    });
});

function showLocationExperience(location) {
    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'location-modal';
    
    // Create content based on location
    let content = '';
    if (location === 'new-york') {
        content = `
            <div class="location-modal-content">
                <button class="close-modal">&times;</button>
                <h2>Greenpoint, Brooklyn</h2>
                <div class="location-gallery">
                    <div class="gallery-item">
                        <img src="/assets/images/placeholder.svg" alt="Greenpoint Location">
                        <p>Our flagship space in the heart of Brooklyn's creative district</p>
                    </div>
                    <div class="gallery-item">
                        <img src="/assets/images/placeholder.svg" alt="Racing HQ">
                        <p>State-of-the-art racing facility</p>
                    </div>
                    <div class="gallery-item">
                        <img src="/assets/images/placeholder.svg" alt="HIRO Bar">
                        <p>Exclusive speakeasy for first adopters</p>
                    </div>
                </div>
                <div class="location-info">
                    <h3>Space Features</h3>
                    <ul>
                        <li>Professional racing simulators</li>
                        <li>Co-working space for innovators</li>
                        <li>Exclusive HIRO Bar</li>
                        <li>High-fidelity listening room</li>
                    </ul>
                </div>
            </div>
        `;
    } else if (location === 'tokyo') {
        content = `
            <div class="location-modal-content">
                <button class="close-modal">&times;</button>
                <h2>Tokyo Skytree Area</h2>
                <div class="location-gallery">
                    <div class="gallery-item">
                        <img src="/assets/images/placeholder.svg" alt="Tokyo Location">
                        <p>Our first international location adjacent to Tokyo Skytree</p>
                    </div>
                    <div class="gallery-item">
                        <img src="/assets/images/placeholder.svg" alt="Warehouse">
                        <p>Modern warehouse space with industrial design</p>
                    </div>
                    <div class="gallery-item">
                        <img src="/assets/images/placeholder.svg" alt="Hotel Partnership">
                        <p>Exclusive partnership with neighboring luxury hotels</p>
                    </div>
                </div>
                <div class="location-info">
                    <h3>Space Features</h3>
                    <ul>
                        <li>Professional racing simulators</li>
                        <li>Co-working space for innovators</li>
                        <li>Exclusive HIRO Bar</li>
                        <li>High-fidelity listening room</li>
                    </ul>
                    <div class="hotel-benefits">
                        <h3>Hotel Partnership Benefits</h3>
                        <ul>
                            <li>Exclusive access to hotel amenities</li>
                            <li>Special rates for members</li>
                            <li>Priority booking for events</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
    
    modal.innerHTML = content;
    document.body.appendChild(modal);
    
    // Add close button functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Dashboard Animation
function initDashboard() {
    const wheel = document.querySelector('.steering-wheel');
    const speedValue = document.querySelector('.speed-value');
    let currentSpeed = 0;
    let wheelRotation = 0;
    let lastScrollY = window.scrollY;

    // Speedometer animation
    function updateSpeed() {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        currentSpeed = Math.min(180, Math.round(scrollPercent * 1.8)); // Max speed 180 MPH
        speedValue.textContent = currentSpeed;
    }

    // Steering wheel animation
    function updateWheel() {
        const scrollDelta = window.scrollY - lastScrollY;
        wheelRotation += scrollDelta * 0.1; // Adjust sensitivity here
        wheel.style.transform = `translateX(-50%) rotate(${wheelRotation}deg)`;
        lastScrollY = window.scrollY;
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update on scroll
    window.addEventListener('scroll', () => {
        updateSpeed();
        updateWheel();
    });

    // Initial update
    updateSpeed();
    updateWheel();
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', initDashboard); 