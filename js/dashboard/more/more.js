const more = document.querySelector('.dashboard__more');
const moreTop = more.querySelector('.dashboard__more-top');

moreTop.addEventListener('click', () => {
 more.classList.toggle('active');
});
