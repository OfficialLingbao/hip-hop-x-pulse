// Event data
const featuredEvents = [
    {
        id: 'coachella2024',
        title: "Coachella Valley Music and Arts Festival 2024",
        category: "concerts",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/e1/45/c7/e145c750-4503-6a19-c50f-dd3bb7716bb4/source/500x500bb.jpg",
        date: "April 12-21, 2024",
        location: "Indio, California",
        description: "Experience the world's most iconic music festival featuring top hip-hop artists.",
        ticketLink: "#"
    },
    {
        id: 'rollingLoud2024',
        title: "Rolling Loud Miami 2024",
        category: "concerts",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/e7/4e/b4/e74eb4c3-4e07-e45e-d99e-375be6f0714c/source/500x500bb.jpg",
        date: "July 19-21, 2024",
        location: "Miami Gardens, FL",
        description: "The world's largest hip-hop festival returns to Miami.",
        ticketLink: "#"
    },
    {
        id: 'breakdanceChamp',
        title: "World Breakdancing Championship",
        category: "dance",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/4a/f9/c8/4af9c8a4-3e46-b2bc-6067-3cef2532f227/source/500x500bb.jpg",
        date: "May 15-16, 2024",
        location: "New York City, NY",
        description: "Watch the world's best breakdancers compete for the championship title.",
        ticketLink: "#"
    }
];

const events = [
    // Concerts
    {
        id: 'kendrickTour',
        title: "Kendrick Lamar World Tour",
        category: "concerts",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/07/36/54/0736544c-5626-4536-7a3b-dc8f305b00f2/source/500x500bb.jpg",
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
        image: "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/9b/77/cd/9b77cd4a-19c2-3c37-9744-e7fd9f0d6b47/source/500x500bb.jpg",
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
        image: "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/d2/19/9c/d2199c6a-3ef9-e44c-c830-e6f458d11d76/source/500x500bb.jpg",
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
        image: "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/5c/b3/2b/5cb32b1a-e53e-79b9-8b31-04973eeae2ef/source/500x500bb.jpg",
        date: "July 5-7, 2024",
        location: "Atlanta, GA",
        description: "The ultimate streetwear and hip-hop fashion showcase.",
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

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Populate featured events
    const highlightsGrid = document.querySelector('.highlights-grid');
    featuredEvents.forEach(event => {
        highlightsGrid.innerHTML += createEventCard(event);
    });

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
                const event = [...events, ...featuredEvents].find(e => e.id === card.id);
                if (category === 'all' || event.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Initialize map (you can add your preferred map service here)
    // Example using a placeholder:
    const mapContainer = document.getElementById('map');
    mapContainer.style.background = '#eee';
    mapContainer.innerHTML = '<div style="height:100%;display:flex;align-items:center;justify-content:center;"><p>Interactive Map Coming Soon</p></div>';
});
