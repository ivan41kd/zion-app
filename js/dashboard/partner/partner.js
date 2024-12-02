const lines = document.querySelectorAll('.dashboard__line');

lines.forEach((line) => {
 const unhide = line.querySelector('.dashboard__line-unhide');
 unhide.addEventListener('click', () => {
  if (line.classList.contains('unhide')) {
   unhide.textContent = 'Раскрыть';
  } else {
   unhide.textContent = 'Скрыть';
  }
  line.classList.toggle('unhide');
 });
});
