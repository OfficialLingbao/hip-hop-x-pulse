// Sample artist data (replace with real data from your backend)
const artistData = {
    kendrickLamar: {
        name: "Kendrick Lamar",
        coverImage: "https://i.scdn.co/image/ab6761610000e5eb437b9e2a82505b3d93ff1022",
        profileImage: "https://i.scdn.co/image/ab6761610000e5eb437b9e2a82505b3d93ff1022",
        followers: "15.2M",
        albums: "5",
        bio: `Kendrick Lamar Duckworth is an American rapper, songwriter, and record producer. He is often cited as one of the most influential rappers of his generation. Aside from his solo career, he is also a member of the hip hop supergroup Black Hippy. Born and raised in Compton, California, Lamar embarked on his musical career as a teenager under the stage name K-Dot.`,
        awards: [
            "14 Grammy Awards",
            "Pulitzer Prize for Music",
            "2 American Music Awards"
        ],
        achievements: [
            "First rapper to win Pulitzer Prize",
            "Over 70M records sold",
            "Multiple #1 albums"
        ],
        latestRelease: {
            title: "Mr. Morale & the Big Steppers",
            date: "May 13, 2022"
        },
        topTracks: [
            { number: 1, title: "HUMBLE.", duration: "2:57" },
            { number: 2, title: "Alright", duration: "3:39" },
            { number: 3, title: "DNA.", duration: "3:05" },
            { number: 4, title: "N95", duration: "3:15" },
            { number: 5, title: "Money Trees", duration: "6:26" }
        ],
        albums: [
            {
                title: "Mr. Morale & the Big Steppers",
                year: "2022",
                image: "https://i.scdn.co/image/ab67616d0000b273f9e34e94c9f7c8d82d58f05b"
            },
            {
                title: "DAMN.",
                year: "2017",
                image: "https://i.scdn.co/image/ab67616d0000b273d28d2ebdedb220e479743797"
            },
            {
                title: "To Pimp a Butterfly",
                year: "2015",
                image: "https://i.scdn.co/image/ab67616d0000b273cdb645498cd3d8a2db4d05e1"
            }
        ],
        videos: [
            {
                title: "HUMBLE.",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273d28d2ebdedb220e479743797",
                views: "1.2B"
            },
            {
                title: "N95",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273f9e34e94c9f7c8d82d58f05b",
                views: "89M"
            }
        ],
        news: [
            {
                title: "Kendrick Lamar's Latest Album Breaks Streaming Records",
                date: "2022-05-14",
                source: "Hip-Hop News"
            },
            {
                title: "Kendrick Lamar Announces World Tour",
                date: "2022-05-13",
                source: "Music News"
            }
        ],
        events: [
            {
                date: "2024-06-15",
                venue: "Madison Square Garden",
                location: "New York, NY",
                status: "On Sale"
            },
            {
                date: "2024-06-18",
                venue: "TD Garden",
                location: "Boston, MA",
                status: "Sold Out"
            }
        ]
    }
    // Add more artists
};

// Get artist ID from URL parameter (you'll need to implement this)
const artistId = 'kendrickLamar'; // For demo purposes
const artist = artistData[artistId];

// Set page title
document.title = `${artist.name} - Hip-Hop Pulse`;

// Populate header section
document.querySelector('.artist-cover').style.backgroundImage = `url(${artist.coverImage})`;
document.querySelector('.artist-avatar').innerHTML = `<img src="${artist.profileImage}" alt="${artist.name}">`;
document.querySelector('.artist-title h1').textContent = artist.name;
document.querySelector('.followers').textContent = artist.followers;
document.querySelector('.albums').textContent = artist.albums;

// Populate biography
document.querySelector('.bio-content').textContent = artist.bio;

// Populate quick stats
const awardsContent = document.querySelector('.stat-card:nth-child(1) .stat-content');
awardsContent.innerHTML = artist.awards.map(award => `<p>${award}</p>`).join('');

const achievementsContent = document.querySelector('.stat-card:nth-child(2) .stat-content');
achievementsContent.innerHTML = artist.achievements.map(achievement => `<p>${achievement}</p>`).join('');

const latestReleaseContent = document.querySelector('.stat-card:nth-child(3) .stat-content');
latestReleaseContent.innerHTML = `
    <p>${artist.latestRelease.title}</p>
    <p class="text-muted">${artist.latestRelease.date}</p>
`;

// Populate track list
const trackList = document.querySelector('.track-list');
trackList.innerHTML = artist.topTracks.map(track => `
    <div class="track-item">
        <span class="track-number">${track.number}</span>
        <div class="track-info">
            <div class="track-title">${track.title}</div>
            <div class="track-duration">${track.duration}</div>
        </div>
        <button class="play-btn"><i class="fas fa-play"></i></button>
    </div>
`).join('');

// Populate albums
const albumGrid = document.querySelector('.album-grid');
albumGrid.innerHTML = artist.albums.map(album => `
    <div class="album-card">
        <img src="${album.image}" alt="${album.title}">
        <h3>${album.title}</h3>
        <p>${album.year}</p>
    </div>
`).join('');

// Populate videos
const videosContainer = document.querySelector('.videos-container');
videosContainer.innerHTML = artist.videos.map(video => `
    <div class="video-card">
        <div class="video-thumbnail">
            <img src="${video.thumbnail}" alt="${video.title}">
            <div class="video-overlay">
                <i class="fas fa-play"></i>
            </div>
        </div>
        <h3>${video.title}</h3>
        <p>${video.views} views</p>
    </div>
`).join('');

// Populate news
const newsGrid = document.querySelector('.news-grid');
newsGrid.innerHTML = artist.news.map(item => `
    <div class="news-card">
        <h3>${item.title}</h3>
        <p>${item.date}</p>
        <p>Source: ${item.source}</p>
    </div>
`).join('');

// Populate events
const eventsList = document.querySelector('.events-list');
eventsList.innerHTML = artist.events.map(event => `
    <div class="event-card">
        <div class="event-date">${event.date}</div>
        <div class="event-details">
            <h3>${event.venue}</h3>
            <p>${event.location}</p>
        </div>
        <div class="event-status">${event.status}</div>
    </div>
`).join('');

// Handle navigation
const navButtons = document.querySelectorAll('.nav-btn');
const contentSections = document.querySelectorAll('.content-section');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetSection = button.dataset.section;
        
        // Update active button
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Show target section
        contentSections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetSection) {
                section.classList.add('active');
            }
        });
    });
});

// Handle follow button
const followBtn = document.querySelector('.follow-btn');
followBtn.addEventListener('click', () => {
    const isFollowing = followBtn.classList.contains('following');
    if (isFollowing) {
        followBtn.innerHTML = '<i class="fas fa-plus"></i> Follow';
        followBtn.classList.remove('following');
    } else {
        followBtn.innerHTML = '<i class="fas fa-check"></i> Following';
        followBtn.classList.add('following');
    }
});
