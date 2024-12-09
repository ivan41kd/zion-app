const levels = [
 {
  level: 1,
  profit: 5,
  img: './assets/icons/dashboard/level-1.png',
 },
 {
  level: 2,
  profit: 10,
  img: './assets/icons/dashboard/level-2.png',
 },
 {
  level: 3,
  profit: 15,
  img: './assets/icons/dashboard/level-3.png',
 },
 {
  level: 4,
  profit: 20,
  img: './assets/icons/dashboard/level-4.png',
 },
 {
  level: 5,
  profit: 25,
  img: './assets/icons/dashboard/level-5.png',
 },
 {
  level: 6,
  profit: 30,
  img: './assets/icons/dashboard/level-6.png',
 },
 {
  level: 7,
  profit: 35,
  img: './assets/icons/dashboard/level-7.png',
 },
 {
  level: 8,
  profit: 40,
  img: './assets/icons/dashboard/level-8.png',
 },
 {
  level: 9,
  profit: 42.5,
  img: './assets/icons/dashboard/level-9.png',
 },
 {
  level: 10,
  profit: 45,
  img: './assets/icons/dashboard/level-10.png',
 },
 {
  level: 11,
  profit: 47.5,
  img: './assets/icons/dashboard/level-11.png',
 },
 {
  level: 12,
  img: './assets/icons/dashboard/level-12.png',
  profit: 50,
 },
];
const level = document.querySelector('.dashboard__select-level');
const levelWrapper = level.querySelector('.dashboard__select-level-current');
const levelList = level.querySelector('.dashboard__select-level-items');
const levelTitle = level.querySelector(
 '.dashboard__select-level-current-title'
);

const cardName = document.querySelector(
 '.dashboard__history-trade-card-level-name'
);
const cardValue = document.querySelector(
 '.dashboard__history-trade-card-level-value'
);
const cardImg = document.querySelector(
 '.dashboard__history-trade-card-level-img'
);

const renderLevels = (level) => {
 const levelItem = document.createElement('li');
 levelItem.className = 'dashboard__select-level-item';
 levelItem.textContent = `Уровень ${level.level}`;
 levelList.append(levelItem);
 levelItem.addEventListener('click', () => setLevel(level));
};

const setLevel = ({ level, img, profit }) => {
 levelTitle.textContent = `Уровень ${level} - ${profit}%`;
 cardName.textContent = `Уровень ${level}`;
 cardValue.textContent = `${profit}%`;
 cardImg.src = img;
};
levelWrapper.addEventListener('click', () => {
 level.classList.toggle('active');
});

levels.forEach((levelitem, index) => {
 if (!level.classList.contains('btc')) {
  renderLevels(levelitem);
 } else if (level.classList.contains('btc') && index <= 2) {
  renderLevels(levelitem);
 }
});

setLevel(levels[0]);
