const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json'

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets)
}

getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector("div.cards");
    const fullName = '${prophet.name} ${prop}';

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let dateOfBirth = document.createElement('p');
        let placeOfBirth = document.createElement('p');
        let children = document.createElement('p');
        let dateOfDeath = document.createElement('p');
        // let placeOfBirth = document.createElement('p');


        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;
        children.textContent = `Children: ${prophet.numofchildren}`;
        dateOfDeath.textContent = `Death: ${prophet.death}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        
        card.appendChild(h2);
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(children);
        if (prophet.death != null) {
            card.appendChild(dateOfDeath);
        };
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}