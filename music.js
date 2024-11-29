// Music data
const featuredAlbums = [
    {
        id: 'cowboyCarter',
        title: "COWBOY CARTER",
        artist: "Beyoncé",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/bd/f6/83/bdf683a5-28de-08cb-cb91-2940c1e6270b/196871853729.jpg/316x316bb.webp",
        releaseDate: "March 29, 2024",
        tracks: 16,
        embedUrl: "https://embed.music.apple.com/us/album/cowboy-carter/1738363766"
    },
    {
        id: 'publicDisplays',
        title: "Public Displays Of Affection: The Album",
        artist: "Muni Long",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/20/82/43/208243e5-4c2b-e2bb-eb21-8020f480f793/22UMGIM94909.rgb.jpg/316x316bb.webp",
        releaseDate: "September 23, 2022",
        tracks: 18,
        embedUrl: "https://embed.music.apple.com/us/album/public-displays-of-affection-the-album/1645149934"
    },
    {
        id: 'whatIDidnt',
        title: "What I Didn't Tell You (Deluxe)",
        artist: "Coco Jones",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/15/b3/68/15b36841-0514-b3bc-a212-f93949aad81a/Joba6a83a38-04fb-45aa-9146-e7710c39d261-145965714-PreviewImage_Preview_Image_Intermediate_nonvideo_272124725_1370508977-Time1677776126532.png/316x316bb.webp",
        releaseDate: "January 13, 2023",
        tracks: 11,
        embedUrl: "https://embed.music.apple.com/us/album/what-i-didnt-tell-you-deluxe/1663412731"
    },
    {
        id: 'utopia',
        title: "UTOPIA",
        artist: "Travis Scott",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/2b/cb/c5/2bcbc5fb-590a-a991-00a9-23e09da46860/Jobcca42104-faad-4d2d-8766-c7cafe52cdf0-153498700-PreviewImage_preview_image_nonvideo_sdr-Time1690571006394.png/316x316bb.webp",
        releaseDate: "July 28, 2023",
        tracks: 19,
        embedUrl: "https://embed.music.apple.com/us/album/utopia/1699712635"
    },
    {
        id: 'forAllTheDogs',
        title: "For All The Dogs",
        artist: "Drake",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/21/50/ee/2150ee84-62c3-4190-7dfa-da30abd98ac8/23UM1IM09862.rgb.jpg/316x316bb.webp",
        releaseDate: "October 6, 2023",
        tracks: 23,
        embedUrl: "https://embed.music.apple.com/us/album/for-all-the-dogs/1710685602"
    },
    {
        id: 'pinkFriday2',
        title: "Pink Friday 2",
        artist: "Nicki Minaj",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/aa/a6/62/aaa662ec-5ac8-fac2-0bd9-ecce09791cf3/Jobc92984b2-c966-4555-b3fa-1ae96f417c7e-159745479-PreviewImage_preview_image_nonvideo_sdr-Time1702009355861.png/316x316bb.webp",
        releaseDate: "December 8, 2023",
        tracks: 22,
        embedUrl: "https://embed.music.apple.com/us/album/pink-friday-2/1720307257"
    }
];

