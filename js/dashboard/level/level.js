const levels = [
 {
  level: 1,
  profit: 5,
  img: './assets/icons/dashboard/level-1.svg',
  tasks: [
   {
    partners: 0,
    maxpartners: 1,
   },
   {
    deposit: 0,
    maxdeposit: 100,
   },
  ],
 },
 {
  level: 2,
  profit: 10,
  img: './assets/icons/dashboard/level-2.svg',
  tasks: [
   {
    partners: 0,
    maxpartners: 2,
   },
   {
    deposit: 0,
    maxdeposit: 200,
   },
  ],
 },
 {
  level: 3,
  profit: 15,
  img: './assets/icons/dashboard/level-3.svg',
  tasks: [
   {
    partners: 0,
    maxpartners: 4,
   },
   {
    deposit: 0,
    maxdeposit: 1000,
   },
   {
    leader: 0,
    maxleader: 1,
   },
   {
    bonus: 0,
   },
  ],
 },
 {
  level: 4,
  profit: 20,
  img: './assets/icons/dashboard/level-4.svg',
  tasks: [
   {
    partners: 0,
    maxpartners: 8,
    deposit: 0,
    maxdeposit: 8000,
    leader: 0,
    maxleader: 1,
    bonus: 0,
   },
  ],
 },
 {
  level: 5,
  profit: 25,
  img: './assets/icons/dashboard/level-5.svg',
  tasks: [
   {
    partners: 0,
    maxpartners: 16,
    deposit: 0,
    maxdeposit: 40000,
    leader: 0,
    maxleader: 1,
    bonus: 0,
   },
  ],
 },
 {
  level: 6,
  profit: 30,
  img: './assets/icons/dashboard/level-6.svg',
  tasks: [
   {
    partners: 0,
    maxpartners: 24,
    deposit: 0,
    maxdeposit: 80000,
    leader: 0,
    maxleader: 1,
    bonus: 0,
   },
  ],
 },
 {
  level: 7,
  profit: 35,
  img: './assets/icons/dashboard/level-7.svg',
  tasks: [
   {
    partners: 0,
    maxpartners: 36,
    deposit: 0,
    maxdeposit: 160000,
    leader: 0,
    maxleader: 1,
    bonus: 0,
   },
  ],
 },
 {
  level: 8,
  profit: 40,
  img: './assets/icons/dashboard/level-8.svg',
  tasks: [
   {
    partners: 0,
    maxpartners: 48,
    deposit: 0,
    maxdeposit: 320000,
    leader: 0,
    maxleader: 1,
    bonus: 0,
   },
  ],
 },
 {
  level: 9,
  profit: 42.5,
  img: './assets/icons/dashboard/level-9.svg',
  tasks: [
   {
    partners: 0,
    maxpartners: 60,
    deposit: 0,
    maxdeposit: 640000,
    leader: 0,
    maxleader: 1,
    bonus: 0,
   },
  ],
 },
 {
  level: 10,
  profit: 45,
  img: './assets/icons/dashboard/level-10.svg',
  tasks: [
   {
    partners: 0,
    maxpartners: 120,
    deposit: 0,
    maxdeposit: 1280000,
    leader: 0,
    maxleader: 1,
    bonus: 0,
   },
  ],
 },
 {
  level: 11,
  profit: 47.5,
  img: './assets/icons/dashboard/level-11.svg',
  tasks: [
   {
    partners: 0,
    maxpartners: 240,
    deposit: 0,
    maxdeposit: 2560000,
    leader: 0,
    maxleader: 1,
    bonus: 0,
   },
  ],
 },
 {
  level: 12,
  img: './assets/icons/dashboard/level-12.svg',
  profit: 50,
 },
];

const currentLevel = levels[2];
const levelTasks = currentLevel.tasks;

const renderLevel = ({ level, profit, img }) => {
 const dashboardLevel = document.querySelector('.dashboard__level');
 dashboardLevel.classList.add(`level-${level}`);
 const profitWrapper = document.querySelector(
  '.dashboard__level-profit-wrapper'
 );
 profitWrapper.innerHTML = `        
 <img
  src=${img}
  alt=""
  class="dashboard__level-profit-logo"
 />
 <div class="dashboard__level-profit-info">
  <p class="dashboard__level-profit-level">Уровень ${level}</p>
  <p class="dashboard__level-profit-value">${profit}%</p>
 </div>`;
};

