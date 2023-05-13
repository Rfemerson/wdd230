   // Obter a data atual
   const today = new Date();

   const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

   const currentDayOfWeek = weekdays[today.getDay()];

   const currentDayOfMonth = today.getDate();

   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

   const currentMonth = months[today.getMonth()];

   const currentYear = today.getFullYear();

   const currentDateFormatted = `${currentDayOfWeek}, ${currentDayOfMonth} ${currentMonth} ${currentYear}`;

   document.querySelector('#current-day').innerHTML = currentDateFormatted;