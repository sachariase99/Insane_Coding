// Hent DOM-elementer
const burgerIcon = document.getElementById('burgerIcon'); // Burger-ikonet
const menuList = document.getElementById('menuList'); // Menu-listen
const nav = document.querySelector('nav'); // <nav> elementet
const homeImageContainer = document.getElementById('homeImageContainer')
const flipContainer = document.getElementById('flipContainer'); // Container-elementet
const actTableCell = document.getElementsByClassName('act-table-cell'); // Elementer med klassen 'act-table-cell'
const menuItems = menuList.querySelectorAll('li'); // Henter alle LI elementer inde i menuList

// BURGER ICON ANIMATION
const bgm1 = document.getElementById('bgm-1');
const bgm2 = document.getElementById('bgm-2');
const bgm3 = document.getElementById('bgm-3');

// Lyt efter klik begivenhed på burger-ikonet
burgerIcon.addEventListener('click', () => {
    menuList.classList.toggle('active');
    nav.classList.toggle('active');
    homeImageContainer.classList.toggle('active');
    flipContainer.classList.toggle('active');
    bgm1.classList.toggle('active');
    bgm2.classList.toggle('active');
    bgm3.classList.toggle('active');

    // Loop gennem alle elementer med klassen 'act-table-cell'
    for (let i = 0; i < actTableCell.length; i++) {
        actTableCell[i].classList.toggle('active');
    }
});

// Loop gennem alle menu-items og tilføj klik-begivenhed
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', () => {
        menuList.classList.remove('active');
        nav.classList.remove('active');
        homeImageContainer.classList.toggle('active');
        flipContainer.classList.remove('active');
        bgm1.classList.remove('active');
        bgm2.classList.remove('active');
        bgm3.classList.remove('active');

        // Loop gennem alle elementer med klassen 'act-table-cell'
        for (let i = 0; i < actTableCell.length; i++) {
            actTableCell[i].classList.remove('active');
        }
    });
}
