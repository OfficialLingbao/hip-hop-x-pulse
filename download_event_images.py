import os
import requests
from pathlib import Path

# Create events directory if it doesn't exist
events_dir = Path('images/events')
events_dir.mkdir(parents=True, exist_ok=True)

# Event image URLs and their corresponding filenames
event_images = {
    'coachella.jpg': 'https://images.unsplash.com/photo-1541704328070-20bf4601ae3e',
    'rolling-loud.jpg': 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
    'breakdance.jpg': 'https://images.unsplash.com/photo-1547347298-4074fc3086f0',
    'kendrick.jpg': 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
    'dance-convention.jpg': 'https://images.unsplash.com/photo-1545062080-a71640ea75df',
    'film-festival.jpg': 'https://images.unsplash.com/photo-1478720568477-152d9b164e26',
    'streetwear.jpg': 'https://images.unsplash.com/photo-1523398002811-999ca8dec234'
}

def download_image(url, filename):
    try:
        response = requests.get(url)
        response.raise_for_status()
        
        filepath = events_dir / filename
        with open(filepath, 'wb') as f:
            f.write(response.content)
        print(f'Successfully downloaded {filename}')
    except Exception as e:
        print(f'Error downloading {filename}: {str(e)}')

# Download all images
for filename, url in event_images.items():
    download_image(url, filename)
