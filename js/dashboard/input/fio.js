const initFio = (fioInput, wrapper) => {
 fioInput.addEventListener('input', (e) => {
  let value = e.target.value;

  // Разрешить только кириллицу и пробелы
  value = value.replace(/[^а-яА-ЯёЁ\s]/g, '');

  // Приводим к формату: первая буква заглавная, остальные строчные
  value = value
   .split(/\s+/) // Разделяем по пробелам
   .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
   .join(' ');

  e.target.value = value;

  // Проверка валидности: минимум 2 слова, каждое длиннее 1 символа
  const words = value.trim().split(/\s+/);
  if (words.length >= 2 && words.every((word) => word.length > 1)) {
   wrapper.classList.add('valid');
  } else {
   wrapper.classList.remove('valid');
  }
 });

 fioInput.addEventListener('keydown', (e) => {
  // Запрет недопустимых символов
  if (e.key.length === 1 && !/[а-яё\s]/i.test(e.key) && e.key !== 'Backspace') {
   e.preventDefault();
  }
 });
};
