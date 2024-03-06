import { imageUrls } from '@data/backgroundImages';

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

changeBackgroundImage(imageUrls, 0);
