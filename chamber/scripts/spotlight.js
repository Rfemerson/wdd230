const path = 'scripts/data.json';

async function getCompanyData() {
    try {
        const response = await fetch(path);
        const data = await response.json();
        console.table(data.companies);
        spotlight(data.companies[0], "spotlight-1" )
        spotlight(data.companies[4], "spotlight-2");
        spotlight(data.companies[7], "spotlight-3");
    } catch (error) {
        console.error('Erro ao obter dados da empresa:', error);
    }
}

getCompanyData();

const spotlight = (company, spotlightId) => {
    const business = document.querySelector(`#${spotlightId}`);

    let name = document.createElement('h4');
    let logoImg = document.createElement('img');
    let contact = document.createElement('p');
    let webSite = document.createElement('a');

    name.textContent = company.name;
    contact.textContent = company.contact;
    webSite.textContent = `Visit Our Partner: ${company.name}`;

    logoImg.src = company.logoPath;
    logoImg.alt = `Logo of ${company.name}`;
    logoImg.loading = 'lazy';
    logoImg.width = '150';
    logoImg.height = '150';

    webSite.href = company.link;
    
    business.appendChild(logoImg);
    business.appendChild(name);
    business.appendChild(contact);
    business.appendChild(webSite);
};