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

# Ice Spice image URL - using a reliable source
url = "https://www.billboard.com/wp-content/uploads/2023/07/ice-spice-cr-eddie-lee-billboard-1548.jpg"
success = download_and_save_image(url, 'ice-spice.jpg')
