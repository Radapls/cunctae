// Define a function to change the background image
function changeBackgroundImage(imageUrls: string[], currentIndex: number) {
    const imgElement = document.getElementById('background-image') as HTMLImageElement;
    imgElement.src = imageUrls[currentIndex];

    // Increment the currentIndex for the next image
    currentIndex = (currentIndex + 1) % imageUrls.length;

    // Set a timeout to change the background image after 3 seconds
    setTimeout(() => {
        changeBackgroundImage(imageUrls, currentIndex);
    }, 3000);
}

// Array of image URLs
const imageUrls: string[] = [
    '/monk.jpg',
    '/moon.jpg',
    '/city.jpg',
    '/desert.jpg',
    '/art.jpg',
    '/food.jpg',
    '/architecture.jpg',
];

changeBackgroundImage(imageUrls, 0);
