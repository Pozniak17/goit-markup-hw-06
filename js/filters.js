const filtersEl = document.querySelector('.filters-set');

console.log(filtersEl);

filtersEl.addEventListener('click', onFiltersBtnClick);

function onFiltersBtnClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(event.target.textContent);
}
