// Music data
const featuredAlbums = [
    {
        id: 'cowboyCarter',
        title: "COWBOY CARTER",
        artist: "Beyoncé",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/bd/f6/83/bdf683a5-28de-08cb-cb91-2940c1e6270b/196871853729.jpg/316x316bb.webp",
        releaseDate: "March 29, 2024",
        tracks: 27,
        embedUrl: "https://embed.music.apple.com/us/album/cowboy-carter/1738363766"
    },
    {
        id: 'pinkFriday2',
        title: "Pink Friday 2",
        artist: "Nicki Minaj",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/aa/a6/62/aaa662ec-5ac8-fac2-0bd9-ecce09791cf3/Jobc92984b2-c966-4555-b3fa-1ae96f417c7e-159745479-PreviewImage_preview_image_nonvideo_sdr-Time1702009355861.png/316x316bb.webp",
        releaseDate: "December 8, 2023",
        tracks: 22,
        embedUrl: "https://embed.music.apple.com/us/album/pink-friday-2/1720307257"
    },
    {
        id: 'weStillDontTrustYou',
        title: "WE STILL DON'T TRUST YOU",
        artist: "Metro Boomin & Future",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/48/55/f3/4855f346-fd74-fe8c-d75d-890b52213884/196871990844.jpg/316x316bb.webp",
        releaseDate: "April 12, 2024",
        tracks: 18,
        embedUrl: "https://embed.music.apple.com/us/album/we-still-dont-trust-you/1740864541?i=1740864625"
    },
    {
        id: 'vultures1',
        title: "Vultures 1",
        artist: "Kanye West & Ty Dolla $ign",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/25/47/fa/2547fae8-2010-7b31-8dc7-1a93de4a3269/cover.jpg/316x316bb.webp",
        releaseDate: "February 9, 2024",
        tracks: 15,
        embedUrl: "https://embed.music.apple.com/us/album/vultures/1732096585?i=1732098460"
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
        id: 'herLoss',
        title: "Her Loss",
        artist: "Drake & 21 Savage",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/c7/00/3f/c7003f83-3a43-1201-4aec-41be71ba64c5/22UM1IM29131.rgb.jpg/316x316bb.webp",
        releaseDate: "November 4, 2022",
        tracks: 16,
        embedUrl: "https://embed.music.apple.com/us/album/her-loss/1652998965"
    }
];

