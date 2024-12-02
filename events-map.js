// Initialize the map
const initializeMap = () => {
    console.log('Initializing map...');
    
    // Check if Leaflet is available
    if (typeof L === 'undefined') {
        console.error('Leaflet library not loaded!');
        return;
    }

    // Check if map container exists
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
        console.error('Map container not found!');
        return;
    }

    try {
        // Create the map centered at a default location
        const map = L.map('map').setView([39.8283, -98.5795], 4); // Centered on USA

        // Add multiple tile layers for better readability
        const baseLayers = {
            'Street View': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }),
            'Terrain View': L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png', {
                attribution: 'Map tiles by Stamen Design'
            }),
            'Satellite View': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Esri'
            })
        };

        // Add the default layer
        baseLayers['Street View'].addTo(map);

        // Add layer control
        L.control.layers(baseLayers).addTo(map);

        // Expanded and more diverse event locations with additional metadata
        const eventLocations = [
            { 
                id: 'rolling-loud-2023',
                name: 'Rolling Loud Festival', 
                coords: [25.9017, -80.1898], // Miami
                details: 'Largest Hip-Hop Festival',
                date: '2023-07-21',
                endDate: '2023-07-23',
                venue: 'Hard Rock Stadium',
                category: 'Festival',
                artists: ['Drake', 'Travis Scott', 'Future'],
                ticketPrices: {
                    general: 350,
                    vip: 1500,
                    earlyBird: 250
                },
                genre: ['Hip-Hop', 'Rap'],
                ageRestriction: '18+',
                website: 'https://rollingloud.com',
                recommendationScore: 0.9,
                socialMedia: {
                    twitter: 'https://twitter.com/rollingloud',
                    instagram: 'https://instagram.com/rollingloud'
                },
                accessibilityFeatures: ['Wheelchair Access', 'Sign Language Interpreters']
            },
            { 
                id: 'summer-jam-2023',
                name: 'Summer Jam', 
                coords: [40.7128, -74.0060], // New York
                details: 'Hot 97 Annual Hip-Hop Concert',
                date: '2023-06-11',
                endDate: '2023-06-11',
                venue: 'MetLife Stadium',
                category: 'Concert',
                artists: ['Lil Wayne', 'Megan Thee Stallion', 'J. Cole'],
                ticketPrices: {
                    general: 100,
                    vip: 500,
                    earlyBird: 150
                },
                genre: ['Hip-Hop', 'R&B'],
                ageRestriction: '16+',
                website: 'https://hot97.com/summerjam',
                recommendationScore: 0.8,
                socialMedia: {
                    twitter: 'https://twitter.com/hot97',
                    instagram: 'https://instagram.com/hot97'
                },
                accessibilityFeatures: ['Wheelchair Access']
            },
            { 
                id: 'essence-festival-2023',
                name: 'Essence Festival', 
                coords: [29.9511, -90.0715], // New Orleans
                details: 'Celebrating Black Music & Culture',
                date: '2023-07-01',
                endDate: '2023-07-03',
                venue: 'Superdome',
                category: 'Festival',
                artists: ['Mary J. Blige', 'Janet Jackson', 'Jazmine Sullivan'],
                ticketPrices: {
                    general: 250,
                    vip: 1000,
                    earlyBird: 200
                },
                genre: ['R&B', 'Soul', 'Hip-Hop'],
                ageRestriction: '21+',
                website: 'https://essencefest.com',
                recommendationScore: 0.85,
                socialMedia: {
                    twitter: 'https://twitter.com/essencefest',
                    instagram: 'https://instagram.com/essencefest'
                },
                accessibilityFeatures: ['Wheelchair Access', 'Sign Language Interpreters']
            },
            { 
                id: 'day-n-vegas-2023',
                name: 'Day N Vegas', 
                coords: [36.1699, -115.1398], // Las Vegas
                details: 'Hip-Hop and R&B Music Festival',
                date: '2023-09-15',
                endDate: '2023-09-17',
                venue: 'Las Vegas Festival Grounds',
                category: 'Festival',
                artists: ['J. Cole', 'SZA', 'Tyler, The Creator'],
                ticketPrices: {
                    general: 300,
                    vip: 1200,
                    earlyBird: 250
                },
                genre: ['Hip-Hop', 'R&B'],
                ageRestriction: '18+',
                website: 'https://daynvegas.com',
                recommendationScore: 0.9,
                socialMedia: {
                    twitter: 'https://twitter.com/daynvegas',
                    instagram: 'https://instagram.com/daynvegas'
                },
                accessibilityFeatures: ['Wheelchair Access']
            },
            { 
                id: 'a3c-hip-hop-festival-2023',
                name: 'A3C Hip-Hop Festival', 
                coords: [33.7490, -84.3880], // Atlanta
                details: 'Underground Hip-Hop Showcase',
                date: '2023-10-05',
                endDate: '2023-10-07',
                venue: 'Various Venues in Atlanta',
                category: 'Festival',
                artists: ['Killer Mike', 'Run The Jewels', 'Local Underground Artists'],
                ticketPrices: {
                    general: 150,
                    vip: 500,
                    earlyBird: 100
                },
                genre: ['Hip-Hop', 'Underground Rap'],
                ageRestriction: '18+',
                website: 'https://a3cfestival.com',
                recommendationScore: 0.8,
                socialMedia: {
                    twitter: 'https://twitter.com/a3cfestival',
                    instagram: 'https://instagram.com/a3cfestival'
                },
                accessibilityFeatures: ['Wheelchair Access']
            }
        ];

        // Social Sharing Functionality
        const createSocialShareButtons = (event) => {
            const shareUrl = encodeURIComponent(event.website);
            const shareText = encodeURIComponent(`Check out ${event.name} happening on ${new Date(event.date).toLocaleDateString()}!`);

            return `
                <div class="social-share-buttons" aria-label="Share event on social media">
                    <a href="https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}" 
                       target="_blank" 
                       class="share-twitter" 
                       aria-label="Share on Twitter">
                        🐦 Tweet
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" 
                       target="_blank" 
                       class="share-facebook" 
                       aria-label="Share on Facebook">
                        👥 Share
                    </a>
                </div>
            `;
        };

        // Calendar Export Functionality
        const generateICalendar = (event) => {
            const formatDate = (dateString) => {
                const date = new Date(dateString);
                return date.toISOString().replace(/[-:]|\.\d{3}/g, '');
            };

            const icalContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.name}
