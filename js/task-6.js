function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxesHandler() {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert('Please enter a number between 1 and 100');
  }

  input.value = '';
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxesHandler() {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', createBoxesHandler);
destroyButton.addEventListener('click', destroyBoxesHandler);