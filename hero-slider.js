// Fetch trending stories dynamically
async function fetchTrendingStories() {
    try {
        const response = await fetch('server/trending_stories.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const text = await response.text();
        
        // Decode any Unicode escape sequences
        const decodedText = text.replace(/\\u([0-9a-fA-F]{4})/g, (match, group) => 
            String.fromCharCode(parseInt(group, 16))
        );
        
        const trendingStories = JSON.parse(decodedText);
        
        // Validate data
        if (!trendingStories || !Array.isArray(trendingStories)) {
            throw new Error('Invalid data format: Expected an array of stories');
        }
        
        return trendingStories.map(story => ({
            ...story,
            title: decodeUnicode(story.title),
            description: decodeUnicode(story.description)
        }));
    } catch (error) {
        console.error('Error fetching trending stories:', error);
        // Fallback to default stories if fetch fails
        return [
            {
                category: 'Breaking News',
                title: 'Drake Announces Surprise World Tour',
                description: 'The Toronto rapper reveals dates for his highly anticipated global tour, promising an unforgettable experience for fans.',
                image: 'images/hero/drake-concert.jpg',
                date: new Date().toISOString(),
                views: '50K'
            }
        ];
    }
}

// Utility function to decode Unicode
function decodeUnicode(str) {
    if (!str) return str;
    return str.replace(/\\u([0-9a-fA-F]{4})/g, (match, group) => 
        String.fromCharCode(parseInt(group, 16))
    );
}

// Utility function to escape HTML
function escapeHtml(unsafe) {
    if (!unsafe) return '';
    const decoded = decodeUnicode(unsafe);
    return decoded
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

class HeroSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = [];
        this.autoSlideInterval = null;
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.initSlider();
    }

    async initSlider() {
        try {
            // Use the fetchTrendingStories function
            this.slides = await fetchTrendingStories();
            
            console.log('Fetched Slides:', this.slides);
            
            this.createSlides();
            this.setupEventListeners();
            this.startAutoSlide();
            this.updateSlideIndicators();
        } catch (error) {
            console.error('Error initializing slider:', error);
            this.handleError(error);
        }
    }

    createSlides() {
        const sliderWrapper = document.querySelector('.slider-wrapper');
        if (!sliderWrapper) {
            console.error('Slider wrapper not found');
            return;
        }

        // Add a check to ensure slides exist
        if (!this.slides || this.slides.length === 0) {
            console.error('No slides available');
            this.handleError(new Error('No news stories found'));
            return;
        }

        // Log the number of slides for verification
        console.log(`Creating ${this.slides.length} slides`);

        sliderWrapper.innerHTML = this.slides.map((slide, index) => {
            // Add more robust error handling for individual slide properties
            const title = escapeHtml(slide.title || 'Untitled Story');
            const description = escapeHtml(slide.description || 'No description available');
            const category = escapeHtml(slide.category || 'News');
            const imageUrl = slide.image || slide.image_url || '/images/default-news.jpg';
            const publishedDate = this.formatDate(slide.date || slide.published_date);
            const source = escapeHtml(slide.source || 'Unknown');

            return `
                <div class="slide" data-index="${index}">
                    <div class="slide-card">
                        <div class="slide-image-wrapper">
                            <img src="${imageUrl}" 
                                 alt="${title}" 
                                 class="slide-image"
                                 onerror="this.src='/images/default-news.jpg'">
                            <div class="slide-category-badge">${category}</div>
                        </div>
                        <div class="slide-content">
                            <h2 class="slide-title">${title}</h2>
                            <p class="slide-description">${description}</p>
                            <div class="slide-meta">
                                <div class="meta-item">
                                    <i class="fas fa-clock"></i>
                                    <span>${publishedDate}</span>
                                </div>
                                <div class="meta-item">
                                    <i class="fas fa-newspaper"></i>
                                    <span>${source}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        this.createIndicators();
    }

    // Rest of the code remains the same...
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HeroSlider();
});