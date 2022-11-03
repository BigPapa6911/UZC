var botaoMenu = document.querySelector('.menu');
var menu = document.querySelector('.menuLateral');

botaoMenu.addEventListener('click',()=>{
    menu.classList.toggle('menu-ativo')
})