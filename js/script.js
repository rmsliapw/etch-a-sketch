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
  const cell = document.createElement('div');
  cell.classList.add('grid-cell');
  cell.style.width = (640 / inputValue) + "px";
  cell.style.height = (640 / inputValue) + "px";
  console.log(cell.width, cell.height);
  for (let i = 0; i < (inputValue ** 2); i++) {
    grid.append(cell.cloneNode(true));
  }
}

