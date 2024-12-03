// RSS Feed URL
const RSS_URL = 'https://www.allhiphop.com/feed/';
const RSS_TO_JSON_API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

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
    // Remove all images as we'll display the main one separately
    div.querySelectorAll('img').forEach(img => img.remove());
    // Get text content and limit it
    return div.textContent.trim().slice(0, 150) + '...';
}

// Function to create a news card
function createNewsCard(article) {
    // Try to get image from different sources
    const imageUrl = article.thumbnail || 
                    article.enclosure?.link || 
                    extractImageFromContent(article.content) || 
                    'https://placehold.co/600x400/000000/FFFFFF/png?text=Hip+Hop+News';

    const cleanDescription = cleanContent(article.description || article.content);

    return `
        <article class="news-card">
            <div class="news-image" style="background-image: url('${imageUrl}'); background-size: cover; background-position: center;">
                <div class="category">Hip-Hop News</div>
            </div>
            <div class="news-content">
                <h2>${article.title}</h2>
                <p>${cleanDescription}</p>
                <div class="news-meta">
                    <span><i class="far fa-clock"></i> ${formatDate(article.pubDate)}</span>
                    <div class="social-shares">
                        <button onclick="shareOnTwitter('${encodeURIComponent(article.title)}')"><i class="fab fa-twitter"></i></button>
                        <button onclick="shareOnFacebook('${encodeURIComponent(article.link)}')"><i class="fab fa-facebook"></i></button>
                        <button onclick="window.open('${article.link}', '_blank')" title="Read full article"><i class="fas fa-external-link-alt"></i></button>
                    </div>
                </div>
            </div>
        </article>
    `;
}

// Function to fetch and display news
async function fetchNews() {
    try {
        const response = await fetch(RSS_TO_JSON_API);
        const data = await response.json();
        
        if (data.status === 'ok') {
            const newsGrid = document.querySelector('.latest-news .news-grid');
            const featuredNews = document.querySelector('.featured-news .news-grid');
            
            // Only proceed if we're on a page with news elements
            if (!newsGrid && !featuredNews) {
                console.log('No news elements found on this page');
                return;
            }
            
            // Display the first article as featured news if the element exists
            if (featuredNews && data.items.length > 0) {
                const featuredArticle = data.items[0];
                featuredNews.innerHTML = createNewsCard({
                    ...featuredArticle,
                    description: featuredArticle.description || featuredArticle.content
                });
            }
            
            // Display the rest of the articles in the news grid if the element exists
            if (newsGrid && data.items.length > 1) {
                const newsHTML = data.items.slice(1, 7).map(article => createNewsCard(article)).join('');
                newsGrid.innerHTML = newsHTML;
            }

            // Add fade-in animation to all cards
            document.querySelectorAll('.news-card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                requestAnimationFrame(() => {
                    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                });
            });
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        displayFallbackNews();
    }
}

// Fallback news in case the API fails
function displayFallbackNews() {
    const newsGrid = document.querySelector('.latest-news .news-grid');
    if (!newsGrid) {
        console.log('No news grid element found for fallback news');
        return;
    }

    const fallbackNews = [
        {
            title: "Unable to load news from AllHipHop.com",
            description: "Please check your internet connection or try again later. We're working to bring you the latest hip-hop news.",
            pubDate: new Date(),
            link: "https://www.allhiphop.com",
            thumbnail: "https://placehold.co/600x400/000000/FFFFFF/png?text=Hip+Hop+News"
        }
    ];
    
    newsGrid.innerHTML = createNewsCard(fallbackNews[0]);
}

// Social sharing functions
function shareOnTwitter(title) {
    const text = decodeURIComponent(title);
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
}

function shareOnFacebook(url) {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

// Search functionality
const searchBar = document.querySelector('.search-bar input');
searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const newsCards = document.querySelectorAll('.news-card');
    
    newsCards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const excerpt = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    fetchNews();
    
    // Newsletter subscription
    const subscribeBtn = document.getElementById('zipcode-search-btn');
    const emailInput = document.getElementById('zipcode-input');
    const newsletterMessage = document.querySelector('.newsletter-message');

    if (subscribeBtn && emailInput) {
        subscribeBtn.addEventListener('click', async () => {
            const email = emailInput.value.trim();
            
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                newsletterMessage.textContent = 'Please enter a valid email address.';
                newsletterMessage.style.color = 'red';
                return;
            }

            try {
                console.log('Attempting to send email with parameters:', {
                    service_id: "service_hjcenpv",
                    template_id: "template_6inurhh",
                    email: email,
                });

                const templateParams = {
                    from_name: "Hip-Hop Pulse",
                    to_name: email.split('@')[0],
                    message: "Thank you for subscribing to Hip-Hop Pulse Newsletter!",
                    user_email: email,
                    reply_to: email
                };

                console.log('Template parameters:', templateParams);

                // Send email using EmailJS
                const response = await emailjs.send(
                    "service_hjcenpv",
                    "template_6inurhh",
                    templateParams
                );

                console.log('EmailJS Response:', response);

                if (response.status === 200) {
                    newsletterMessage.textContent = 'Thank you for subscribing!';
                    newsletterMessage.style.color = '#4CAF50';
                    emailInput.value = '';
                } else {
                    throw new Error(`Unexpected status: ${response.status}`);
                }
            } catch (error) {
                console.error('EmailJS Error:', error);
                console.error('Error Details:', {
                    message: error.message,
                    name: error.name,
                    stack: error.stack
                });
                
                let errorMessage = 'Subscription failed. Please try again later.';
                if (error.text) {
                    errorMessage += ` Error: ${error.text}`;
                }
                
                newsletterMessage.textContent = errorMessage;
                newsletterMessage.style.color = '#f44336';
            }
        });

        // Enter key support
        emailInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                subscribeBtn.click();
            }
        });
    }
    
    // Refresh news every 5 minutes
    setInterval(fetchNews, 5 * 60 * 1000);
});

// Add to your app.js or create newsletter.js
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletterForm');
    const messageDiv = document.getElementById('newsletter-message');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const email = document.getElementById('newsletter-email').value;
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                messageDiv.textContent = 'Thank you for subscribing!';
                messageDiv.className = 'newsletter-message success';
                newsletterForm.reset();
                
                // Clear success message after 3 seconds
                setTimeout(() => {
                    messageDiv.textContent = '';
                    messageDiv.className = 'newsletter-message';
                }, 3000);
                
            } catch (error) {
                messageDiv.textContent = 'Something went wrong. Please try again.';
                messageDiv.className = 'newsletter-message error';
            }
        });
    }
});