const newReleases = [
    {
        id: 'sundown',
        title: "Sundown in Sapphire City",
        artist: "Victoria Monét",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/53/96/89/539689d0-c414-a2f7-1894-c8dd66de9e96/24UMGIM05735.rgb.jpg/316x316bb.webp",
        releaseDate: "March 8, 2024",
        tracks: 11,
        embedUrl: "https://embed.music.apple.com/us/album/sundown-in-sapphire-city/1729813544"
    },
    {
        id: 'selfMadeVol1',
        title: "Self Made Vol. 1",
        artist: "Sexyy Red",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/af/a7/73/afa773c2-160f-14d9-9dfd-d43019ef0e11/24UMGIM09054.rgb.jpg/316x316bb.webp",
        releaseDate: "March 1, 2024",
        tracks: 12,
        embedUrl: "https://embed.music.apple.com/us/album/self-made-vol-1/1731686121"
    },
    {
        id: 'sweetnsour',
        title: "Sweet 'N Sour",
        artist: "Flo Milli",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c7/c8/4d/c7c84d3b-02a8-7c78-9041-8d89e7fb0245/24UMGIM03565.rgb.jpg/316x316bb.webp",
        releaseDate: "March 1, 2024",
        tracks: 13,
        embedUrl: "https://embed.music.apple.com/us/album/sweet-n-sour/1728726485"
    },
    {
        id: 'scaredOfLove',
        title: "Scared of Love",
        artist: "Tyla",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/bc/5a/f0/bc5af06d-9fa4-8cef-8f94-7d4c3138e7f7/24UMGIM03170.rgb.jpg/316x316bb.webp",
        releaseDate: "March 1, 2024",
        tracks: 14,
        embedUrl: "https://embed.music.apple.com/us/album/scared-of-love/1728383868"
    },
    {
        id: 'iWasAlmostThere',
        title: "I Was Almost There",
        artist: "Yeat",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/32/3b/1d/323b1d83-7f4d-3cbd-53b4-a487cca1c1c4/24UMGIM14643.rgb.jpg/316x316bb.webp",
        releaseDate: "February 23, 2024",
        tracks: 22,
        embedUrl: "https://embed.music.apple.com/us/album/i-was-almost-there/1731129130"
    },
    {
        id: 'prettyGirlz',
        title: "Pretty Girlz",
        artist: "Lakeyah",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/85/04/af/8504af20-a887-c9a3-6e87-f2ea5c2ba807/24UMGIM06560.rgb.jpg/316x316bb.webp",
        releaseDate: "February 23, 2024",
        tracks: 14,
        embedUrl: "https://embed.music.apple.com/us/album/pretty-girlz/1729976561"
    },
    {
        id: 'houstonChild',
        title: "HOUSTON CHILD",
        artist: "Don Toliver",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d5/1c/f3/d51cf37b-84bf-3aa6-c4e4-5ae956e95507/24UMGIM03094.rgb.jpg/316x316bb.webp",
        releaseDate: "February 23, 2024",
        tracks: 15,
        embedUrl: "https://embed.music.apple.com/us/album/houston-child/1728383493"
    },
    {
        id: 'onlyFans',
        title: "Only Fans",
        artist: "Kali",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/f8/d4/be/f8d4be8d-1626-138c-c945-cb0e3f9f2d89/24UMGIM03093.rgb.jpg/316x316bb.webp",
        releaseDate: "February 23, 2024",
        tracks: 12,
        embedUrl: "https://embed.music.apple.com/us/album/only-fans/1728383492"
    },
    {
        id: 'lifeAfterDeath',
        title: "Life After Death",
        artist: "Fridayy",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d5/f2/7c/d5f27c4f-5337-7d8b-9440-edcbf3d4c5c7/24UMGIM06553.rgb.jpg/316x316bb.webp",
        releaseDate: "February 23, 2024",
        tracks: 14,
        embedUrl: "https://embed.music.apple.com/us/album/life-after-death/1729975921"
    },
    {
        id: 'winterWithoutYou',
        title: "WINTER WITHOUT YOU",
        artist: "XG",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/9c/d3/c1/9cd3c1f9-a41c-c244-a3a4-4b3caa6bc46d/196922654640_Cover.jpg/316x316bb.webp",
        releaseDate: "January 24, 2024",
        tracks: 1,
        embedUrl: "https://embed.music.apple.com/us/album/winter-without-you/1726616575"
    },
    {
        id: 'searching',
        title: "Searching for Love in Digital Spaces",
        artist: "Doechii",
        image: "https://images.genius.com/a7d02b97f7d5e36e9e0c0b22a5e0ce2e.1000x1000x1.jpg",
        releaseDate: "January 19, 2024",
        tracks: 8,
        embedUrl: ""
    },
    {
        id: 'houstonChild',
        title: "HOUSTON CHILD",
        artist: "Beyoncé",
        image: "https://upload.wikimedia.org/wikipedia/en/2/29/Beyonc%C3%A9_-_Cowboy_Carter.png",
        releaseDate: "March 29, 2024",
        tracks: 16,
        embedUrl: ""
    }
];

const trendingTracks = [
    {
        id: 'grlGvng',
        title: "GRL GVNG",
        artist: "XG",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2a/df/2e/2adf2e56-a30a-d7a8-6a3a-d72e3c47e8e7/ANTCD-A0000010570.jpg/316x316bb.webp",
        duration: "2:44",
        plays: "100M+",
        embedUrl: "https://embed.music.apple.com/us/album/grl-gvng-single/1692289010"
    },
    {
        id: 'wokeUp',
        title: "WOKE UP",
        artist: "XG",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/98/5b/ab/985bab61-ce9e-96a4-9c19-5c0bc8e43a8f/Job9c037347-6f27-4e72-8289-74bbeb8a4707-166609898-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_323902842_1746248715-Time1713579781658.png/316x316bb.webp",
        duration: "2:51",
        plays: "50M+",
        embedUrl: "https://embed.music.apple.com/us/album/woke-up-single/1742262122"
    },
    {
        id: 'texasHold',
        title: "TEXAS HOLD 'EM",
        artist: "Beyoncé",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/e0/73/1be0738e-c0c8-306b-5fed-9403b8383e06/196871850414.jpg/316x316bb.webp",
        duration: "3:42",
        plays: "2.5M",
        embedUrl: "https://embed.music.apple.com/us/album/texas-hold-em-single/1730408497"
    },
    {
        id: 'redRuby',
        title: "Red Ruby Da Sleeze",
        artist: "Nicki Minaj",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/aa/a6/62/aaa662ec-5ac8-fac2-0bd9-ecce09791cf3/Jobc92984b2-c966-4555-b3fa-1ae96f417c7e-159745479-PreviewImage_preview_image_nonvideo_sdr-Time1702009355861.png/316x316bb.webp",
        duration: "2:55",
        plays: "1.8M",
        embedUrl: "https://embed.music.apple.com/us/album/pink-friday-2/1720307257"
    },
    {
        id: 'richFlex',
        title: "Rich Flex",
        artist: "Drake & 21 Savage",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/c7/00/3f/c7003f83-3a43-1201-4aec-41be71ba64c5/22UM1IM29131.rgb.jpg/316x316bb.webp",
        duration: "3:22",
        plays: "4.2M",
        embedUrl: "https://embed.music.apple.com/us/album/her-loss/1652998965"
    }
];

