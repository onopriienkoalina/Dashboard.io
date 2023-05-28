"use strict";
const input = document.querySelector('.dashboardInput');
const label = document.querySelector('.dashboardSearchLabel');
const statusCells = document.querySelectorAll('.dashboardTableStatus');

  input.addEventListener('focus', () => {
    label.style.display = 'none';
  });

  label.addEventListener('click', () => {
    input.focus();
  });

statusCells.forEach(cell => {
  const status = cell.textContent.trim();

  if (status === 'Active') {
    cell.style.background = 'rgba(22, 192, 152, 0.38)';
    cell.style.border = '1px solid #00B087';
    cell.style.color = '#008767';
  } else if (status === 'Inactive') {
    cell.style.background = '#FFC5C5';
    cell.style.border = '1px solid #DF0404';
    cell.style.color = '#DF0404';
  }
});

const tableRows = Array.from(document.querySelectorAll('.dashboardTable .dashboardTableBody .dashboardTableRow'));

input.addEventListener('keyup', (e) => {
  const searchTerm = e.target.value.toLowerCase();

  tableRows.forEach((row) => {
    const name = row.querySelector('td:first-child').textContent.toLowerCase();
    const isMatch = name.includes(searchTerm);
    row.style.display = isMatch ? '' : 'none';
  });
});

