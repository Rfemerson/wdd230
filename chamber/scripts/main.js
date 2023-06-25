
const today = new Date();

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const currentDayOfWeek = weekdays[today.getDay()];

const currentDayOfMonth = today.getDate();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const currentMonth = months[today.getMonth()];

const currentYear = today.getFullYear();

const currentDateFormatted = `${currentDayOfWeek}, ${currentDayOfMonth} ${currentMonth} ${currentYear}`;

document.querySelector('#current-day').innerHTML = currentDateFormatted;

const dateOfLastModifications = document.lastModified;

document.getElementById("last-update").innerHTML  = dateOfLastModifications;

document.documentElement.lang = navigator.language || navigator.userLanguage;

document.querySelector('#currentYear').textContent = currentYear;

const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});

document.addEventListener('DOMContentLoaded', function() {
	const currentDate = new Date();
	const dayOfWeek = currentDate.getDay();
  
	if (dayOfWeek === 1 || dayOfWeek === 2) {
	  const banner = document.createElement('div');
	  banner.classList.add('banner');
	  banner.textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
	  document.body.prepend(banner);
	}
  });

// Set the value of the hidden field to the current date and time
// const loadedTime = new Date().toLocaleString();
// document.getElementById("form-loaded-time").value = loadedTime;

const path = 'scripts/data.json'

async function getCompanyData() {
    const response = await fetch(path);
    const data = await response.json();
    spotlight(data.companies[0], "spotlight-1");
	spotlight(data.companies[4], "spotlight-2");
	spotlight(data.companies[7], "spotlight-3");
}

getCompanyData();

const spotlight = (company, spotlightId) => {
    const business = document.querySelector(`#${spotlightId}`);

	let name = document.createElement('h4');
	let logoImg = document.createElement('img');
	let contact = document.createElement('p');
	let webSite = document.createElement('a');


	name.textContent = `${company.name}`;
	contact.textContent = ` ${company.contact}`;
	webSite.textContent = `Our Partner: ${company.name}`;

	logoImg.setAttribute('src', company.logoPath);
	logoImg.setAttribute('alt', `logoImg of ${company.name}`);
	logoImg.setAttribute('loading', 'lazy');
	logoImg.setAttribute('width', '150');
	logoImg.setAttribute('height', '150');

	webSite.setAttribute("href", webSite.textContent)

	business.appendChild(logoImg);
	business.appendChild(name);
	business.appendChild(contact);
	business.appendChild(webSite);
}
