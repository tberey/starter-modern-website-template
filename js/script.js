document.getElementById('header-js-banner').style.display = 'none';

//Burger Button and Menu.

    document.getElementById('header-menu').style.left = '-130px';
    function toggleMenu() {
        const menu = document.getElementById('header-menu');
        const burgerButton = document.querySelector('.header-menu-burger-button');

        const isOpen = menu.style.left === '0px';
        menu.style.transition = 'left 0.4s ease-in-out';
        menu.style.left = isOpen ? '-130px' : '0px';

        burgerButton.style.transition = 'left 0.4s ease-in-out, top 0.4s ease-in-out';
        burgerButton.style.left = isOpen ? '25px' : '130px';
        burgerButton.style.top = isOpen ? '25px' : '0px';
        burgerButton.style.borderRadius = isOpen ? '20px' : '0px 0px 20px 0px';

        setTimeout(() => {
            burgerButton.style.transition = '';
        }, 400);
    }

    function burgerIcon(x) {
        x.classList.toggle("transform");
    }



//Header Image Auto-Scroller.

    const images = document.querySelectorAll('.header-image-scroller');
    let currentIndex = 0;

    function fadeImages() {
        images[currentIndex].classList.remove('active-image');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active-image');
    }

    setInterval(fadeImages, 4000);



// Header Sticky Content.

    function handleScroll() {
        var triggerElement = document.getElementById('sticky-content-trigger');
        var scrollY = window.scrollY || window.pageYOffset;

        // Check if the user has scrolled past the trigger element or if user has scrolled down by at least 500px.
        if (scrollY > triggerElement.offsetTop || scrollY > 600) {
            // Show the sticky content.
            document.querySelector('.header-sticky-content').classList.add('header-sticky-content-show');
        } else {
            // Hide the sticky content.
            document.querySelector('.header-sticky-content').classList.remove('header-sticky-content-show');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();



// Scroll-to-top Footer Button.

    function toggleScrollToTopButton() {
        const scrollToTopBtn = document.querySelector('.footer-top-button');
        scrollToTopBtn.style.bottom = window.getComputedStyle(document.querySelector(".footer-banner")).getPropertyValue('height');

        const scrollY = window.scrollY || window.pageYOffset;
        if (scrollY > 100) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }

    // Scroll to the top when button is clicked
    document.querySelector('.footer-top-button').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', toggleScrollToTopButton);

    // Initial check on page load
    toggleScrollToTopButton();
