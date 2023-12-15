function createCards(data) {
    var container = document.querySelector('.container');

    data.forEach(function (card) {
        var newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.innerHTML = `<h2>${card.title}</h2><h4 class="date">${card.date}</h4><p>${card.paragraph}</p>`;

        container.appendChild(newCard);
    });
}

fetch('script/data.json')
    .then(response => response.json())
    .then(data => createCards(data))
    .catch(error => console.error('Error fetching data:', error));

    
