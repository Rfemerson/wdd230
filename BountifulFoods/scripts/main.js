const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});

function getTotalDrinks() {
	const totalDrinks = localStorage.getItem('totalDrinks');
	return totalDrinks ? parseInt(totalDrinks, 10) : 0;
}

function updateTotalDrinks() {
	const totalDrinks = getTotalDrinks();
	document.getElementById('total-drinks').textContent = totalDrinks;
}

window.addEventListener('load', updateTotalDrinks);

window.addEventListener('storage', updateTotalDrinks);

const dateOfLastModifications = document.lastModified;

document.getElementById("last-update").innerHTML  = dateOfLastModifications;

document.documentElement.lang = navigator.language || navigator.userLanguage;

