const dateOfLastModifications = document.lastModified;

  document.getElementById("last-update").innerHTML  = dateOfLastModifications;

document.documentElement.lang = navigator.language || navigator.userLanguage;

const currentYear = new Date().getFullYear();
document.querySelector('#currentYear').textContent = currentYear;