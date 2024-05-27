const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;

// Llama a la función slidefun para mostrar la primera imagen
slidefun(counter);

// Inicia un temporizador para cambiar automáticamente las imágenes
let timer = setInterval(autoSlide, 8000);

// Función para cambiar automáticamente las imágenes
function autoSlide() {
	counter += 1;
	slidefun(counter);
}

// Función para avanzar o retroceder manualmente en el carrusel
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}

// Función para cambiar a una imagen específica en el carrusel
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}

// Función para reiniciar el temporizador cada vez que se cambia manualmente una imagen
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

// Función para mostrar la imagen correspondiente según el índice proporcionado
function slidefun(n) {
	let i;
	for(i = 0; i < myslide.length; i++){
		myslide[i].style.display = "none"; // Oculta todas las imágenes
	}
	for(i = 0; i < dot.length; i++) {
		dot[i].className = dot[i].className.replace(' active', ''); // Quita la clase 'active' de todos los puntos
	}
	if(n > myslide.length){
	   counter = 1; // Vuelve al principio si se llega al final del carrusel
	}
	if(n < 1){
	   counter = myslide.length; // Va al final si se llega al principio del carrusel
	}
	myslide[counter - 1].style.display = "block"; // Muestra la imagen correspondiente
	dot[counter - 1].className += " active"; // Marca el punto correspondiente como activo
}


// Evento que muestra u oculta los submenús al hacer clic en las categorías principales
document.addEventListener("DOMContentLoaded", function() {
    const mainCategories = document.querySelectorAll('.main-category');

    mainCategories.forEach(mainCategory => {
        mainCategory.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir comportamiento por defecto si es un enlace
            const submenu = mainCategory.nextElementSibling;

            // Toggle la visibilidad del submenú al hacer clic
            if (submenu.classList.contains('show')) {
                submenu.classList.remove('show'); // Oculta el submenú si está visible
            } else {
                // Cierra todos los submenús abiertos antes de abrir el nuevo
                document.querySelectorAll('.nav-submenu.show').forEach(openSubmenu => {
                    openSubmenu.classList.remove('show');
                });
                submenu.classList.add('show'); // Muestra el submenú correspondiente
            }
        });
    });
 
    // Cierra el submenú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.main-category') && !event.target.closest('.nav-submenu')) {
            document.querySelectorAll('.nav-submenu.show').forEach(openSubmenu => {
                openSubmenu.classList.remove('show'); // Oculta el submenú si se hace clic fuera de él
            });
        }
    });
});

