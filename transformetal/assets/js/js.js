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
