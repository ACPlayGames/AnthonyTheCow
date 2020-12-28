const DATE = new Date();
const NAV = document.getElementById('nav');
const NAVBAR = document.getElementById('navbar');

var navOpen = false;

document.getElementById(
  'copyright'
).innerHTML = `© ${DATE.getFullYear()} Anthony Chen & Ducky. All rights reserved.`;

function toggleNav() {
  if (!navOpen) {
    // show navbar
    navOpen = true;
    NAV.style.display = 'block';
    NAVBAR.className += ' w3-pale-green';
  } else {
    // hide navbar
    navOpen = false;
    NAV.style.display = 'none';
    NAVBAR.className = NAVBAR.className.replace(' w3-pale-green', '');
  }
}
