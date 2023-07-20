const path = 'scripts/fruits.json';

async function getFruitsData() {
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data.fruits;
  } catch (error) {
    console.error('Failed to fetch fruits data:', error);
    return [];
  }
}

async function fillFruitsOptions() {
  const selectElements = document.querySelectorAll('select');
  const fruitsData = await getFruitsData();

  fruitsData.forEach(fruit => {
    const optionElement = document.createElement('option');
    optionElement.textContent = fruit.name;
    optionElement.value = fruit.name;

    selectElements.forEach(select => {
      select.appendChild(optionElement.cloneNode(true));
    });
  });
}

function calculateNutrients(selectedFruits, fruitsData) {
  const totalNutrients = {
    carbs: 0,
    proteins: 0,
    fats: 0,
    sugars: 0,
    calories: 0,
  };

  selectedFruits.forEach(fruitName => {
    const fruit = fruitsData.find(item => item.name === fruitName);
    if (fruit) {
      totalNutrients.carbs += fruit.carbs;
      totalNutrients.proteins += fruit.proteins;
      totalNutrients.fats += fruit.fats;
      totalNutrients.sugars += fruit.sugars;
      totalNutrients.calories += fruit.calories;
    }
  });

  return totalNutrients;
}

function updateTotalDrinks() {
  const totalDrinks = localStorage.getItem('totalDrinks') || 0;
  document.getElementById('total-drinks').textContent = totalDrinks;
}

window.addEventListener('load', updateTotalDrinks);

function showOrderOutput(event) {
  event.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const specialInstructions = document.getElementById('special-instructions').value;
  const orderDate = new Date().toLocaleDateString();

  const selectedFruits = Array.from(document.querySelectorAll('select')).map(select => select.value);

  getFruitsData()
    .then(fruitsData => {
      const totalNutrients = calculateNutrients(selectedFruits, fruitsData);

      document.getElementById('output-first-name').textContent = firstName;
      document.getElementById('output-email').textContent = email;
      document.getElementById('output-phone').textContent = phone;
      document.getElementById('order-date').textContent = orderDate;

      const outputFruitsList = document.getElementById('output-fruits');
      outputFruitsList.innerHTML = '';
      selectedFruits.forEach(fruitName => {
        const listItem = document.createElement('li');
        listItem.textContent = fruitName;
        outputFruitsList.appendChild(listItem);
      });

      document.getElementById('output-carbs').textContent = totalNutrients.carbs.toFixed(1);
      document.getElementById('output-proteins').textContent = totalNutrients.proteins.toFixed(1);
      document.getElementById('output-fats').textContent = totalNutrients.fats.toFixed(1);
      document.getElementById('output-sugars').textContent = totalNutrients.sugars.toFixed(1);
      document.getElementById('output-calories').textContent = totalNutrients.calories.toFixed(1);

      document.getElementById('order-output').style.display = 'block';

      const totalDrinks = parseInt(localStorage.getItem('totalDrinks')) || 0;
      localStorage.setItem('totalDrinks', totalDrinks + 1);
      updateTotalDrinks();
      
    })
    .catch(error => console.error('Failed to fetch fruits data:', error));
}

const form = document.getElementById('order-form');
form.addEventListener('submit', showOrderOutput);

getFruitsData()
  .then(() => fillFruitsOptions());
