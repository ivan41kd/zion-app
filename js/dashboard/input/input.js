const focusInput = (input, wrapper) => {
 const placeholder = wrapper.querySelector('.dashboard__withdraw-placeholder');
 if (input.value != '') {
  placeholder.classList.add('focus');
 } else {
  placeholder.classList.remove('focus');
 }
};
