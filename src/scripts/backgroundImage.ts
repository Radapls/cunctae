// Define a function to change the background image
function changeBackgroundImage(imageUrls: string[], altTexts: string[], currentIndex: number)
{
    const imgElement = document.getElementById('background-image') as HTMLImageElement;

    // Apply transition effect
    imgElement.style.transition = 'opacity 1s ease-in-out';

    // Fade out the current image
    imgElement.style.opacity = '0';

    // Wait for the fade-out transition to complete before changing the image
    setTimeout(() =>
    {
        // Change the background image
        imgElement.src = imageUrls[ currentIndex ];
        imgElement.alt = altTexts[ currentIndex ];

        // Fade in the new image
        imgElement.style.opacity = '0.5';

        // Increment the currentIndex for the next image
        currentIndex = (currentIndex + 1) % imageUrls.length;

        // Set a timeout to change the background image after 3 seconds
        setTimeout(() =>
        {
            changeBackgroundImage(imageUrls, altTexts, currentIndex);
        }, 3000);
    }, 1000); // Wait for 1 second for the fade-out transition
}

// Array of image URLs
const imageUrls: string[] = [
    '/monk.jpg',
    '/moon.jpg',
    '/city.jpg',
    '/desert.jpg',
    '/art.jpg',
    '/people.jpg',
    '/architecture.jpg',
];

const altTexts: string[] = [
    'Monk - Photo by Robin Benad on Unsplash',
    'Moon - Photo by Mike Petrucci on Unsplash',
    'City - Photo by Anthony DELANOIX on Unsplash',
    'Desert - Photo by Wolfgang Hasselmann on Unsplash',
    'Art - Photo by Alp Ancel on Unsplash',
    'People - Photo by Ryoji Iwata on Unsplash',
    'Architecture - Photo by Denis Tuksar on Unsplash',
];

changeBackgroundImage(imageUrls, altTexts, 0);