const renderTasks = (tasks) => {
 const dashboardProgress = document.querySelector('.dashboard__level-progress');
 tasks.forEach((task, index) => {
  const progressWrapper = document.createElement('div');
  progressWrapper.className = 'dashboard__level-progress-wrapper';
  dashboardProgress.append(progressWrapper);
  const progressWrappers = document.querySelectorAll(
   '.dashboard__level-progress-wrapper'
  );

  switch (index) {
   case 0: {
    console.log(task.partners);
    const currentWrapper = progressWrappers[index];
    currentWrapper.innerHTML = `<div class="dashboard__level-progress-top-wrapper">
    <div class="dashboard__level-progress-title-wrapper">
     <p class="dashboard__level-progress-title">Количество партнеров</p>
    </div>
    <div class="dashboard__level-progress-amount-wrapper">
     <p class="dashboard__level-progress-amount ${
      task.partners == task.maxpartners ? 'completed' : ''
     }">${task.partners}/${task.maxpartners}</p>
     <img
      src="./assets/icons/dashboard/usdt-icon.svg"
      alt=""
      class="dashboard__level-progress-wallet-icon"
     />
    </div>
   </div>
   <div class="dashboard__level-progress-bar">
    <div class="dashboard__level-progress-bar-wrapper">
     <span></span>
    </div>
   </div>`;

    break;
   }
   case 1: {
    const currentWrapper = progressWrappers[index];
    currentWrapper.innerHTML = `<div class="dashboard__level-progress-top-wrapper">
    <div class="dashboard__level-progress-title-wrapper">
    <p class="dashboard__level-progress-title">Сумма депозитов</p>
    <img
    src="./assets/icons/dashboard/usdt-icon.svg"
    alt=""
    class="dashboard__level-progress-wallet-icon"
   />
    </div>
    <div class="dashboard__level-progress-amount-wrapper">
     <p class="dashboard__level-progress-amount ${
      task.deposit == task.maxdeposit ? 'completed' : ''
     }">${task.deposit}/${task.maxdeposit}</p>
     <img
      src="./assets/icons/dashboard/usdt-icon.svg"
      alt=""
      class="dashboard__level-progress-wallet-icon"
     />
    </div>
   </div>
   <div class="dashboard__level-progress-bar">
    <div class="dashboard__level-progress-bar-wrapper">
     <span></span>
    </div>
   </div>`;
    break;
   }
   case 2: {
    const currentWrapper = progressWrappers[index];
    currentWrapper.innerHTML = `<div class="dashboard__level-progress-top-wrapper">
    <div class="dashboard__level-progress-title-wrapper">
    <p class="dashboard__level-progress-title">Лидер в 1 линии уровня</p>
    <img
    src="./assets/icons/dashboard/level-${currentLevel.level}.svg"
    alt=""
    class="dashboard__level-progress-wallet-icon"
   />
    </div>
    <div class="dashboard__level-progress-amount-wrapper">
     <p class="dashboard__level-progress-amount ${
      task.leader == task.maxleader ? 'completed' : ''
     }">${task.leader}/${task.maxleader}</p>
    </div>
   </div>
   <div class="dashboard__level-progress-bar">
    <div class="dashboard__level-progress-bar-wrapper">
     <span></span>
    </div>
   </div>`;
    break;
   }
   case 3: {
    console.log(task);
    const currentWrapper = progressWrappers[index];
    currentWrapper.innerHTML = `<div class="dashboard__level-progress-top-wrapper">
    <div class="dashboard__level-progress-title-wrapper">
    <p class="dashboard__level-progress-title">Бонус к депозиту</p>
    <img
    src="./assets/icons/dashboard/usdt-icon.svg"
    alt=""
    class="dashboard__level-progress-wallet-icon"
   />
    </div>
    <div class="dashboard__level-progress-amount-wrapper">
     <p class="dashboard__level-progress-amount completed">${task.bonus}</p>
     <img
      src="./assets/icons/dashboard/usdt-icon.svg"
      alt=""
      class="dashboard__level-progress-wallet-icon"
     />
    </div>
   </div>
   <div class="dashboard__level-progress-bar">
    <div class="dashboard__level-progress-bar-wrapper">
     <span></span>
    </div>
   </div>`;
    break;
   }
  }
 });
};

renderLevel(currentLevel);
renderTasks(levelTasks);
