const list = document.querySelectorAll('.list');

function activarLink(element) {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click',activarLink));

            