import schedule
import time
import logging
from news_scraper import NewsScraper

logging.basicConfig(
    level=logging.INFO, 
    format='%(asctime)s - %(levelname)s: %(message)s',
    filename='news_scraper.log'
)

def daily_news_update():
    try:
        scraper = NewsScraper()
        trending_stories = scraper.save_trending_stories()
        logging.info(f"Successfully updated trending stories. Total stories: {len(trending_stories)}")
    except Exception as e:
        logging.error(f"Error during daily news update: {e}")

def main():
    logging.info("News Scheduler Started")
    
    # Run immediately on start
    daily_news_update()
    
    # Schedule daily updates at 6 AM
    schedule.every().day.at("06:00").do(daily_news_update)
    
    while True:
        schedule.run_pending()
        time.sleep(1)

if __name__ == "__main__":
    main()
