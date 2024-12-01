const renewWrapper = document.querySelectorAll(
 '.dashboard__renew-button-wrapper'
);

const enableRenew = (wrapper) => {
 wrapper.classList.toggle('enabled');
};

renewWrapper.forEach((wrapper) => {
 wrapper.addEventListener('click', () => enableRenew(wrapper));
});
