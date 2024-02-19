const container = document.querySelector('.container');
const gridSize = document.querySelector('#grid-size');
const colorPicker = document.querySelector('#color-picker');
const color = document.querySelector('#color');
const random = document.querySelector('#random');
const darker = document.querySelector('#darker');

// Create grid
for (let i = 0; i < 16; i++) {
  let row = document.createElement('div');
  row.classList.add('row');
  container.appendChild(row);
  for (let j = 0; j < 16; j++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    row.appendChild(cell);
  }
}

const cells = document.querySelectorAll('.cell');

for (let j = 0; j < cells.length; j++) {
  cells[j].addEventListener('mouseover', () => {
    cells[j].style.backgroundColor = colorPicker.value;
  });
}

// Initialize buttons
gridSize.onclick = updateGridSize;
color.onclick = pickColor;
random.onclick = randomColor;

function updateGridSize() {
  const updatedGridSize = prompt("Enter a grid Size (Max: 100, Min: 16):");
  if (updatedGridSize >= 16 && updatedGridSize <= 100) {
    return newGridSize(updatedGridSize);
  } else {
    updateGridSize();
  }
}

function newGridSize(num) {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  for (let i = 0; i < num; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let j = 0; j < num; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      row.appendChild(cell);
    }
  }
  const cells = document.querySelectorAll('.cell');
  for (let j = 0; j < cells.length; j++) {
    cells[j].addEventListener('mouseover', () => {
      cells[j].style.backgroundColor = colorPicker.value;
    });
  }
} 

function pickColor() {
  for (let j = 0; j < cells.length; j++) {
    cells[j].addEventListener('mouseover', () => {
      cells[j].style.backgroundColor = colorPicker.value;
    });
  }
}

function randomColor() {
  const cells = document.querySelectorAll('.cell');
  function randomNumber() {
    const colorNumber = Math.floor(Math.random() * 256);
    return colorNumber;
  }
  for (let j = 0; j < cells.length; j++) {
    cells[j].addEventListener('mouseover', () => {
      cells[j].style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    });
  }
}


