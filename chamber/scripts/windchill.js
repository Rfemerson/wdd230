const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeedApi = document.querySelector("#windSpeed")

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fortaleza&appid=e375ffcf162eb1292ef6ec40581db610&units=metric';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data  = await response.json();
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();

function titleCase(string) {
	string = string.toLowerCase();
	string = string.split(' ');
	string = string.map(function(word) {
		return word.replace(word[0], word[0].toUpperCase());
	});
	return string.join(' ');
};

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

	const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
	const desc = weatherData.weather[0].description;
	const speed = weatherData.wind.speed;

	weatherIcon.setAttribute('src', iconsrc);
	weatherIcon.setAttribute('alt', desc);
	captionDesc.textContent = titleCase(desc);
	windSpeedApi.textContent = speed;
	
}

let temp = document.querySelector("#current-temp").textContent;
let windSpeed = document.querySelector("#windSpeed").innerHTML;

if (temp <= 10 && windSpeed >= 4.8) {
	const windChill = 13.2 + (0.6215 * temp) - (11.37 * windSpeed ** 0.16) + (0.3965 * temp * windSpeed ** 0.16);
	document.querySelector("#windChill").innerHTML = Math.round(windChill) + " °C";
}
else {
	document.querySelector("#windChill").innerHTML = "N/A"
}