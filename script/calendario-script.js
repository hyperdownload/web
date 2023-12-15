function createCards(data) {
    var container = document.querySelector('.container');

    // Iterate over the JSON data
    data.forEach(function (card) {
        // Create card element
        var newCard = document.createElement('div');
        newCard.classList.add('card');

        // Add content to the card
        newCard.innerHTML = `<h2>${card.day}</h2><p>${card.p1}</p><p>${card.p2}</p><p>${card.p3}</p><p>${card.p4}</p><p>${card.p5}</p>`;

        // Add the card to the container
        container.appendChild(newCard);
    });
}

// Fetch data from JSON file
fetch('script/calendario.json')
    .then(response => response.json())
    .then(data => createCards(data))
    .catch(error => console.error('Error fetching data:', error));