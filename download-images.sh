#!/bin/bash
# Script to download images from existing BAANA website

cd /Users/souravkumar/Desktop/baana-website-redesign

echo "Downloading images from baanausa.org..."

# Download hero/main images
curl -o images/hero-buddha.jpg "https://baanausa.org/wp-content/uploads/2024/01/Buddha-Statue-scaled.jpg"

# Download festival images
curl -o images/makarsankranti.jpg "https://baanausa.org/wp-content/uploads/2024/01/Makarsankranti.jpg"
curl -o images/holi.jpg "https://baanausa.org/wp-content/uploads/2024/01/Holi.jpg"
curl -o images/bihar-day.jpg "https://baanausa.org/wp-content/uploads/2024/01/Bihar-Day.jpg"
curl -o images/hartalika-teej.jpg "https://baanausa.org/wp-content/uploads/2024/01/Hartalika-Teej.jpg"
curl -o images/annual-gala.jpg "https://baanausa.org/wp-content/uploads/2024/01/Annual-Gala.jpg"
curl -o images/community-services.jpg "https://baanausa.org/wp-content/uploads/2024/01/Community-Services.jpg"

# Download event images
curl -o images/holi-event.jpg "https://baanausa.org/wp-content/uploads/2024/01/Holi.jpg"

# Download partner logos
curl -o images/partners/bijusa.png "https://baanausa.org/wp-content/uploads/2024/01/BIJUSA.png"
curl -o images/partners/bana.png "https://baanausa.org/wp-content/uploads/2024/01/BANA.png"
curl -o images/partners/dallas-gotra.png "https://baanausa.org/wp-content/uploads/2024/01/Dallas-Gotra-Foundation.png"
curl -o images/partners/mepsc.png "https://baanausa.org/wp-content/uploads/2024/01/MEPSC-Secretariat.png"
curl -o images/partners/consulate-india.png "https://baanausa.org/wp-content/uploads/2024/01/Consulate-General-of-India-Houston.png"
curl -o images/partners/iccr.png "https://baanausa.org/wp-content/uploads/2024/01/Indian-Council-for-Cultural-Relations.png"
curl -o images/partners/bihar-foundation.png "https://baanausa.org/wp-content/uploads/2024/01/Bihar-Foundation.png"

# Download gallery images (sample)
curl -o images/gallery/holi-1.jpg "https://baanausa.org/wp-content/uploads/2024/01/Holi.jpg"
curl -o images/gallery/holi-2.jpg "https://baanausa.org/wp-content/uploads/2024/01/Holi.jpg"
curl -o images/gallery/bihar-diwas-1.jpg "https://baanausa.org/wp-content/uploads/2024/01/Bihar-Day.jpg"
curl -o images/gallery/teej-1.jpg "https://baanausa.org/wp-content/uploads/2024/01/Hartalika-Teej.jpg"
curl -o images/gallery/gala-1.jpg "https://baanausa.org/wp-content/uploads/2024/01/Annual-Gala.jpg"

echo "Download complete! All images have been saved."

# Made with Bob