const tracks = [
    {
        id: 'grlGvng',
        title: 'GRL GVNG',
        artist: 'XG',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2a/df/2e/2adf2e56-a30a-d7a8-6a3a-d72e3c47e8e7/ANTCD-A0000010570.jpg/316x316bb.webp',
        embedUrl: 'https://embed.music.apple.com/us/album/grl-gvng-single/1692289010',
        duration: '3:02',
        plays: '2.1M'
    },
    {
        id: 'wokeUp',
        title: 'WOKE UP',
        artist: 'XG',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2a/df/2e/2adf2e56-a30a-d7a8-6a3a-d72e3c47e8e7/ANTCD-A0000010570.jpg/316x316bb.webp',
        embedUrl: 'https://embed.music.apple.com/us/album/woke-up/1692289010?i=1692289011',
        duration: '3:22',
        plays: '3.1M'
    }
];

// Create album card
function createAlbumCard(album) {
    return `
        <div class="album-card" data-album-id="${album.id}">
            <div class="album-image">
                <img src="${album.image}" alt="${album.title}">
                <div class="album-overlay">
                    <button class="play-btn" onclick="toggleAlbumPlayer('${album.id}')">
                        <i class="fas fa-play"></i>
                    </button>
                </div>
            </div>
            <div class="album-info">
                <h3>${album.title}</h3>
                <p class="artist-name">${album.artist}</p>
                <p class="release-date">Released: ${album.releaseDate}</p>
                <p class="track-count">${album.tracks} tracks</p>
            </div>
            <div class="album-player" id="player-${album.id}" style="display: none;">
                ${album.embedUrl ? `
                    <iframe 
                        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                        frameborder="0" 
                        height="450" 
                        style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" 
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                        src="${album.embedUrl}">
                    </iframe>
                ` : ''}
            </div>
        </div>
    `;
}

// Create track item
function createTrackItem(track) {
    return `
        <div class="track-item" id="${track.id}">
            <div class="track-content">
                <div class="track-left">
                    <img src="${track.image}" alt="${track.title}" class="track-image">
                    <div class="track-buttons">
                        <button onclick="toggleTrackPlayer('${track.id}')">
                            <i class="fas fa-play"></i> Play
                        </button>
                    </div>
                    <div class="track-info">
                        <h3>${track.title}</h3>
                        <p>${track.artist}</p>
                        <p class="duration">Duration: ${track.duration}</p>
                        <p class="plays">Plays: ${track.plays}</p>
                    </div>
                </div>
                <div class="track-center" id="${track.id}-player" style="display: none;">
                    <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="${track.embedUrl}"></iframe>
                </div>
            </div>
        </div>
    `;
}

// Toggle album player
function toggleAlbumPlayer(albumId) {
    const playerDiv = document.getElementById(`player-${albumId}`);
    const allPlayers = document.querySelectorAll('.album-player');
    
    // Close all other players
    allPlayers.forEach(player => {
        if (player.id !== `player-${albumId}`) {
            player.style.display = 'none';
        }
    });

    // Toggle the clicked player
    if (playerDiv) {
        playerDiv.style.display = playerDiv.style.display === 'none' ? 'block' : 'none';
    }
}

// Toggle track player
function toggleTrackPlayer(trackId) {
    const playerElement = document.getElementById(`${trackId}-player`);
    const allPlayers = document.querySelectorAll('.track-center');
    
    // Hide all other players
    allPlayers.forEach(player => {
        if (player.id !== `${trackId}-player`) {
            player.style.display = 'none';
        }
    });

    // Toggle the clicked player
    playerElement.style.display = playerElement.style.display === 'none' ? 'block' : 'none';
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Populate featured albums
    const featuredAlbumsContainer = document.getElementById('featuredAlbums');
    featuredAlbumsContainer.innerHTML = featuredAlbums.map(createAlbumCard).join('');
    
    // Populate new releases
    const newReleasesContainer = document.getElementById('newReleases');
    newReleasesContainer.innerHTML = newReleases.map(createAlbumCard).join('');
    
    // Populate trending tracks
    const trendingTracksContainer = document.getElementById('trendingTracks');
    trendingTracksContainer.innerHTML = trendingTracks.map(createTrackItem).join('');
});
