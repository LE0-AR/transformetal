/*Menu de inicio */
document.addEventListener('DOMContentLoaded', function () {
    const productosLink = document.getElementById('productos-link');
    const productosSubmenu = document.getElementById('productos-submenu');

    productosLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        productosSubmenu.classList.toggle('show'); // Alternar la clase 'show' para mostrar u ocultar el menú
    });

    document.addEventListener('click', function (event) {
        // Verificar si el clic fue fuera del enlace "Productos" y su menú desplegable
        if (!event.target.closest('#productos-link') && !event.target.closest('#productos-submenu')) {
            productosSubmenu.classList.remove('show'); // Ocultar el menú si se hace clic fuera de él
        }
    });
});
/*parte productos  */


document.addEventListener("DOMContentLoaded", function () {
    const mainCategories = document.querySelectorAll('.main-category');

    mainCategories.forEach(mainCategory => {
        mainCategory.addEventListener('click', function (event) {
            event.preventDefault(); // Prevenir comportamiento por defecto si es un enlace
            const submenu = mainCategory.nextElementSibling;

            // Toggle la visibilidad del submenú al hacer clic
            if (submenu.classList.contains('nav-submenu')) {
                submenu.classList.toggle('show');
            }
        });
    });
 
    // Cierra el submenú si se hace clic fuera de él
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.main-category') && !event.target.closest('.nav-submenu')) {
            document.querySelectorAll('.nav-submenu.show').forEach(openSubmenu => {
                openSubmenu.classList.remove('show'); // Oculta el submenú si se hace clic fuera de él
            });
        }
    });
});
/**industrias  */
document.addEventListener('DOMContentLoaded', function () {
    const industriasLink = document.getElementById('industrias-link');
    const industriasSubmenu = document.getElementById('industrias-submenu');

    industriasLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        industriasSubmenu.classList.toggle('show'); // Alternar la clase 'show' para mostrar u ocultar el menú
    });

    document.addEventListener('click', function (event) {
        // Verificar si el clic fue fuera del enlace "Industrias" y su menú desplegable
        if (!event.target.closest('#industrias-link') && !event.target.closest('#industrias-submenu')) {
            industriasSubmenu.classList.remove('show'); // Ocultar el menú si se hace clic fuera de él
        }
    });
});

/*servicios */
document.addEventListener("DOMContentLoaded", function () {
    const serviciosLink = document.getElementById('servicios-link');
    const serviciosSubmenu = document.getElementById('servicios-submenu');

    serviciosLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        serviciosSubmenu.classList.toggle('show'); // Alternar la visibilidad del submenú
    });

    // Cierra el submenú si se hace clic fuera de él
    document.addEventListener('click', function (event) {
        if (!event.target.closest('#servicios-link') && !event.target.closest('#servicios-submenu')) {
            serviciosSubmenu.classList.remove('show'); // Oculta el submenú si se hace clic fuera de él
        }
    });
});

/*Nosotros*/
document.addEventListener("DOMContentLoaded", function () {
    const nosotrosLink = document.getElementById('nosotros-link');
    const nosotrosSubmenu = document.getElementById('nosotros-submenu');

    nosotrosLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        nosotrosSubmenu.classList.toggle('show'); // Alternar la visibilidad del submenú
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('#nosotros-link') && !event.target.closest('#nosotros-submenu')) {
            nosotrosSubmenu.classList.remove('show'); // Oculta el submenú si se hace clic fuera de él
        }
    });
});