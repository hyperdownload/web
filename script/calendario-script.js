function createCards(data) {
    var container = document.querySelector('.container');

    // Iterate over the JSON data
    data.forEach(function (card) {
        // Create card element
        var newCard = document.createElement('div');
        newCard.classList.add('card');

        // Add content to the card
        newCard.innerHTML = `<h2>${card.day}</h2><h4>${card.date}</h4><p>${card.paragraph}</p>`;

        // Add the card to the container
        container.appendChild(newCard);
    });
}

// Fetch data from JSON file
fetch('script/calendario.json')
    .then(response => response.json())
    .then(data => createCards(data))
    .catch(error => console.error('Error fetching data:', error));