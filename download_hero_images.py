import os
import requests
from pathlib import Path

def download_image(url, filename):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        with open(filename, 'wb') as f:
            f.write(response.content)
        print(f"Successfully downloaded {filename}")
    else:
        print(f"Failed to download {filename}: Status code {response.status_code}")

def main():
    # Create artists directory if it doesn't exist
    artists_dir = Path("images/hero")
    artists_dir.mkdir(parents=True, exist_ok=True)

    # High-quality hip-hop related images
    images = {
        "drake-concert.jpg": "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",  # Concert atmosphere
        "kendrick-performance.jpg": "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",  # Stage performance
        "hiphop-fashion.jpg": "https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg"  # Urban fashion
    }

    for filename, url in images.items():
        filepath = artists_dir / filename
        print(f"Downloading {filename}...")
        download_image(url, filepath)

if __name__ == "__main__":
    main()
