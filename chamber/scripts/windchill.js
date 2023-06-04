let temp = document.querySelector("#temperature").innerHTML;
let windSpeed = document.querySelector("#windSpeed").innerHTML;

if (temp <= 10 && windSpeed >= 4.8) {
	const windChill = 13.2 + (0.6215 * temp) - (11.37 * windSpeed ** 0.16) + (0.3965 * temp * windSpeed ** 0.16);
	document.querySelector("#windChill").innerHTML = Math.round(windChill) + " °C";
}
else {
	document.querySelector("#windChill").innerHTML = "N/A"
}