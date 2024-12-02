# Hip-Hop News Scraper

## Overview
This news scraper aggregates the latest updates in hip-hop, fashion, and concerts from various RSS feeds.

## Setup

### Prerequisites
- Python 3.8+
- pip

### Installation
1. Create a virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

2. Install dependencies
```bash
pip install -r requirements.txt
```

### Running the Scraper
- Manually run scraper: `python news_scraper.py`
- Run scheduler: `python news_scheduler.py`

### Scheduled Updates
- Automatically runs daily at 6:00 AM
- Saves latest trending stories to `trending_stories.json`

## Customization
- Modify `news_scraper.py` to add/remove news sources
- Adjust scheduling in `news_scheduler.py`

## Logging
Check `news_scraper.log` for update logs and errors.
