const hamburger = document.querySelector('.hamburger').
        menu = document.querySelector('.menu').
        closeElem = document.querySelector('menu_close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

