$(document).ready(function() {
    var toggle = document.getElementById('dark-mode');
    var header = document.querySelector('header');
    var lis = document.querySelectorAll('.li');
    var container = document.querySelector('.container');
    var footer = document.querySelector('.footer');
    var cards = document.querySelectorAll('.card');
   
    $('#dark-mode').click(function(){
        console.log(cards)
        cards.forEach(function(card) {
            console.log(card);
            card.classList.toggle('active');
        });
        lis.forEach(function(li) {
            li.classList.toggle('active');
        });
        footer.classList.toggle('active');
        toggle.classList.toggle('active');
        header.classList.toggle('active');
        container.classList.toggle('active');
    });
});
