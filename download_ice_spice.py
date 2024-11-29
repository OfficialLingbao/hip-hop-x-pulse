import os
import requests
from PIL import Image
from io import BytesIO

def download_and_save_image(url, filename):
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        
        # Open the image
        img = Image.open(BytesIO(response.content))
        
        # Convert to RGB if necessary
        if img.mode in ('RGBA', 'LA'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            background.paste(img, mask=img.split()[-1])
            img = background
        
        # Resize image
        img = img.resize((400, 400), Image.Resampling.LANCZOS)
        
        # Create directory if it doesn't exist
        os.makedirs('images/artists', exist_ok=True)
        
        # Save the image
        output_path = os.path.join('images/artists', filename)
        img.save(output_path, 'JPEG', quality=95)
        print(f'Successfully downloaded and saved {output_path}')
        return True
        
    except Exception as e:
        print(f'Error downloading image: {str(e)}')
        return False

# Ice Spice image URL - using a more reliable source
url = "https://static01.nyt.com/images/2023/01/27/multimedia/27popcast-ice-spice-01-hfwt/27popcast-ice-spice-01-hfwt-mediumSquareAt3X.jpg"
success = download_and_save_image(url, 'ice-spice.jpg')
