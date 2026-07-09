/* GRID CONFIG */

let numberOfItemsInARow = 60;
let numberOfItems = numberOfItemsInARow ** 2;

const head = document.querySelector('head');
const style = document.createElement('style');
style.textContent = `    .item {
      flex-basis: calc(100% / ${numberOfItemsInARow});
    }`;
head.appendChild(style);

const container = document.querySelector('#container');

for (let i = 0; i < numberOfItems; i++) {
  const item = document.createElement('div');
  item.classList.add('item');
  container.appendChild(item);
}

container.addEventListener('mouseover', (event) => {
  let target = event.target;
  target.classList.add('hovered');
});

/* CONTROL BUTTONS */

const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', () => {
  for (let i = 0; i < numberOfItems; i++) {
    const item = container.querySelector('.item');
    container.removeChild(item);
  }
  for (let i = 0; i < numberOfItems; i++) {
    const item = document.createElement('div');
    item.classList.add('item');
    container.appendChild(item);
  }
});
