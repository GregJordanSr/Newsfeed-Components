
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu reference. 
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class

// create a reference to the ".menu-button" class

// Using your menuButton reference, add a click handler that calls toggleMenu

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu);
