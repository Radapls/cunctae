// Get the current URL pathname
let url = window.location.pathname;

// Get all anchor elements inside the navigation
let links = document.querySelectorAll<HTMLAnchorElement>('nav a');

// Iterate through each anchor element
links.forEach(link =>
{
    // Compare the href attribute to the current URL pathname
    if (link.getAttribute('href') === url)
    {
        // If they match, change the color of the link
        link.style.color = 'var(--deep-champagne)'; // Change the color to your desired color
    }
});


// Obtener referencias a los elementos del DOM
const menuButton = document.getElementById('menu');
const closeButton = document.getElementById('close');
const mobileMenu = document.getElementById('mobile-menu');

// Ocultar el botón de cerrar y el menú móvil inicialmente
closeButton!.style.display = 'none';
mobileMenu!.style.display = 'none';

// Agregar un evento clic al botón de menú
menuButton!.addEventListener('click', function() {
    // Mostrar el botón de cerrar y el menú móvil
    closeButton!.style.display = 'block';
    mobileMenu!.style.display = 'block';

    // Ocultar el botón de menú
    menuButton!.style.display = 'none';
});

// Agregar un evento clic al botón de cerrar
closeButton!.addEventListener('click', function() {
    // Ocultar el botón de cerrar y el menú móvil
    closeButton!.style.display = 'none';
    mobileMenu!.style.display = 'none';

    // Mostrar el botón de menú
    menuButton!.style.display = 'block';
});
