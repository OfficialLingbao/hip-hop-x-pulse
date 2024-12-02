// Artist data
const artists = [
    {
        id: 'jayZ',
        name: "Jay-Z",
        image: "https://people.com/thmb/OIEyYnrFY0hvzeYaYbjBjFb_-oA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(704x369:706x371):format(webp)/jay-z-edf6090ede3c4547a47da0cf9c633778.jpg",
        category: "legendary",
        followers: "35M",
        albums: 13,
        description: "Hip-hop icon and business mogul with multiple Grammy awards and groundbreaking achievements in music and entrepreneurship.",
        instagram: "https://www.instagram.com/allthingsjayz/"
    },
    {
        id: 'kendrickLamar',
        name: "Kendrick Lamar",
        image: "https://i.scdn.co/image/ab6761610000e5eb437b9e2a82505b3d93ff1022",
        category: "legendary",
        followers: "25M",
        albums: 5,
        description: "Pulitzer Prize-winning rapper known for his intricate lyricism and powerful storytelling.",
        instagram: "https://www.instagram.com/kendricklamar/"
    },
    {
        id: 'drake',
        name: "Drake",
        image: "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9",
        category: "trending",
        followers: "50M",
        albums: 7,
        description: "Chart-topping artist known for his versatile style and influential sound.",
        instagram: "https://www.instagram.com/champagnepapi/"
    },
    {
        id: 'jCole',
        name: "J. Cole",
        image: "https://hips.hearstapps.com/hmg-prod/images/j_cole_photo_by_isaac_brekken_wireimage_getty_503069628.jpg?resize=1200:*",
        category: "legendary",
        followers: "18M",
        albums: 6,
        description: "Thoughtful lyricist and producer known for his conscious rap style.",
        instagram: "https://www.instagram.com/realcoleworld/"
    },
    {
        id: 'meganTheeStallion',
        name: "Megan Thee Stallion",
        image: "https://static01.nyt.com/images/2020/03/15/magazine/15mag-megantheestallion-03/15mag-megantheestallion-03-superJumbo-v3.jpg",
        category: "trending",
        followers: "12M",
        albums: 2,
        description: "Grammy-winning rapper known for her confident delivery and powerful presence.",
        instagram: "https://www.instagram.com/theestallion/"
    },
    {
        id: 'tylerTheCreator',
        name: "Tyler, The Creator",
        image: "https://i.scdn.co/image/ab6761610000e5eb8278b782cbb5a3963db88ada",
        category: "legendary",
        followers: "15M",
        albums: 7,
        description: "Multi-talented artist known for his innovative production and unique style.",
        instagram: "https://www.deezer.com/us/artist/1194083"
    },
    {
        id: 'iceSpice',
        name: "Ice Spice",
        image: "https://thatgrapejuice.net/wp-content/uploads/2023/07/ice-spice-spotify-3-600x900.jpg",
        category: "new",
        followers: "8M",
        albums: 1,
        description: "Rising star making waves with her distinctive New York drill sound.",
        instagram: "https://www.instagram.com/icespice/"
    },
    {
        id: 'glorilla',
        name: "GloRilla",
        image: "https://preview.redd.it/thoughts-on-glorilla-v0-s0ppi57jru1a1.png?auto=webp&s=04e8459b8a7da328a033294551759528843f3ad5",
        category: "new",
        followers: "5M",
        albums: 1,
        description: "Memphis rapper known for her energetic performances and breakthrough hits.",
        instagram: "https://www.instagram.com/glorillapimp/?hl=en"
    },
    {
        id: 'doechii',
        name: "Doechii",
        image: "https://www.vibe.com/wp-content/uploads/2022/03/Doechii-e1646333425410.jpeg?w=910&h=511&crop=1&resize=1024%2C576",
        category: "new",
        followers: "3M",
        albums: 1,
        description: "TDE's dynamic artist blending rap, R&B, and experimental sounds with captivating performances.",
        instagram: "https://www.instagram.com/doechii/"
    },
    {
        id: 'xg',
        name: 'XG',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2a/df/2e/2adf2e56-a30a-d7a8-6a3a-d72e3c47e8e7/ANTCD-A0000010570.jpg/316x316bb.webp',
        description: 'XG (エックスジー) is a seven-member Japanese girl group formed by XGALX. The group consists of Jurin, Chisa, Harvey, Hinata, Juria, Maya, and Cocona.',
        followers: '1.2M',
        monthlyListeners: '892K',
        topTracks: ['GRL GVNG', 'WOKE UP', 'LEFT RIGHT', 'SHOOTING STAR'],
        instagram: "https://www.instagram.com/xgofficial/"
    }
];

// Function to create an artist card
function createArtistCard(artist) {
    const profileLink = artist.instagram || `artist-profile.html?id=${artist.id}`;
    const opensInNewTab = artist.instagram ? true : false;
    
    return `
        <div class="artist-card ${artist.category}" data-category="${artist.category}">
            <div class="artist-image">
                <img src="${artist.image}" alt="${artist.name}" 
                     onerror="this.onerror=null; this.src='https://via.placeholder.com/400x400/000000/FFFFFF?text=${encodeURIComponent(artist.name)}';">
                <div class="artist-overlay">
                    <button class="follow-btn">
                        <i class="fas fa-plus"></i> Follow
                    </button>
                </div>
            </div>
            <div class="artist-info">
                <h3>${artist.name}</h3>
                <p class="artist-stats">
                    <span><i class="fas fa-users"></i> ${artist.followers}</span>
                    <span><i class="fas fa-compact-disc"></i> ${artist.albums} Albums</span>
                </p>
                <p class="artist-description">${artist.description}</p>
                <div class="artist-actions">
                    <a href="${profileLink}" class="action-btn profile-btn" target="${opensInNewTab ? '_blank' : '_self'}">
                        <i class="fas fa-user"></i> Profile
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Function to filter artists
function filterArtists(category) {
    const cards = document.querySelectorAll('.artist-card');
    
    cards.forEach(card => {
        const cardCategory = card.dataset.category;
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Function to handle search
function handleSearch(searchTerm) {
    const cards = document.querySelectorAll('.artist-card');
    searchTerm = searchTerm.toLowerCase();
    
    cards.forEach(card => {
        const artistName = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('.artist-description').textContent.toLowerCase();
        
        if (artistName.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    const artistsGrid = document.getElementById('artistsGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.querySelector('.search-bar input');
    
    // Create and append artist cards
    artists.forEach(artist => {
        artistsGrid.insertAdjacentHTML('beforeend', createArtistCard(artist));
    });
    
    // Setup filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterArtists(button.dataset.filter);
        });
    });
    
    // Setup search functionality
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            handleSearch(e.target.value);
        }, 300);
    });
    
    // Setup follow buttons
    document.querySelectorAll('.follow-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const isFollowing = button.classList.contains('following');
            if (isFollowing) {
                button.innerHTML = '<i class="fas fa-plus"></i> Follow';
                button.classList.remove('following');
            } else {
                button.innerHTML = '<i class="fas fa-check"></i> Following';
                button.classList.add('following');
            }
        });
    });
});
