const burgerIcon = document.getElementById('burgerIcon');
const nav = document.querySelector('nav');

burgerIcon.addEventListener('click', () => {
    nav.classList.toggle('active')
});
