
    const menuButton = document.getElementById('mobile-menu-button');
    const navbar= document.getElementById('nav-bar');
    const closeButton = document.getElementById('close-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-overlay');
    const menuLinks = mobileMenu.querySelectorAll('a');

    // Open menu
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
        navbar.classList.add('hidden');
    });

    // Close menu
    closeButton.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        overlay.classList.add('hidden');
        // navbar.classList.add('');
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        overlay.classList.add('hidden');
    });

    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            overlay.classList.add('hidden');
        });
    });

const text = "Hello There";
const typingSpeed = 100;
const pause = 1200;
let i = 0;

const el = document.getElementById("typeText");

function typeWriter() {
  if (i < text.length) {
    el.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    setTimeout(() => {
      el.textContent = "";
      i = 0;
      typeWriter();
    }, pause);
  }
}

typeWriter();