const newReleases = [
    {
        id: 'sos',
        title: "SOS (Sex On Sight) - EP",
        artist: "Victoria Monét",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/4e/c3/38/4ec338eb-0047-3a1f-58df-101308cb39fa/196872403329.jpg/316x316bb.webp",
        releaseDate: "March 29, 2024",
        tracks: 5,
        embedUrl: "https://embed.music.apple.com/us/album/sos-sex-on-sight-ep/1764994407"
    },
    {
        id: 'inSexyyWeTrust',
        title: "In Sexyy We Trust",
        artist: "Sexyy Red",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e6/3a/e2/e63ae247-7bb8-2026-f868-347cf9b7cca2/797885187680_cover.jpg/316x316bb.webp",
        releaseDate: "May 24, 2024",
        tracks: 14,
        embedUrl: "https://embed.music.apple.com/us/album/in-sexyy-we-trust/1748026811"
    },
    {
        id: 'glorious',
        title: "GLORIOUS",
        artist: "GloRilla",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/d1/62/4d/d1624d6b-96b4-2bcf-c6bf-f1a4af411cc9/Job47fb7bed-063d-43d3-8f62-d271dea9b272-176361585-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_344441460_1905762718-Time1727403089255.png/316x316bb.webp",
        releaseDate: "October 11, 2024",
        tracks: 15,
        embedUrl: "https://embed.music.apple.com/us/album/rain-down-on-me/1769454777?i=1769454786"
    },
    {
        id: 'egoManiacs',
        title: "Ego Maniacs - Single",
        artist: "Busta Rhymes, Ice Cube & Killer Mike",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/95/71/09/957109e7-e5fa-31c6-5cb0-0ab4b896a72f/cover_4062851079228.jpg/316x316bb.webp",
        releaseDate: "November 8, 2024",
        tracks: 1,
        embedUrl: "https://embed.music.apple.com/us/album/ego-maniacs/1776648407?i=1776648408"
    },
    {
        id: 'trillBill',
        title: "Trill Bill",
        artist: "Kodak Black",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/92/de/f3/92def3e4-4716-a557-4c01-35fbf3e795ea/24UM1IM24427.rgb.jpg/316x316bb.webp",
        releaseDate: "November 29, 2024",
        tracks: 11,
        embedUrl: "https://embed.music.apple.com/us/album/trill-bill/1781141925"
    },
    {
        id: 'planA',
        title: "PLAN A",
        artist: "Lil Tecca",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d8/28/12/d82812c6-e36f-4568-7f0f-969c21091163/24UMGIM98696.rgb.jpg/316x316bb.webp",
        releaseDate: "September 20, 2024",
        tracks: 18,
        embedUrl: "https://embed.music.apple.com/us/album/plan-a/1767063070"
    },
    {
        id: 'doodleverse',
        title: "Doodleverse (feat. Pharrell Williams) - Single",
        artist: "Lil Yachty, Doodles, Swae Lee",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c6/af/70/c6af7006-0f69-8215-8c1a-ec6f41e05b08/198846241456.jpg/316x316bb.webp",
        releaseDate: "October 4, 2024",
        tracks: 1,
        embedUrl: "https://embed.music.apple.com/us/album/doodleverse-feat-pharrell-williams-single/1767045378"
    },
    {
        id: 'lastLap',
        title: "Last Lap",
        artist: "Rod Wave",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/f8/ba/a5/f8baa504-2c76-6226-3c62-d4aec3a2afb7/Job8a0b0da8-da8a-401d-a87f-c6dd279b3183-176992233-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_345820237_1916168349-Time1728408757881.png/316x316bb.webp",
        releaseDate: "October 11, 2024",
        tracks: 25,
        embedUrl: "https://embed.music.apple.com/us/album/last-lap/1772368554"
    },
    {
        id: 'youDontLoveMe',
        title: "You Don’t Love Me - Single",
        artist: "Gucci Mane",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/52/08/47/5208479d-4338-1959-fde1-c707e4e78d13/075679630643.jpg/316x316bb.webp",
        releaseDate: "October 25, 2024",
        tracks: 1,
        embedUrl: "https://embed.music.apple.com/us/album/you-dont-love-me/1775501700?i=1775501701"
    },
    {
        id: 'cantHoldMeDown',
        title: "Can't Hold Me Down (feat. Pharrell Williams & Kyle Richh) - Single",
        artist: "Lil Wayne, Lil Yachty, DOODLES",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ea/95/ba/ea95ba56-6520-8e9b-bd09-297a6ee909a5/198846066530.jpg/316x316bb.webp",
        releaseDate: "September 6, 2024",
        tracks: 1,
        embedUrl: "https://embed.music.apple.com/us/album/cant-hold-me-down-feat-pharrell-williams-kyle-richh/1763902481?i=1763902485"
    },
    {
        id: 'mEGANACTII',
        title: "MEGAN: ACT II",
        artist: "Megan Thee Stallion",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/05/6e/d2/056ed29c-1403-8088-6fec-6e95a5996fe3/075679624857.jpg/316x316bb.webp",
        releaseDate: "October 25, 2024",
        tracks: 31,
        embedUrl: "https://embed.music.apple.com/us/album/megan-act-ii/1776124685"
    },
    {
        id: 'oNDatMoney',
        title: "On Dat Money (Alternate Versions) - Single",
        artist: "Rob49, Cardi B",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/84/a4/9e/84a49e58-240e-3684-db44-5e6f072ecdad/196922992711_Cover.jpg/316x316bb.webp",
        releaseDate: "July 19, 2024",
        tracks: 3,
        embedUrl: "https://embed.music.apple.com/us/album/on-dat-money-alternate-versions-single/1757584808"
    }
];

const trendingTracks = [
    {
        id: 'texasHold',
        title: "TEXAS HOLD 'EM",
        artist: "Beyoncé",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/e0/73/1be0738e-c0c8-306b-5fed-9403b8383e06/196871850414.jpg/316x316bb.webp",
        duration: "3:42",
        plays: "2.5M",
        embedUrl: "https://embed.music.apple.com/us/album/texas-hold-em/1730408497?i=1730408498"
    },
    {
        id: 'wokeup',
        title: "WOKE UP",
        artist: "XG",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/98/5b/ab/985bab61-ce9e-96a4-9c19-5c0bc8e43a8f/Job9c037347-6f27-4e72-8289-74bbeb8a4707-166609898-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_323902842_1746248715-Time1713579781658.png/316x316bb.webp",
        duration: "2:30",
        plays: "100M+",
        embedUrl: "https://embed.music.apple.com/us/album/woke-up-single/1742262122"
    },
    {
        id: 'wedonttrustyou',
        title: "WE DON'T TRUST YOU",
        artist: "Future & Metro Boomin",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4e/9f/7b/4e9f7b71-28ad-a8dc-9b34-da532feb82f6/196871937382.jpg/316x316bb.webp",
        duration: "3:46",
        plays: "1.2M",
        embedUrl: "https://embed.music.apple.com/us/album/we-dont-trust-you/1737149923?i=1737150142"
    },
    {
        id: 'becauseILoveYou',
        title: "Because I Love You - Single",
        artist: "Halley",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/07/75/e5/0775e538-4c75-0737-51cb-1135dd1932a5/Job48944bf8-dc06-4a9b-863a-39ceb525a489-174857023-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_341119798_1881941321-Time1725402052286.png/316x316bb.webp",
        duration: "3:31",
        plays: "950K",
        embedUrl: "https://embed.music.apple.com/us/album/because-i-love-you-single/1764554438"
    },
    {
        id: 'lovelike',
        title: "Love Like",
        artist: "Kehani",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d6/f9/d9/d6f9d930-d425-1941-7dd6-15ce2621906d/075679634672.jpg/316x316bb.webp",
        duration: "2:08",
        plays: "890K",
        embedUrl: "https://embed.music.apple.com/us/album/love-like/1764612002?i=1764612005"
    },
    {
        id: 'beautifulpeople',
        title: "Beautiful People",
        artist: "Mary J. Blige",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/13/91/82/139182a6-67a3-6cc4-2861-c22f2e6116fe/075679630315.jpg/316x316bb.webp",
        duration: "3:09",
        plays: "780K",
        embedUrl: "https://embed.music.apple.com/us/album/beautiful-people/1772961574?i=1772961586"
    },
    {
        id: 'redRuby',
        title: "Red Ruby Da Sleeze",
        artist: "Nicki Minaj",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ce/84/6e/ce846efa-372b-eba4-959c-dd43bb760924/23UM1IM66574.rgb.jpg/316x316bb.webp",
        duration: "3:34",
        plays: "750K",
        embedUrl: "https://embed.music.apple.com/us/album/red-ruby-da-sleeze/1721441202?i=1721441969"
    },
    {
        id: 'southoffranceremix',
        title: "SOUTH OF FRANCE (REMIX) - Single",
        artist: "Future,Travis Scott",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/03/80/60/03806027-c00e-d955-157c-81a1a5f930c2/196872585209.jpg/316x316bb.webp",
        duration: "3:03",
        plays: "720K",
        embedUrl: "https://embed.music.apple.com/us/album/south-of-france-remix-single/1776179603"
    }
];

