const apiKey = 'a9a1c571dea12afa7d4d44dc1abde621';
const city = 'Carlsbad'; // Substitua pela cidade desejada

async function getCurrentWeather() {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
      throw new Error('Failed to fetch current weather data');
    }
    const data = await response.json();

    const currentTemp = data.main.temp;
    const currentDesc = data.weather[0].description;
    const currentHumidity = data.main.humidity;

    document.getElementById('current-temp').textContent = currentTemp;
    document.getElementById('current-desc').textContent = currentDesc;
    document.getElementById('current-humidity').textContent = currentHumidity;
  } catch (error) {
    console.error(error);
  }
}

async function get3DayForecast() {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&cnt=30`);
    if (!response.ok) {
      throw new Error('Failed to fetch 3-day forecast data');
    }
    const data = await response.json();
    console.log(data)
    const forecastList = document.getElementById('forecast-list');
    forecastList.innerHTML = '';

    const uniqueDates = [];
    data.list.forEach(forecast => {
      const date = new Date(forecast.dt_txt.split(' ')[0]);
      const dateString = date.toLocaleDateString();

      if (!uniqueDates.includes(dateString)) {
        uniqueDates.push(dateString);

        const tempMin = forecast.main.temp_min;
        const tempMax = forecast.main.temp_max;
        const description = forecast.weather[0].description;
        const iconCode = forecast.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

        const forecastItem = document.createElement('p');
        forecastItem.innerHTML = `
          <img src="${iconUrl}" alt="${description}">
          ${dateString} - ${description}, Min: ${tempMin}°C, Max: ${tempMax}°C
        `;
        forecastList.appendChild(forecastItem);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

// Chamar as funções para obter os dados
getCurrentWeather();
get3DayForecast();
