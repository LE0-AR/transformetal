function showDetails(detailsId) {
    var details = document.querySelectorAll(".details");
    details.forEach(function (detail) {
        detail.classList.remove("active");
    });
    document.getElementById(detailsId).classList.add("active");
}

function hideDetails(detailsId) {
    document.getElementById(detailsId).classList.remove("active");
}

/* Script para el menú de imágenes */
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = localStorage.getItem('imgId') ? localStorage.getItem('imgId') : 1;

document.addEventListener('DOMContentLoaded', () => {
    slideImage();
});

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        localStorage.setItem('imgId', imgId);
        slideImage();
    });
});

function slideImage() {
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

/*Menu productos */
document.addEventListener('DOMContentLoaded', function() {
    const submenuLinks = document.querySelectorAll('.has-submenu');

    submenuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Cerrar cualquier submenú abierto
            submenuLinks.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.parentElement.classList.remove('active');
                }
            });

            // Abrir el submenú del elemento clicado
            const parentLi = this.parentElement;
            parentLi.classList.toggle('active');
        });
    });

    // Cerrar submenús al hacer clic fuera de ellos
    document.addEventListener('click', function(event) {
        const isClickInside = event.target.closest('.categories');
        if (!isClickInside) {
            submenuLinks.forEach(link => {
                const parentLi = link.parentElement;
                parentLi.classList.remove('active');
            });
        }
    });
});
