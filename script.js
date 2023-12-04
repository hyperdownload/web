function createCards(data) {
    var container = document.querySelector('.container');

    data.forEach(function (card) {
        var newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.innerHTML = `<h2>${card.title}</h2><h4>${card.date}</h4><p>${card.paragraph}</p>`;

        container.appendChild(newCard);
    });
}

document.addEventListener('DOMContentLoaded', function() {
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
});

fetch('script/data.json')
    .then(response => response.json())
    .then(data => createCards(data))
    .catch(error => console.error('Error fetching data:', error));