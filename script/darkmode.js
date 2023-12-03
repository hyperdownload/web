var toggle = document.getElementById('dark-mode');
var header = document.querySelector('header')
var container = document.querySelector('.container');
var card = document.querySelector('.card');
var footer = document.querySelector('.footer');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    header.classList.toggle('active');
    container.classList.toggle('active');
    card.classList.toggle('active');
    footer.classList.toggle('active');
}