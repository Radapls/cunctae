// Define a function to change the background image
function changeBackgroundImage(imageUrls: string[], currentIndex: number) {
    document.documentElement.style.transition = 'background-image 1s ease-in-out';
    document.documentElement.style.backgroundImage = `url(${imageUrls[currentIndex]})`;
    document.documentElement.style.backgroundBlendMode = 'luminosity'

    // Increment the currentIndex for the next image
    currentIndex = (currentIndex + 1) % imageUrls.length;

    // Set a timeout to change the background image after 3 seconds
    setTimeout(() => {
        changeBackgroundImage(imageUrls, currentIndex);
    }, 3000);
}

// Array of image URLs
const imageUrls = [
    'src/assets/images/monk.jpg',
    'src/assets/images/moon.jpg',
    'src/assets/images/city.jpg',
    'src/assets/images/desert.jpg',
    'src/assets/images/art.jpg',
    'src/assets/images/food.jpg',
    'src/assets/images/architecture.jpg',
];

changeBackgroundImage(imageUrls, 0);
