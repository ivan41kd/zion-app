const burgerIcon = document.querySelector('.header__burger-icon');
const burgerCol = document.querySelector('.header__burger-col');
const backItem = document.querySelector('.header__col');

const languageMenu = document.querySelector('.header__languages');
const optionItem = document.querySelector('.header__options-item.options');

const headerMenu = document.querySelector('.header__menu');

const languageMenuItem = document.querySelector('.header__menu-item.language');

const languageItem = document.querySelectorAll('.header__language-item');
const languageValue = document.querySelector('.header__language-value');

burgerIcon.addEventListener('click', () => {
 burgerCol.classList.toggle('active');
});

optionItem.addEventListener('click', () => {
 headerMenu.classList.toggle('active');
 burgerCol.classList.remove('active');
 backItem.classList.add('back');
 backItem.textContent = 'Назад';
});

languageMenuItem.addEventListener('click', () => {
 burgerCol.classList.remove('active');
 languageMenu.classList.toggle('active');
 burgerCol.classList.remove('active');
});

languageItem.forEach((item) => {
 item.addEventListener('click', () => {
  const language = item.querySelector('.header__language-item-subtitle');

  languageValue.textContent = language.textContent;
  languageItem.forEach((item2) => item2.classList.remove('active'));
  item.classList.toggle('active');
  languageMenu.classList.remove('active');
 });
});

backItem.addEventListener('click', (event) => {
 burgerCol.classList.remove('active');
 if (headerMenu.classList.contains('active')) {
  if (backItem.parentElement.tagName === 'A') {
   event.preventDefault();
  }
 }

 if (languageMenu.classList.contains('active')) {
  languageMenu.classList.remove('active');
 } else if (headerMenu.classList.contains('active')) {
  headerMenu.classList.remove('active');
 }
 if (!headerMenu.classList.contains('active')) {
  if (backItem.parentElement.tagName != 'A') {
   backItem.textContent = 'Отмена';
   if (backItem.classList.contains('back')) backItem.classList.remove('back');
  }
 }
});
