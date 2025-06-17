document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Toggle para el menú hamburguesa
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
        if (!nav.classList.contains('active')) {
            dropdownMenu.classList.remove('active');
        }
    });

    // Toggle para el dropdown en escritorio (hover) y móvil (click)
    if (window.innerWidth > 768) {
        dropdown.addEventListener('mouseenter', () => {
            dropdownMenu.classList.add('active');
        });
        dropdown.addEventListener('mouseleave', () => {
            dropdownMenu.classList.remove('active');
        });
    } else {
        dropdown.addEventListener('click', (e) => {
            e.preventDefault();
            dropdownMenu.classList.toggle('active');
        });
    }

    // Cerrar menú y dropdown si se hace clic fuera de ellos
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
            dropdownMenu.classList.remove('active');
        }
        if (window.innerWidth > 768 && dropdown.contains(e.target) && !dropdownMenu.contains(e.target)) {
            // No hacer nada si se hace click en el propio dropdown pero no en un item
        } else if (window.innerWidth > 768 && !dropdown.contains(e.target)) {
            dropdownMenu.classList.remove('active');
        }
    });

    // Cerrar el menú móvil y el dropdown cuando se hace clic en un enlace del menú
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
            }
            dropdownMenu.classList.remove('active');
        });
    });

    // Cerrar el menú si se redimensiona la ventana a un tamaño de escritorio
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
            dropdownMenu.classList.remove('active');
        }
    });
});