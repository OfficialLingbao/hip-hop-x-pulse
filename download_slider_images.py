import os
import requests
from pathlib import Path

def download_image(url, filename):
    response = requests.get(url)
    if response.status_code == 200:
        with open(filename, 'wb') as f:
            f.write(response.content)
        print(f"Downloaded {filename}")
    else:
        print(f"Failed to download {filename}")

def main():
    # Create artists directory if it doesn't exist
    artists_dir = Path("images/artists")
    artists_dir.mkdir(parents=True, exist_ok=True)

    # Image URLs (using reliable image URLs)
    images = {
        "drake.jpg": "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg",
        "kendrick-lamar.jpg": "https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg",
        "tyler-the-creator.jpg": "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg"
    }

    # Download each image
    for filename, url in images.items():
        filepath = artists_dir / filename
        download_image(url, filepath)

if __name__ == "__main__":
    main()
