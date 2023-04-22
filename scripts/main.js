const currentDate = document.querySelector("#current-date");

try {
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};
	currentDate.innerHTML = `${new Date().toLocaleDateString("en-US", options)}`;
} catch (e) {
	console.log("Error with code or your browser does not support Locale");
}

var dateOfLastModifications = document.lastModified;

  document.getElementById("last-update").innerHTML  = dateOfLastModifications;