import os
import requests
from pathlib import Path

# Create events directory if it doesn't exist
events_dir = Path('images/events')
events_dir.mkdir(parents=True, exist_ok=True)

# New dance convention image
url = 'https://images.unsplash.com/photo-1535525153412-5a42439a210d'
filename = 'dance-convention.jpg'

try:
    response = requests.get(url)
    response.raise_for_status()
    
    filepath = events_dir / filename
    with open(filepath, 'wb') as f:
        f.write(response.content)
    print(f'Successfully downloaded {filename}')
except Exception as e:
    print(f'Error downloading {filename}: {str(e)}')
