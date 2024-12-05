const cryptItem = document.querySelector('.dashboard__withdraw-item.crypt');
const bankItem = document.querySelector('.dashboard__withdraw-item.bank');
let initway = 0;
cryptItem.addEventListener('click', () => {
 initCrypt();
});
bankItem.addEventListener('click', () => {
 initBank();
});