DESCRIPTION:${event.details}
LOCATION:${event.venue}
DTSTART:${formatDate(event.date)}
DTEND:${formatDate(event.endDate || event.date)}
END:VEVENT
END:VCALENDAR`;

            const blob = new Blob([icalContent], { type: 'text/calendar' });
            return URL.createObjectURL(blob);
        };

        // Price Comparison Feature
        const createPriceComparisonWidget = (event) => {
            const prices = event.ticketPrices;
            return `
                <div class="price-comparison" aria-label="Ticket Price Comparison">
                    <h4>Ticket Prices</h4>
                    <ul>
                        ${Object.entries(prices).map(([type, price]) => `
                            <li>
                                <span class="price-type">${type.charAt(0).toUpperCase() + type.slice(1)}</span>
                                <span class="price-value">$${price}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        };

        // Advanced Filtering
        const createAdvancedFilterControls = (map, markerGroup, events) => {
            const filterContainer = L.control({position: 'topright'});
            
            filterContainer.onAdd = function() {
                const div = L.DomUtil.create('div', 'advanced-filter-container');
                
                div.innerHTML = `
                    <div class="filter-section">
                        <h4>Advanced Filters</h4>
                        
                        <div class="filter-group">
                            <label for="price-range">Price Range ($):</label>
                            <input type="range" id="price-range" 
                                   min="0" max="2000" step="50" 
                                   aria-label="Ticket price range filter">
                            <span id="price-display">$0 - $2000</span>
                        </div>

                        <div class="filter-group">
                            <label for="date-range-start">Start Date:</label>
                            <input type="date" id="date-range-start" 
                                   aria-label="Event start date filter">
                            
                            <label for="date-range-end">End Date:</label>
                            <input type="date" id="date-range-end" 
                                   aria-label="Event end date filter">
                        </div>

                        <div class="filter-group">
                            <label for="accessibility-filter">Accessibility:</label>
                            <select id="accessibility-filter" 
                                    aria-label="Event accessibility filter">
                                <option value="">All Events</option>
                                <option value="wheelchair">Wheelchair Accessible</option>
                                <option value="sign-language">Sign Language Support</option>
                            </select>
                        </div>

                        <div class="filter-group">
                            <label for="artist-search">Artist Search:</label>
                            <input type="text" id="artist-search" 
                                   placeholder="Search artists" 
                                   aria-label="Search events by artist">
                        </div>
                    </div>
                `;
                
                return div;
            };
            
            filterContainer.addTo(map);
            
            // Advanced filter logic
            const priceRangeInput = document.getElementById('price-range');
            const priceDisplay = document.getElementById('price-display');
            const dateRangeStart = document.getElementById('date-range-start');
            const dateRangeEnd = document.getElementById('date-range-end');
            const accessibilityFilter = document.getElementById('accessibility-filter');
            const artistSearch = document.getElementById('artist-search');

            const applyAdvancedFilters = () => {
                const maxPrice = priceRangeInput.value;
                const startDate = dateRangeStart.value;
                const endDate = dateRangeEnd.value;
                const accessibilityOption = accessibilityFilter.value;
                const artistQuery = artistSearch.value.toLowerCase();

                // Update price display
                priceDisplay.textContent = `$0 - $${maxPrice}`;

                // Clear existing markers
                markerGroup.clearLayers();
                
                // Apply advanced filters
                events.forEach(event => {
                    const lowestPrice = Math.min(...Object.values(event.ticketPrices));
                    const matchesPrice = lowestPrice <= maxPrice;
                    
                    const matchesDateRange = (!startDate || new Date(event.date) >= new Date(startDate)) &&
                                             (!endDate || new Date(event.date) <= new Date(endDate));
                    
                    const matchesAccessibility = !accessibilityOption || 
                        event.accessibilityFeatures.some(feature => 
                            accessibilityOption === 'wheelchair' && feature.toLowerCase().includes('wheelchair') ||
                            accessibilityOption === 'sign-language' && feature.toLowerCase().includes('sign language')
                        );
                    
                    const matchesArtist = !artistQuery || 
                        event.artists.some(artist => artist.toLowerCase().includes(artistQuery));

                    if (matchesPrice && matchesDateRange && matchesAccessibility && matchesArtist) {
                        const marker = L.marker(event.coords, { 
                            title: event.name,
                            icon: createCustomIcon(event.category === 'Festival' ? '#FF6B6B' : '#4ECDC4')
                        });

                        marker.bindPopup(createEventPopupContent(event));
                        markerGroup.addLayer(marker);
                    }
                });
            };

            // Add event listeners
            priceRangeInput.addEventListener('input', applyAdvancedFilters);
            dateRangeStart.addEventListener('change', applyAdvancedFilters);
            dateRangeEnd.addEventListener('change', applyAdvancedFilters);
            accessibilityFilter.addEventListener('change', applyAdvancedFilters);
            artistSearch.addEventListener('input', applyAdvancedFilters);

            return applyAdvancedFilters;
        };

        // Update event popup content to include new features
        const createEventPopupContent = (event) => `
            <div class="event-popup" role="dialog" aria-labelledby="event-title">
                <h3 id="event-title">${event.name}</h3>
                <p><strong>Details:</strong> ${event.details}</p>
                <p><strong>Date:</strong> ${new Date(event.date).toLocaleDateString()} 
                    ${event.endDate ? `- ${new Date(event.endDate).toLocaleDateString()}` : ''}</p>
                <p><strong>Venue:</strong> ${event.venue}</p>
                <p><strong>Category:</strong> ${event.category}</p>
                <p><strong>Artists:</strong> ${event.artists.join(', ')}</p>
                
                ${createPriceComparisonWidget(event)}
                
                <p><strong>Genre:</strong> ${event.genre.join(', ')}</p>
                <p><strong>Age Restriction:</strong> ${event.ageRestriction}</p>
                
                <div class="event-actions">
                    <a href="${event.website}" target="_blank" class="btn-tickets" aria-label="Visit Official Website">
                        Official Website
                    </a>
                    
                    <a href="${generateICalendar(event)}" 
                       download="${event.name.replace(/\s+/g, '-')}.ics" 
                       class="btn-calendar" 
                       aria-label="Add to Calendar">
                        📅 Add to Calendar
                    </a>
                </div>

                ${createSocialShareButtons(event)}

                <div class="accessibility-info" aria-label="Accessibility Features">
                    <strong>Accessibility:</strong>
                    <ul>
                        ${event.accessibilityFeatures.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;

        // Geolocation feature
        const addGeolocationControl = (map) => {
            const geolocateControl = L.control({position: 'topleft'});
            
            geolocateControl.onAdd = function() {
                const div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-geolocation');
                div.innerHTML = `
                    <a href="#" title="Find Nearby Events" role="button" aria-label="Locate Me">
                        <i class="fas fa-location-arrow"></i>
                    </a>
                `;
                
                div.onclick = (e) => {
                    e.preventDefault();
                    findNearbyEvents(map);
                };
                
                return div;
            };
            
            geolocateControl.addTo(map);
        };

        // Find nearby events based on user's location
        const findNearbyEvents = (map) => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const userLat = position.coords.latitude;
                    const userLng = position.coords.longitude;

                    // Calculate distances and recommend events
                    const nearbyEvents = eventLocations.map(event => {
                        const distance = calculateDistance(userLat, userLng, event.coords[0], event.coords[1]);
                        return {
                            ...event,
                            distance: distance
                        };
                    })
                    .filter(event => event.distance <= 500) // Within 500 km
                    .sort((a, b) => a.distance - b.distance);

                    // Highlight nearby events
                    updateMapWithNearbyEvents(map, nearbyEvents);

                    // Show recommendation modal
                    showNearbyEventsModal(nearbyEvents);
                }, (error) => {
                    console.error("Geolocation error:", error);
                    alert("Unable to retrieve your location. Please check your settings.");
                });
            } else {
                alert("Geolocation is not supported by your browser.");
            }
        };

        // Calculate distance between two coordinates (Haversine formula)
        const calculateDistance = (lat1, lon1, lat2, lon2) => {
            const R = 6371; // Earth's radius in kilometers
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLon = (lon2 - lon1) * Math.PI / 180;
            const a = 
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            return R * c;
        };

        // Update map with nearby events
        const updateMapWithNearbyEvents = (map, nearbyEvents) => {
            // Clear existing markers
            markerGroup.clearLayers();

            // Add nearby event markers
            nearbyEvents.forEach(event => {
                const marker = L.marker(event.coords, { 
                    title: event.name,
                    icon: createCustomIcon('#FF6B6B') // Highlight color
                });

                marker.bindPopup(`
                    <div class="event-popup nearby-event">
                        <h3>${event.name} (${Math.round(event.distance)} km away)</h3>
                        <p><strong>Distance:</strong> ${event.distance.toFixed(1)} km from you</p>
                        ${createEventPopupContent(event)}
                        <button class="btn-save-event" data-event-id="${event.id}">
                            Save Event
                        </button>
                    </div>
                `);

                markerGroup.addLayer(marker);
            });

            // Fit map to nearby events
            if (nearbyEvents.length > 0) {
                const group = new L.featureGroup(markerGroup.getLayers());
                map.fitBounds(group.getBounds(), {
                    padding: [50, 50]
                });
            }
        };

        // Save favorite events to local storage
        const initializeFavoriteEvents = () => {
            const savedEvents = JSON.parse(localStorage.getItem('favoriteEvents') || '[]');
            
            // Add event listeners to save buttons
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('btn-save-event')) {
                    const eventId = e.target.getAttribute('data-event-id');
                    const event = eventLocations.find(ev => ev.id === eventId);
                    
                    if (event && !savedEvents.some(saved => saved.id === eventId)) {
                        savedEvents.push(event);
                        localStorage.setItem('favoriteEvents', JSON.stringify(savedEvents));
                        alert(`Event "${event.name}" saved to favorites!`);
                    } else {
                        alert('Event already saved or not found.');
                    }
                }
            });

            return savedEvents;
        };

        // Show nearby events modal
        const showNearbyEventsModal = (nearbyEvents) => {
            const modalContainer = document.createElement('div');
            modalContainer.className = 'nearby-events-modal';
            modalContainer.innerHTML = `
                <div class="modal-content">
                    <h2>Nearby Hip-Hop Events</h2>
                    ${nearbyEvents.length > 0 ? `
                        <ul>
                            ${nearbyEvents.map(event => `
                                <li>
                                    <strong>${event.name}</strong>
                                    <span>${Math.round(event.distance)} km away</span>
                                    <button class="btn-save-event" data-event-id="${event.id}">
                                        Save Event
                                    </button>
                                </li>
                            `).join('')}
                        </ul>
                    ` : '<p>No nearby events found.</p>'}
                    <button class="modal-close">Close</button>
                </div>
            `;

            document.body.appendChild(modalContainer);

            // Close modal functionality
            modalContainer.querySelector('.modal-close').addEventListener('click', () => {
                document.body.removeChild(modalContainer);
            });
        };

        // Event recommendation system
        const recommendEvents = (savedEvents) => {
            // Simple recommendation based on saved events' genres
            const genrePreferences = savedEvents.reduce((acc, event) => {
                event.genre.forEach(genre => {
                    acc[genre] = (acc[genre] || 0) + 1;
                });
                return acc;
            }, {});

            const topGenres = Object.entries(genrePreferences)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 2)
                .map(entry => entry[0]);

            const recommendedEvents = eventLocations
                .filter(event => 
                    event.recommendationScore > 0.7 && 
                    event.genre.some(genre => topGenres.includes(genre))
                )
                .slice(0, 3);

            return recommendedEvents;
        };

        // Performance optimization: Lazy loading of events
        const lazyLoadEvents = (map, events, markerGroup) => {
            const loadEventsInView = () => {
                const bounds = map.getBounds();
                
                events.forEach(event => {
                    if (bounds.contains(event.coords)) {
                        const marker = L.marker(event.coords, { 
                            title: event.name,
                            icon: createCustomIcon(event.category === 'Festival' ? '#FF6B6B' : '#4ECDC4')
                        });

                        marker.bindPopup(createEventPopupContent(event));
                        markerGroup.addLayer(marker);
                    }
                });
            };

            map.on('moveend', loadEventsInView);
            loadEventsInView(); // Initial load
        };

        // Helper function to create event popup content
        const createCustomIcon = (color) => {
            return L.divIcon({
                className: 'custom-map-marker',
                html: `
                    <div style="
                        width: 30px; 
                        height: 30px; 
                        border-radius: 50%; 
                        background-color: ${color}; 
                        border: 2px solid white; 
                        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                    "></div>
                `,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });
        };

        // Add filter controls to the map
        const createFilterControls = (map, markerGroup, events) => {
            // Create filter container
            const filterContainer = L.control({position: 'topright'});
            
            filterContainer.onAdd = function() {
                const div = L.DomUtil.create('div', 'event-filter-container');
                
                div.innerHTML = `
                    <div class="filter-section">
                        <h4>Filter Events</h4>
                        <select id="category-filter">
                            <option value="">All Categories</option>
                            <option value="Festival">Festivals</option>
                            <option value="Concert">Concerts</option>
                        </select>
                        
                        <select id="genre-filter">
                            <option value="">All Genres</option>
                            <option value="Hip-Hop">Hip-Hop</option>
                            <option value="R&B">R&B</option>
                            <option value="Soul">Soul</option>
                            <option value="Rap">Rap</option>
                        </select>

                        <input type="date" id="date-filter" placeholder="Select Date">

                        <input type="text" id="search-filter" placeholder="Search Events">
                    </div>
                `;
                
                return div;
            };
            
            filterContainer.addTo(map);
            
            // Filter logic
            const categoryFilter = document.getElementById('category-filter');
            const genreFilter = document.getElementById('genre-filter');
            const dateFilter = document.getElementById('date-filter');
            const searchFilter = document.getElementById('search-filter');
            
            const applyFilters = () => {
                const selectedCategory = categoryFilter.value;
                const selectedGenre = genreFilter.value;
                const selectedDate = dateFilter.value;
                const searchTerm = searchFilter.value.toLowerCase();
                
                // Clear existing markers
                markerGroup.clearLayers();
                
                // Reapply filtered markers
                events.forEach(event => {
                    const matchesCategory = !selectedCategory || event.category === selectedCategory;
                    const matchesGenre = !selectedGenre || event.genre.includes(selectedGenre);
                    const matchesDate = !selectedDate || event.date === selectedDate;
                    const matchesSearch = !searchTerm || 
                        event.name.toLowerCase().includes(searchTerm) || 
                        event.details.toLowerCase().includes(searchTerm) ||
                        event.artists.some(artist => artist.toLowerCase().includes(searchTerm));
                    
                    if (matchesCategory && matchesGenre && matchesDate && matchesSearch) {
                        const markerColor = event.category === 'Festival' ? '#FF6B6B' : '#4ECDC4';
                        const marker = L.marker(event.coords, { 
                            title: event.name,
                            icon: createCustomIcon(markerColor)
                        });

                        marker.bindPopup(`
                            <div class="event-popup">
                                <h3>${event.name}</h3>
                                <p><strong>Details:</strong> ${event.details}</p>
                                <p><strong>Date:</strong> ${new Date(event.date).toLocaleDateString()}</p>
                                <p><strong>Venue:</strong> ${event.venue}</p>
                                <p><strong>Category:</strong> ${event.category}</p>
                                <p><strong>Artists:</strong> ${event.artists.join(', ')}</p>
                                <p><strong>Ticket Price:</strong> ${event.ticketPrice}</p>
                                <p><strong>Genre:</strong> ${event.genre.join(', ')}</p>
                                <p><strong>Age Restriction:</strong> ${event.ageRestriction}</p>
                                <a href="${event.website}" target="_blank" class="btn-tickets">Official Website</a>
                            </div>
                        `);

                        markerGroup.addLayer(marker);
                    }
                });

                // Update results count
                const resultCount = markerGroup.getLayers().length;
                const resultsInfo = document.getElementById('results-info');
                if (resultsInfo) {
                    resultsInfo.textContent = `${resultCount} event${resultCount !== 1 ? 's' : ''} found`;
                }
            };
            
            // Add event listeners
            categoryFilter.addEventListener('change', applyFilters);
            genreFilter.addEventListener('change', applyFilters);
            dateFilter.addEventListener('change', applyFilters);
            searchFilter.addEventListener('input', applyFilters);
            
            return applyFilters;
        };

        // Create marker cluster group
        const markerGroup = L.markerClusterGroup({
            maxClusterRadius: 50,
            spiderfyOnMaxZoom: true
        });

        // Initialize saved events and recommendations
        const savedEvents = initializeFavoriteEvents();
        const recommendedEvents = recommendEvents(savedEvents);

        // Add geolocation control
        addGeolocationControl(map);

        // Lazy load events
        lazyLoadEvents(map, eventLocations, markerGroup);

        // Add marker cluster group to the map
        map.addLayer(markerGroup);

        // Add advanced filter controls
        const applyAdvancedFilters = createAdvancedFilterControls(map, markerGroup, eventLocations);
        
        // Initial filter application
        applyAdvancedFilters();

        // Add results info container
        const resultsInfoContainer = L.control({position: 'bottomleft'});
        resultsInfoContainer.onAdd = function() {
            const div = L.DomUtil.create('div', 'results-info-container');
            div.innerHTML = `<div id="results-info">${eventLocations.length} events found</div>`;
            return div;
        };
        resultsInfoContainer.addTo(map);

        // Add scale control
        L.control.scale().addTo(map);

        // Event Analytics and Machine Learning Module
        class EventAnalytics {
            constructor(events) {
                this.events = events;
                this.userInteractions = JSON.parse(localStorage.getItem('eventInteractions') || '{}');
            }

            // Track user interactions with events
            trackEventInteraction(eventId, interactionType) {
                if (!this.userInteractions[eventId]) {
                    this.userInteractions[eventId] = { views: 0, saves: 0, shares: 0 };
                }
                this.userInteractions[eventId][interactionType]++;
                
                localStorage.setItem('eventInteractions', JSON.stringify(this.userInteractions));
            }

            // Generate event popularity score
            calculatePopularityScore(event) {
                const interactions = this.userInteractions[event.id] || { views: 0, saves: 0, shares: 0 };
                const baseScore = event.recommendationScore || 0.5;
                
                // Machine learning-inspired scoring
                const popularityMultiplier = 1 + 
                    (interactions.views * 0.01) + 
                    (interactions.saves * 0.05) + 
                    (interactions.shares * 0.1);
                
                return Math.min(baseScore * popularityMultiplier, 1);
            }

            // Generate event trend visualization
            generateEventTrends() {
                const trendData = this.events.map(event => ({
                    name: event.name,
                    popularity: this.calculatePopularityScore(event),
                    genre: event.genre[0],
                    date: new Date(event.date).getMonth()
                }));

                return trendData.sort((a, b) => b.popularity - a.popularity);
            }

            // Recommendation engine
            recommendEvents(savedEvents, userPreferences = {}) {
                const genrePreferences = savedEvents.reduce((acc, event) => {
                    event.genre.forEach(genre => {
                        acc[genre] = (acc[genre] || 0) + 1;
                    });
                    return acc;
                }, {});

                const topGenres = Object.entries(genrePreferences)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 2)
                    .map(entry => entry[0]);

                return this.events
                    .filter(event => 
                        event.recommendationScore > 0.7 && 
                        event.genre.some(genre => topGenres.includes(genre))
                    )
                    .map(event => ({
                        ...event,
                        personalizedScore: this.calculatePopularityScore(event)
                    }))
                    .sort((a, b) => b.personalizedScore - a.personalizedScore)
                    .slice(0, 5);
            }
        }

        // Real-time Event Update Service
        class EventUpdateService {
            constructor(events) {
                this.events = events;
                this.updateInterval = null;
                this.listeners = [];
            }

            // Simulate real-time event updates
            startRealTimeUpdates() {
                this.updateInterval = setInterval(() => {
                    const updatedEvents = this.simulateEventUpdates();
                    this.notifyListeners(updatedEvents);
                }, 60000); // Every minute
            }

            stopRealTimeUpdates() {
                if (this.updateInterval) {
                    clearInterval(this.updateInterval);
                }
            }

            // Simulate dynamic event changes
            simulateEventUpdates() {
                return this.events.map(event => {
                    // Simulate ticket availability changes
                    const availableTickets = Math.floor(Math.random() * 1000);
                    const soldOut = availableTickets < 50;

                    return {
                        ...event,
                        availableTickets,
                        soldOut,
                        lastUpdated: new Date().toISOString()
                    };
                });
            }

            addUpdateListener(callback) {
                this.listeners.push(callback);
            }

            notifyListeners(updatedEvents) {
                this.listeners.forEach(listener => listener(updatedEvents));
            }
        }

        // Enhanced Event Heat Map Layer
        class EventHeatMapLayer {
            constructor(map, events) {
                this.map = map;
                this.events = events;
                this.heatLayer = null;
            }

            createHeatMap() {
                // Ensure Leaflet.heat is available
                if (typeof L.heatLayer === 'undefined') {
                    console.error('Leaflet.heat library not loaded');
                    return null;
                }

                // Generate heat map points with intensity based on event popularity
                const heatPoints = this.events.map(event => {
                    const [lat, lng] = event.coords;
                    const intensity = event.recommendationScore || 0.5;
                    return [lat, lng, intensity];
                });

                this.heatLayer = L.heatLayer(heatPoints, {
                    radius: 25,
                    blur: 15,
                    maxZoom: 5,
                    gradient: {
                        0.4: 'blue',
                        0.65: 'lime',
                        0.8: 'yellow',
                        1: 'red'
                    }
                });

                return this.heatLayer;
            }

            addToMap() {
                if (this.heatLayer) {
                    this.heatLayer.addTo(this.map);
                }
            }

            removeFromMap() {
                if (this.heatLayer && this.map.hasLayer(this.heatLayer)) {
                    this.map.removeLayer(this.heatLayer);
                }
            }
        }

        // Initialize Event Analytics
        const eventAnalytics = new EventAnalytics(eventLocations);

        // Initialize Real-time Event Update Service
        const eventUpdateService = new EventUpdateService(eventLocations);

        // Add real-time update listener
        eventUpdateService.addUpdateListener((updatedEvents) => {
            // Update markers or show notification
            updatedEvents.forEach(event => {
                const marker = markerGroup.getLayers().find(m => 
                    m.options.title === event.name
                );

                if (marker) {
                    marker.bindPopup(createEventPopupContent(event));
                    
                    // Visual indication of ticket availability
                    if (event.soldOut) {
                        marker.setIcon(createCustomIcon('#FF4136')); // Red for sold out
                    }
                }
            });
        });

        // Start real-time updates
        eventUpdateService.startRealTimeUpdates();

        // Create Event Heat Map Layer
        const eventHeatMapLayer = new EventHeatMapLayer(map, eventLocations);
        
        // Add heat map toggle control
        const heatMapControl = L.control({position: 'topleft'});
        
        heatMapControl.onAdd = function() {
            const div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-heatmap');
            div.innerHTML = `
                <a href="#" title="Toggle Heat Map" role="button" aria-label="Toggle Event Heat Map">
                    🌡️
                </a>
            `;
            
            let heatMapActive = false;
            div.onclick = (e) => {
                e.preventDefault();
                if (heatMapActive) {
                    eventHeatMapLayer.removeFromMap();
                    heatMapActive = false;
                } else {
                    const heatLayer = eventHeatMapLayer.createHeatMap();
                    if (heatLayer) {
                        eventHeatMapLayer.addToMap();
                        heatMapActive = true;
                    }
                }
            };
            
            return div;
        };
        
        heatMapControl.addTo(map);

        // Visualize Event Trends
        const eventTrends = eventAnalytics.generateEventTrends();
        console.log('Event Trends:', eventTrends);

        // Modify existing event interaction tracking
        const trackEventInteraction = (eventId, interactionType) => {
            const eventAnalytics = new EventAnalytics(eventLocations);
            eventAnalytics.trackEventInteraction(eventId, interactionType);
        };

        // Add interaction tracking to existing functions
        // For example, in createEventPopupContent, add tracking calls
        const createEventPopupContent = (event) => {
            // Trigger view tracking
            trackEventInteraction(event.id, 'views');

            // Existing popup content generation...
            return `
                <div class="event-popup" role="dialog" aria-labelledby="event-title">
                    <!-- Existing content -->
                    <div class="event-actions">
                        <a href="#" class="btn-share" onclick="trackEventInteraction('${event.id}', 'shares')">
                            Share Event
                        </a>
                        <a href="#" class="btn-save" onclick="trackEventInteraction('${event.id}', 'saves')">
                            Save Event
                        </a>
                    </div>
                </div>
            `;
        };

    } catch (error) {
        console.error('Error initializing map:', error);
        mapContainer.innerHTML = `
            <div class="map-error">
                <h3>Oops! Something went wrong</h3>
                <p>Unable to load the events map. Please try again later.</p>
            </div>
        `;
    }
};

// Run the map initialization when the DOM is ready
document.addEventListener('DOMContentLoaded', initializeMap);