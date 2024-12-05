const initPhone = (phoneInput, wrapper) => {
 phoneInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\D/g, ''); // Удаляем все, кроме цифр
  if (value.startsWith('8')) {
   value = '7' + value.slice(1); // Заменяем первую цифру "8" на "7"
  }
  if (!value.startsWith('7')) {
   value = '7' + value; // Добавляем "7", если номер не начинается с неё
  }

  // Форматируем номер
  const formattedValue = value
   .replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5')
   .slice(0, 18); // Ограничиваем длину

  e.target.value = formattedValue;

  // Проверяем, введен ли номер полностью
  if (value.length === 11) {
   wrapper.classList.add('valid');
  } else {
   wrapper.classList.remove('valid');
  }
 });

 // Предотвращаем ввод недопустимых символов
 phoneInput.addEventListener('keydown', (e) => {
  if (e.key.length === 1 && !/\d/.test(e.key) && e.key !== 'Backspace') {
   e.preventDefault();
  }
 });
};
