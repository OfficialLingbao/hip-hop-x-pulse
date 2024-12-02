import requests
from PIL import Image
from io import BytesIO
import os

def create_favicon():
    # Direct URL to the Twitter profile picture
    url = "https://pbs.twimg.com/profile_images/1863701002148290560/qTvjqRiN_400x400.jpg"
    
    try:
        # Send a GET request to the URL
        response = requests.get(url)
        response.raise_for_status()
        
        # Open the image using PIL
        img = Image.open(BytesIO(response.content))
        
        # Convert to RGBA if not already
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
        
        # Create favicon with multiple sizes
        sizes = [(16, 16), (32, 32), (48, 48)]
        
        # Save as ICO file with multiple sizes
        img.save('favicon.ico', format='ICO', sizes=sizes)
        print("Favicon created successfully!")
        
    except Exception as e:
        print(f"Error creating favicon: {str(e)}")

if __name__ == "__main__":
    create_favicon()
