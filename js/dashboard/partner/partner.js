const lines = document.querySelectorAll('.dashboard__line');

lines.forEach((line) => {
 const unhide = line.querySelector('.dashboard__line-unhide');
 const user = line.querySelectorAll('.dashboard__line-history-col-user');

 unhide.addEventListener('click', () => {
  if (line.classList.contains('unhide')) {
   unhide.textContent = 'Раскрыть';
  } else {
   unhide.textContent = 'Скрыть';
  }
  line.classList.toggle('unhide');
 });
 user.forEach((user) => {
  const userName = user.querySelector('.dashboard__line-history-col-user-name');
  user.addEventListener('click', () => {
   if (user.classList.contains('telegram')) {
    window.location.href = `https://t.me/${userName.textContent}`;
   } else if (user.classList.contains('email')) {
    navigator.clipboard.writeText(`${userName.textContent}`);
   }
  });
 });
});
