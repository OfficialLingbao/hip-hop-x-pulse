// RSS Feed URLs and API configuration
const RSS_FEEDS = [
    {
        name: 'AllHipHop',
        url: 'https://www.allhiphop.com/feed/'
    },
    {
        name: 'XXL Magazine',
        url: 'https://www.xxlmag.com/feed/'
    }
];

// Cache for storing news data
let newsCache = [];

// Function to extract image from content
function extractImageFromContent(content) {
    const div = document.createElement('div');
    div.innerHTML = content;
    const firstImage = div.querySelector('img');
    return firstImage ? firstImage.src : null;
}

// Function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    
    if (diffHours < 1) {
        return 'Just now';
    } else if (diffHours < 24) {
        return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    } else {
        const diffDays = Math.floor(diffHours / 24);
        return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    }
}

// Function to clean HTML content
function cleanContent(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    div.querySelectorAll('img').forEach(img => img.remove());
    return div.textContent.trim().slice(0, 150) + '...';
}

// Function to create a news card with animation
function createNewsCard(article, index) {
    const imageUrl = article.thumbnail || 
                    article.enclosure?.link || 
                    extractImageFromContent(article.content) || 
                    'https://placehold.co/600x400/000000/FFFFFF/png?text=Hip+Hop+News';

    const cleanDescription = cleanContent(article.description || article.content);
    const card = document.createElement('article');
    card.className = 'news-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.cursor = 'pointer';
    
    // Add click event to the entire card
    card.addEventListener('click', () => {
        window.open(article.link, '_blank');
    });
    
    card.innerHTML = `
        <div class="news-image">
            <div class="news-image-inner" style="background-image: url('${imageUrl}');"></div>
            <div class="category">${article.source || 'Hip-Hop News'}</div>
        </div>
        <div class="news-content">
            <h2>${article.title}</h2>
            <p>${cleanDescription}</p>
            <div class="news-meta">
                <span><i class="far fa-clock"></i> ${formatDate(article.pubDate)}</span>
                <div class="social-shares" onclick="event.stopPropagation()">
                    <button onclick="shareOnTwitter('${encodeURIComponent(article.title)}')" title="Share on Twitter">
                        <i class="fab fa-twitter"></i>
                    </button>
                    <button onclick="shareOnFacebook('${encodeURIComponent(article.link)}')" title="Share on Facebook">
                        <i class="fab fa-facebook"></i>
                    </button>
                </div>
            </div>
        </div>
    `;

    // Animate card entrance
    setTimeout(() => {
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, index * 100);

    return card;
}

// Social sharing functions
function shareOnTwitter(title) {
    const text = decodeURIComponent(title);
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
}

function shareOnFacebook(url) {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

// Function to display loading state
function showLoading() {
    const newsGrid = document.getElementById('latestNewsGrid');
    newsGrid.innerHTML = `
        <div class="loading-message">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Loading latest hip-hop news...</p>
        </div>
    `;
}

// Function to display error state
function showError() {
    const newsGrid = document.getElementById('latestNewsGrid');
    newsGrid.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-circle"></i>
            <p>Unable to load news. Please try again later.</p>
            <button onclick="fetchNews()" class="retry-button">
                <i class="fas fa-redo"></i> Retry
            </button>
        </div>
    `;
}

// Function to fetch news from a single source
async function fetchNewsFromSource(feed) {
    try {
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`);
        const data = await response.json();
        
        if (data.status === 'ok') {
            return data.items.map(item => ({
                ...item,
                source: feed.name
            }));
        }
        return [];
    } catch (error) {
        console.error(`Error fetching from ${feed.name}:`, error);
        return [];
    }
}

// Function to fetch and display news from all sources
async function fetchNews() {
    const newsGrid = document.getElementById('latestNewsGrid');
    showLoading();
    
    try {
        // Fetch from all sources in parallel
        const newsPromises = RSS_FEEDS.map(feed => fetchNewsFromSource(feed));
        const newsArrays = await Promise.all(newsPromises);
        
        // Combine and sort all news items by date
        const allNews = newsArrays
            .flat()
            .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

        if (allNews.length > 0) {
            newsCache = allNews;
            newsGrid.innerHTML = '';
            
            // Create and append news cards with staggered animation
            allNews.forEach((article, index) => {
                const card = createNewsCard(article, index);
                newsGrid.appendChild(card);
            });
        } else {
            throw new Error('No news items found');
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        showError();
    }
}

// Function to filter news based on search
function filterNews(searchTerm) {
    const newsGrid = document.getElementById('latestNewsGrid');
    const filteredNews = newsCache.filter(article => {
        const title = article.title.toLowerCase();
        const content = (article.description || article.content).toLowerCase();
        const source = article.source.toLowerCase();
        return title.includes(searchTerm) || 
               content.includes(searchTerm) || 
               source.includes(searchTerm);
    });

    newsGrid.innerHTML = '';
    
    if (filteredNews.length === 0) {
        newsGrid.innerHTML = `
            <div class="error-message">
                <i class="fas fa-search"></i>
                <p>No results found for "${searchTerm}"</p>
            </div>
        `;
        return;
    }

    filteredNews.forEach((article, index) => {
        const card = createNewsCard(article, index);
        newsGrid.appendChild(card);
    });
}

// Setup search functionality with debounce
function setupSearch() {
    const searchBar = document.querySelector('.search-bar input');
    let debounceTimer;

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        clearTimeout(debounceTimer);
        
        debounceTimer = setTimeout(() => {
            filterNews(searchTerm);
        }, 300);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    fetchNews();
    setupSearch();
    
    // Refresh news every 5 minutes
    setInterval(fetchNews, 5 * 60 * 1000);
});