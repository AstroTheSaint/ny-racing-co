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
                        <img src="/assets/images/placeholder.svg" alt="Hero Bar">
                        <p>Exclusive speakeasy for first adopters</p>
                    </div>
                </div>
                <div class="location-info">
                    <h3>Space Features</h3>
                    <ul>
                        <li>Professional racing simulators</li>
                        <li>Co-working space for innovators</li>
                        <li>Exclusive Hero Bar</li>
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
                        <li>Exclusive Hero Bar</li>
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