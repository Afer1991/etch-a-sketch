const container = document.querySelector('.container');
const gridSize = document.querySelector('#grid-size');

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
    cells[j].style.backgroundColor = '#000';
  });
}

gridSize.onclick = updateGridSize;

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
      cells[j].style.backgroundColor = '#000';
    });
  }
} 