// Create album card
function createAlbumCard(album) {
    const card = document.createElement('div');
    card.className = 'album-card';
    card.innerHTML = `
        <div class="album-image">
            <img src="${album.image}" alt="${album.title}">
            <button class="play-button" onclick="toggleAlbumPlayer('${album.id}')" aria-label="Play ${album.title}">
                <i class="fas fa-play"></i>
            </button>
        </div>
        <div class="album-info">
            <h3>${album.title}</h3>
            <p>${album.artist}</p>
            <span class="release-date">Released: ${album.releaseDate}</span>
            <span class="track-count">${album.tracks} tracks</span>
        </div>
        <div id="player-${album.id}" class="album-player" style="display: none;">
            <iframe 
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                frameborder="0" 
                height="450" 
                style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" 
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                src="${album.embedUrl}">
            </iframe>
        </div>
    `;
    return card;
}

// Create track item
function createTrackItem(track) {
    return `
        <div class="track-item" onclick="toggleTrackPlayer('${track.id}')">
            <div class="track-left">
                <img src="${track.image}" alt="${track.title}" onclick="playSpecificTrack('${track.embedUrl}', event)">
            </div>
            <div class="track-center">
                <h3>${track.title}</h3>
                <p>${track.artist}</p>
                <div id="${track.id}-player" style="display: none;">
                    <iframe 
                        id="${track.id}-iframe"
                        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                        frameborder="0" 
                        height="150" 
                        style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" 
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                        src="${track.embedUrl}">
                    </iframe>
                </div>
            </div>
            <div class="track-right">
                <span class="duration">${track.duration}</span>
                <span class="plays">${track.plays}</span>
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
    if (playerElement) {
        playerElement.style.display = playerElement.style.display === 'none' ? 'block' : 'none';
    }
}

// New function to play a specific track
function playSpecificTrack(embedUrl, event) {
    // Prevent the parent div's click event from firing
    event.stopPropagation();
    
    // Find the corresponding player div
    const trackItem = event.target.closest('.track-item');
    const playerId = trackItem.querySelector('[id$="-player"]').id;
    const playerDiv = document.getElementById(playerId);
    const iframe = playerDiv.querySelector('iframe');
    
    // Close all other players
    const allPlayers = document.querySelectorAll('.track-item [id$="-player"]');
    allPlayers.forEach(player => {
        if (player !== playerDiv) {
            player.style.display = 'none';
        }
    });
    
    // Toggle the current player
    if (playerDiv.style.display === 'none') {
        playerDiv.style.display = 'block';
        
        // Reload the iframe to restart the track
        const newIframe = iframe.cloneNode(true);
        iframe.parentNode.replaceChild(newIframe, iframe);
    } else {
        playerDiv.style.display = 'none';
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Populate featured albums
    const featuredAlbumsContainer = document.getElementById('featuredAlbums');
    if (featuredAlbumsContainer) {
        featuredAlbums.forEach(album => {
            const card = createAlbumCard(album);
            featuredAlbumsContainer.appendChild(card);
        });
    }
    
    // Populate new releases
    const newReleasesContainer = document.getElementById('newReleases');
    if (newReleasesContainer) {
        newReleases.forEach(album => {
            const card = createAlbumCard(album);
            newReleasesContainer.appendChild(card);
        });
    }
    
    // Populate trending tracks
    const trendingTracksContainer = document.getElementById('trendingTracks');
    if (trendingTracksContainer) {
        trendingTracksContainer.innerHTML = trendingTracks.map(createTrackItem).join('');
    }
});
