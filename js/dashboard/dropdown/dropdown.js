const dropdownElem = document.querySelectorAll('.dashboard__dropdown');
dropdownElem.forEach((dropdown) => {
 const dropdownName = dropdown.querySelector('.dashboard__dropdown-name');
 dropdownName.addEventListener('click', () => {
  dropdownElem.forEach((dropdown2) => {
   if (dropdown2 != dropdown) {
    dropdown2.classList.remove('active');
    dropdown.classList.toggle('active');
   }
  });
  dropdown.classList.toggle('active');
 });
});
