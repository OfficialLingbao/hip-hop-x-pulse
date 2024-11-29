from PIL import Image
import os

# Get the current directory
current_dir = os.path.dirname(os.path.abspath(__file__))

# Input and output paths
img_path = os.path.join(current_dir, 'favicon_source.png')
favicon_path = os.path.join(current_dir, 'favicon.ico')

# Open and resize the image
img = Image.open(img_path)
favicon_size = (64, 64)
img = img.resize(favicon_size, Image.Resampling.LANCZOS)

# Save as favicon
img.save(favicon_path, format='ICO')

print(f"Favicon created successfully at: {favicon_path}")
