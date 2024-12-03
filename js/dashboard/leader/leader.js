const leaders = [
 {
  arr: [
   {
    quantity: 0,
    maxquantity: 5,
    turnover: 10000,
    maxturnover: 10000,
    levellead: 4,
    yourlevel: 4,
    bonus: 100,
   },
   {
    quantity: 0,
    maxquantity: 5,
    turnover: 50000,
    maxturnover: 50000,
    levellead: 5,
    yourlevel: 5,
    bonus: 500,
   },
   {
    quantity: 0,
    maxquantity: 5,
    turnover: 300000,
    maxturnover: 300000,
    levellead: 6,
    yourlevel: 6,
    bonus: 3000,
   },
   {
    quantity: 0,
    maxquantity: 5,
    turnover: 750000,
    maxturnover: 750000,
    levellead: 7,
    yourlevel: 7,
    bonus: 7500,
   },
   {
    quantity: 0,
    maxquantity: 5,
    turnover: 1500000,
    maxturnover: 1500000,
    levellead: 8,
    yourlevel: 8,
    bonus: 15000,
   },
  ],
 },

 {
  arr: [
   {
    quantity: 0,
    maxquantity: 5,
    turnover: 2500000,
    maxturnover: 2500000,
    levellead: 5,
    yourlevel: 5,
    bonus: 5000,
   },
   {
    quantity: 0,
    maxquantity: 5,
    turnover: 3500000,
    maxturnover: 3500000,
    levellead: 6,
    yourlevel: 6,
    bonus: 10000,
   },
   {
    quantity: 0,
    maxquantity: 5,
    turnover: 4500000,
    maxturnover: 4500000,
    levellead: 7,
    yourlevel: 7,
    bonus: 15000,
   },
   {
    quantity: 0,
    maxquantity: 5,
    turnover: 5500000,
    maxturnover: 5500000,
    levellead: 8,
    yourlevel: 8,
    bonus: 20000,
   },
   {
    quantity: 0,
    maxquantity: 5,
    turnover: 6500000,
    maxturnover: 6500000,
    levellead: 10,
    yourlevel: 10,
    bonus: 25000,
   },
  ],
 },
 {
  arr: [
   {
    quantity: 0,
    maxquantity: 5,
    turnover: 7500000,
    maxturnover: 10000000,
    levellead: 8,
    yourlevel: 8,
    bonus: 10000,
   },
   {
    quantity: 0,
    maxquantity: 5,
    turnover: 12500000,
    maxturnover: 12500000,
    levellead: 9,
    yourlevel: 9,
    bonus: 70000,
   },
   {
    quantity: 0,
    maxquantity: 5,
    turnover: 15000000,
    maxturnover: 15000000,
    levellead: 10,
    yourlevel: 10,
    bonus: 75000,
   },
   {
    quantity: 0,
    maxquantity: 5,
    turnover: 20000000,
    maxturnover: 20000000,
    levellead: 11,
    yourlevel: 11,
    bonus: 100000,
   },
   {
    quantity: 0,
    maxquantity: 5,
    turnover: 25000000,
    maxturnover: 25000000,
    levellead: 12,
    yourlevel: 12,
    bonus: 200000,
   },
  ],
 },
];

const blockItems = document.querySelector('.dashboard__block-items');
const blockLinesWrapper = document.querySelector('.dashboard__block-lines');

const renderLines = (arr) => {
 blockLinesWrapper.innerHTML = '';
 arr.forEach((item, index) => {
  const blockLine = document.createElement('div');
  blockLine.className = 'dashboard__block-line';
  blockLine.innerHTML = `       <div class="dashboard__block-line-header">
  Линия 1${index >= 1 ? `-${index + 1}` : ''}
  <img
   src="./assets/icons/dashboard/dropdown-icon.svg"
   alt=""
   class="dashboard__block-line-dropdown-icon"
  />
 </div>
 <div class="dashboard__block-line-info">
  <div class="dashboard__block-line-cols">
   <div class="dashboard__block-line-col">
    <p class="dashboard__block-line-col-title">Количество лидеров</p>
    <p class="dashboard__block-line-col-value">${item.quantity}/${
   item.maxquantity
  }</p>
   </div>
   <div class="dashboard__block-line-col">
    <p class="dashboard__block-line-col-title">Оборот структуры</p>
    <p class="dashboard__block-line-col-value">$ ${item.turnover}/${
   item.maxturnover
  }</p>
   </div>
  </div>
  <div class="dashboard__block-line-cols">
   <div class="dashboard__block-line-col">
    <p class="dashboard__block-line-col-title">Уровень лидеров</p>
    <div class="dashboard__block-line-col-level level-${item.levellead}">
     <img
      src="./assets/icons/dashboard/level-${item.levellead}.svg"
      alt=""
      class="dashboard__block-line-col-level-icon"
     />
     <p class="dashboard__block-line-col-level-value">${item.levellead}</p>
    </div>
   </div>
   <div class="dashboard__block-line-col">
    <p class="dashboard__block-line-col-title">Ваш уровень</p>
    <div class="dashboard__block-line-col-level level-${item.levellead}">
     <img
      src="./assets/icons/dashboard/level-${item.yourlevel}.svg"
      alt=""
      class="dashboard__block-line-col-level-icon"
     />
     <p class="dashboard__block-line-col-level-value">${item.yourlevel}</p>
    </div>
   </div>
  </div>
 </div>
 <div class="dashboard__block-line-footer level-${item.levellead}">
 <button class="dashboard__block-line-button">Забрать бонус</button>
 <p class="dashboard__block-line-bonus">$ ${item.bonus}</p>
</div>`;
  blockLinesWrapper.append(blockLine);
  const blockLineHeader = blockLine.querySelector(
   '.dashboard__block-line-header'
  );

  blockLineHeader.addEventListener('click', () => openLine(blockLine));
  const blockButton = blockLine.querySelector('.dashboard__block-line-button');
  blockButton.addEventListener('click', () => getBonus(blockButton));
 });
};

const renderBlocks = (leaders) => {
 leaders.forEach((leader, index) => {
  const blockDiv = document.createElement('div');
  blockDiv.className = 'dashboard__block-item';
  blockDiv.textContent = `Блок ${index + 1}`;

  if (index === 0) {
   blockDiv.classList.add('active');
  }

  blockItems.append(blockDiv);

  blockDiv.addEventListener('click', () => {
   document.querySelectorAll('.dashboard__block-item').forEach((item) => {
    item.classList.remove('active');
   });

   blockDiv.classList.add('active');

   renderLines(leader.arr);
  });
 });
};

const openLine = (wrapper) => {
 document.querySelectorAll('.dashboard__block-line').forEach((item) => {
  item.classList.remove('opened');
 });
 wrapper.classList.toggle('opened');
};

const getBonus = (button) => {
 if (
  !button.classList.contains('locked') ||
  !button.classList.contains('completed')
 ) {
  button.classList.add('completed');
  button.textContent = 'Бонус получен';
 }
};
renderBlocks(leaders);
renderLines(leaders[0].arr);
