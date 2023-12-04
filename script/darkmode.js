var toggle = document.getElementById('dark-mode');
var header = document.querySelector('header')
var container = document.querySelector('.container');
var footer = document.querySelector('.footer');
var cards = container.querySelectorAll('.card');

toggle.onclick = function(){
    cards.forEach(function(card) {
        card.classList.toggle('active');
    });
    footer.classList.toggle('active');
    toggle.classList.toggle('active');
    header.classList.toggle('active');
    container.classList.toggle('active');
}