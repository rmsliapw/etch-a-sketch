'use strict';

const grid = document.querySelector('.grid');
const input = document.querySelector('#input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const value = getValue();
  if (value) {
    generateGrid(value);
  }
});

// First Load
generateGrid();

function getValue() {
  console.log(input.value);
  return +input.value;
}

function generateGrid(inputValue = 16) {
  grid.innerHTML = '';
  const cell = document.createElement('div');
  cell.classList.add('grid-cell');
  cell.style.width = (640 / inputValue) + "px";
  cell.style.height = (640 / inputValue) + "px";
  for (let i = 0; i < (inputValue ** 2); i++) {
    grid.append(cell.cloneNode(true));
  }
  paintCells();
}

function paintCells() {
  const cells = document.querySelectorAll('.grid-cell');
  console.log(cells);
  cells.forEach(cell => {
    cell.addEventListener('mousemove', (e) => {
      e.target.style.backgroundColor = 'black';
      console.log('Moved');
    })
  })
}

