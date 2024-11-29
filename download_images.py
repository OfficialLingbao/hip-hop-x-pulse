import os
import requests
from PIL import Image
from io import BytesIO

# Create directories if they don't exist
os.makedirs('images/artists', exist_ok=True)

# Artist image URLs from direct sources
artist_images = {
    'kendrick-lamar': 'https://i.scdn.co/image/ab6761610000e5eb437b9e2a82505b3d93ff1022',
    'drake': 'https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9',
    'j-cole': 'https://www.billboard.com/wp-content/uploads/2021/05/J.-Cole-2021-cr-Kenneth-Cappello-billboard-1548-1621004279.jpg',
    'megan-thee-stallion': 'https://www.billboard.com/wp-content/uploads/2020/11/megan-thee-stallion-press-2020-cr-Marcelo-Cantu-billboard-1548-1605902404.jpg',
    'tyler-the-creator': 'https://i.scdn.co/image/ab6761610000e5eb8278b782cbb5a3963db88ada',
    'ice-spice': 'https://www.billboard.com/wp-content/uploads/2023/07/ice-spice-cr-eddie-lee-billboard-1548.jpg'
}

def download_and_save_image(url, filename):
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Referer': 'https://www.billboard.com/'
        }
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        
        # Open the image and convert to RGB (removes transparency if present)
        img = Image.open(BytesIO(response.content))
        if img.mode in ('RGBA', 'LA'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            background.paste(img, mask=img.split()[-1])
            img = background
        
        # Resize image to a reasonable size for cards (400x400)
        img = img.resize((400, 400), Image.Resampling.LANCZOS)
        
        # Save the image
        img.save(f'images/artists/{filename}.jpg', 'JPEG', quality=85)
        print(f'Successfully downloaded and saved {filename}')
        
    except Exception as e:
        print(f'Error downloading {filename}: {str(e)}')

# Download all images
for artist, url in artist_images.items():
    download_and_save_image(url, artist)

print('Image download complete!')
