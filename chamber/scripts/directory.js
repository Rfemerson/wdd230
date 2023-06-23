const path = 'scripts/data.json'

async function getCompanyData() {
    const response = await fetch(path);
    const data = await response.json();
    console.table(data.companies);
    displayCompanies(data.companies)
}

getCompanyData();

const displayCompanies = (companies) => {
    const business = document.querySelector("div.company");

    companies.forEach((company) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let logoImg = document.createElement('img');
        let address = document.createElement('p');
        let contact = document.createElement('p');
        let webSite = document.createElement('a');


        name.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        contact.textContent = ` ${company.contact}`;
        webSite.textContent = `Visit Our Partner: ${company.name}`;

        logoImg.setAttribute('src', company.logoPath);
        logoImg.setAttribute('alt', `logoImg of ${company.name}`);
        logoImg.setAttribute('loading', 'lazy');
        logoImg.setAttribute('width', '300');
        logoImg.setAttribute('height', '300');

        webSite.setAttribute("href", webSite.textContent)

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(contact);
        card.appendChild(logoImg);
        card.appendChild(webSite);

        business.appendChild(card);
    });
}

// const gridbutton = document.querySelector(".company");
// const listbutton = document.querySelector("#list");
// const display = document.querySelector("#directory");

// gridbutton.addEventListener("click", () => {
// 	display.classList.remove("list");
// });

// listbutton.addEventListener("click", showList); 

// function showList() {
// 	display.classList.add("list");
// }
