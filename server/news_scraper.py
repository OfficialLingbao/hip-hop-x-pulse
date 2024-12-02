import requests
from bs4 import BeautifulSoup
import feedparser
import datetime
import json
import random
from concurrent.futures import ThreadPoolExecutor, as_completed

class NewsScraper:
    def __init__(self):
        self.sources = {
            'hip_hop_news': [
                'https://allhiphop.com/feed/',
                'https://www.xxlmag.com/feed/',
                'https://hiphopdx.com/rss.xml'
            ],
            'fashion': [
                'https://www.complex.com/style/rss',
                'https://www.gq.com/rss'
            ],
            'concerts': [
                'https://www.billboard.com/feed/',
                'https://www.rollingstone.com/music/feed/'
            ]
        }

    def fetch_rss_feed(self, url):
        try:
            feed = feedparser.parse(url)
            return [
                {
                    'title': entry.title,
                    'description': entry.get('summary', 'No description'),
                    'link': entry.link,
                    'published': entry.get('published', datetime.datetime.now().isoformat()),
                    'source': url
                } 
                for entry in feed.entries[:3]
            ]
        except Exception as e:
            print(f"Error fetching {url}: {e}")
            return []

    def aggregate_news(self):
        all_news = []
        
        with ThreadPoolExecutor(max_workers=10) as executor:
            futures = []
            for category, urls in self.sources.items():
                for url in urls:
                    futures.append(executor.submit(self.fetch_rss_feed, url))
            
            for future in as_completed(futures):
                all_news.extend(future.result())
        
        # Shuffle and limit to top 10 most recent news
        random.shuffle(all_news)
        return sorted(all_news, key=lambda x: x['published'], reverse=True)[:10]

    def save_trending_stories(self):
        trending_stories = self.aggregate_news()
        
        # Transform to match hero slider format
        hero_stories = [
            {
                'category': self.categorize_news(story),
                'title': story['title'],
                'description': story['description'][:200] + '...' if len(story['description']) > 200 else story['description'],
                'image': self.get_representative_image(story),
                'date': story.get('published', datetime.datetime.now().isoformat()),
                'views': f"{random.randint(1, 100)}K"
            }
            for story in trending_stories
        ]
        
        with open('trending_stories.json', 'w') as f:
            json.dump(hero_stories, f, indent=2)
        
        return hero_stories

    def categorize_news(self, story):
        title = story['title'].lower()
        if any(keyword in title for keyword in ['fashion', 'style', 'wear', 'clothing']):
            return 'Fashion'
        elif any(keyword in title for keyword in ['concert', 'tour', 'live', 'performance']):
            return 'Concert'
        else:
            return 'Music Release'

    def get_representative_image(self, story):
        # In a real-world scenario, you'd implement image scraping
        default_images = [
            'images/hero/drake-concert.jpg',
            'images/hero/kendrick-performance.jpg',
            'images/hero/hiphop-fashion.jpg'
        ]
        return random.choice(default_images)

def main():
    scraper = NewsScraper()
    scraper.save_trending_stories()

if __name__ == "__main__":
    main()
