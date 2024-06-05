const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;

// Llama a la función slidefun para mostrar la primera imagen
slidefun(counter);

// Inicia un temporizador para cambiar automáticamente las imágenes
let timer = setInterval(autoSlide, 10000);

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
	timer = setInterval(autoSlide, 10000);
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

