// Event data
const events = [
    // Concerts
    {
        id: 'kendrickTour',
        title: "Kendrick Lamar World Tour",
        category: "concerts",
        image: "images/events/kendrick.jpg",
        date: "June 1, 2024",
        location: "Multiple Cities",
        description: "Kendrick Lamar embarks on a worldwide tour.",
        ticketLink: "#"
    },
    // Dance Events
    {
        id: 'hiphopDance',
        title: "Hip-Hop Dance Convention",
        category: "dance",
        image: "images/events/dance-convention.jpg",
        date: "May 25, 2024",
        location: "Los Angeles, CA",
        description: "Learn from the best hip-hop dancers in the industry.",
        ticketLink: "#"
    },
    // Film Events
    {
        id: 'hiphopFilm',
        title: "Hip-Hop Film Festival",
        category: "film",
        image: "images/events/film-festival.jpg",
        date: "August 10-12, 2024",
        location: "Chicago, IL",
        description: "Celebrating hip-hop culture through film.",
        ticketLink: "#"
    },
    // Fashion Events
    {
        id: 'streetwearExpo',
        title: "Streetwear Fashion Expo",
        category: "fashion",
        image: "images/events/streetwear.jpg",
        date: "July 5-7, 2024",
        location: "Atlanta, GA",
        description: "The ultimate streetwear and hip-hop fashion showcase.",
        ticketLink: "#"
    },
    {
        id: 'coachella2024',
        title: "Coachella Valley Music and Arts Festival 2024",
        category: "concerts",
        image: "images/events/coachella.jpg",
        date: "April 12-21, 2024",
        location: "Indio, California",
        description: "Experience the world's most iconic music festival featuring top hip-hop artists.",
        ticketLink: "#"
    },
    {
        id: 'rollingLoud2024',
        title: "Rolling Loud Miami 2024",
        category: "concerts",
        image: "images/events/rolling-loud.jpg",
        date: "July 19-21, 2024",
        location: "Miami Gardens, FL",
        description: "The world's largest hip-hop festival returns to Miami.",
        ticketLink: "#"
    },
    {
        id: 'breakdanceChamp',
        title: "World Breakdancing Championship",
        category: "dance",
        image: "images/events/breakdance.jpg",
        date: "May 15-16, 2024",
        location: "New York City, NY",
        description: "Watch the world's best breakdancers compete for the championship title.",
        ticketLink: "#"
    }
];

// Create event card HTML
function createEventCard(event) {
    return `
        <div class="event-card" id="${event.id}">
            <img src="${event.image}" alt="${event.title}" class="event-image">
            <div class="event-content">
                <span class="event-category">${event.category}</span>
                <h3 class="event-title">${event.title}</h3>
                <div class="event-details">
                    <div class="event-date">
                        <i class="far fa-calendar"></i>
                        <span>${event.date}</span>
                    </div>
                    <div class="event-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${event.location}</span>
                    </div>
                    <p>${event.description}</p>
                </div>
                <a href="${event.ticketLink}" class="ticket-button">Get Tickets</a>
            </div>
        </div>
    `;
}

// Newsletter subscription functionality
async function handleSubscription(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('zipcode-input');
    if (!emailInput) {
        console.error('Email input not found');
        return;
    }
    
    const email = emailInput.value.trim();
    const messageDiv = document.querySelector('.newsletter-message');
    
    if (!messageDiv) {
        console.error('Newsletter message div not found');
        return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        messageDiv.textContent = 'Please enter a valid email address';
        messageDiv.className = 'newsletter-message error';
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        });

        const data = await response.json();

        if (response.ok) {
            messageDiv.textContent = data.message || 'Subscription successful!';
            messageDiv.className = 'newsletter-message success';
            emailInput.value = '';
        } else {
            messageDiv.textContent = data.error || 'Subscription failed';
            messageDiv.className = 'newsletter-message error';
        }
    } catch (error) {
        console.error('Subscription error:', error);
        messageDiv.textContent = 'Failed to subscribe. Please try again later.';
        messageDiv.className = 'newsletter-message error';
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Populate all events
    const eventsGrid = document.querySelector('.events-grid');
    events.forEach(event => {
        eventsGrid.innerHTML += createEventCard(event);
    });

    // Category filter functionality
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Filter events
            const category = tab.dataset.category;
            const eventCards = eventsGrid.querySelectorAll('.event-card');
            
            eventCards.forEach(card => {
                const event = events.find(e => e.id === card.id);
                if (category === 'all' || event.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Newsletter subscription event listener
    const subscribeButton = document.getElementById('zipcode-search-btn');
    const emailInput = document.getElementById('zipcode-input');
    
    if (subscribeButton && emailInput) {
        subscribeButton.addEventListener('click', handleSubscription);
        
        // Add enter key support
        emailInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleSubscription(event);
            }
        });
    } else {
        console.error('Newsletter subscription elements not found');
    }
});
