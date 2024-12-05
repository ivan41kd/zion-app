const initDeposit = () => {
 let way = 1;

 const depositItemsWrapper = document.querySelector(
  '.dashboard__create-deposit-items'
 );
 const depositTitle = document.querySelector(
  '.dashboard__create-deposit-title'
 );
 const depositPage = document.querySelector('.dashboard__create-deposit');

 const changeWay = (way) => {
  switch (way) {
   case 2:
    more.style.display = 'flex';
    const walletsWrapper = document.querySelector(
     '.dashboard__create-deposit-wallets'
    );
    depositTitle.textContent = 'Выберите монету';
    if (walletsWrapper) walletsWrapper.remove();
    depositItemsWrapper.innerHTML = `
             <div class="dashboard__create-deposit-item">
               <div class="dashboard__create-deposit-item-wrapper">
                 <img
                   src="./assets/icons/dashboard/usdt-icon.svg"
                   alt=""
                   class="dashboard__create-deposit-icon"
                 />
                 <div class="dashboard__create-deposit-item-texts">
                   <p class="dashboard__create-deposit-item-title">USDT TetherUS</p>
                 </div>
               </div>
             </div>
             <div class="dashboard__create-deposit-item">
               <div class="dashboard__create-deposit-item-wrapper">
                 <img
                   src="./assets/icons/dashboard/bitcoin-icon.svg"
                   alt=""
                   class="dashboard__create-deposit-icon"
                 />
                 <div class="dashboard__create-deposit-item-texts">
                   <p class="dashboard__create-deposit-item-title">Bitcoin</p>
                 </div>
               </div>
             </div>
             <div class="dashboard__create-deposit-item">
               <div class="dashboard__create-deposit-item-wrapper">
                 <img
                   src="./assets/icons/dashboard/eth-icon.svg"
                   alt=""
                   class="dashboard__create-deposit-icon"
                 />
                 <div class="dashboard__create-deposit-item-texts">
                   <p class="dashboard__create-deposit-item-title">Ethereum</p>
                 </div>
               </div>
             </div>`;
    break;
   case 3:
    depositTitle.textContent = 'Выберите сеть';
    depositItemsWrapper.innerHTML = `
        <div class="dashboard__create-deposit-item">
        <div class="dashboard__create-deposit-item-wrapper commission">
         <div class="dashboard__create-deposit-item-texts">
          <p class="dashboard__create-deposit-item-title">TRС</p>
          <p class="dashboard__create-deposit-item-subtitle">
          Tron (TRС20)
          </p>
         </div>
         <div class="dashboard__create-deposit-item-commission">
         <p class="dashboard__create-deposit-commission-title">Комиссия сети</p>
         <p class="dashboard__create-deposit-commission-subtitle">
         ~4-8 USDT
         </p>
        </div>
        </div>
       </div>
       <div class="dashboard__create-deposit-item">
        <div class="dashboard__create-deposit-item-wrapper commission">
         <div class="dashboard__create-deposit-item-texts">
          <p class="dashboard__create-deposit-item-title">BSC</p>
          <p class="dashboard__create-deposit-item-subtitle">
          BNB Smart Chain (BEP20)
          </p>
         </div>
         <div class="dashboard__create-deposit-item-commission">
         <p class="dashboard__create-deposit-commission-title">Комиссия сети</p>
         <p class="dashboard__create-deposit-commission-subtitle">
         ~0,1  USDT
         </p>
        </div>
        </div>
       </div>
       <div class="dashboard__create-deposit-item">
       <div class="dashboard__create-deposit-item-wrapper commission">
        <div class="dashboard__create-deposit-item-texts">
         <p class="dashboard__create-deposit-item-title">POLYGON</p>
         <p class="dashboard__create-deposit-item-subtitle">
         Polygon Network 
         </p>
        </div>
        <div class="dashboard__create-deposit-item-commission">
        <p class="dashboard__create-deposit-commission-title">Комиссия сети</p>
        <p class="dashboard__create-deposit-commission-subtitle">
        ~0,1  USDT
        </p>
       </div>
       </div>
      </div>
       `;
    break;
   case 4:
    depositTitle.textContent = 'Адреc для пополнения';
    const replenishDiv = document.createElement('div');
    replenishDiv.className = 'dashboard__create-deposit-replenish';
    replenishDiv.innerHTML = `        <div class="dashboard__create-deposit-qr-code">
        <img
         src="./assets/icons/dashboard/qr-code.svg"
         alt=""
         class="dashboard__qr-code-icon"
        />
       </div>
       <div class="dashboard__create-deposit-address">
        <p class="dashboard__create-deposit-address-value">
         UQDDXdGy4vMgjPXoTXkuFffZrSJsO69L8llSyZZ075Q5xnR4
        </p>
        <button class="dashboard__create-deposit-address-button">
         Скопировать
        </button>
       </div>
       ${
        !depositPage.classList.contains('btc')
         ? `<div class='dashboard__create-deposit-minimum'>
          <p class='dashboard__create-deposit-minimum-text'>
           Минимальная сумма депозита 50 USDT
          </p>
         </div>`
         : ''
       }
     
       <div class="dashboard__create-deposit-attention">
        <div class="dashboard__create-deposit-attention-wrapper">
         <img
          src="./assets/icons/dashboard/attention-icon.svg"
          alt=""
          class="dashboard__create-deposit-attention-icon"
         />
         <p class="dashboard__create-deposit-attention-text">
          Для каждой новой транзакции нужно использовать новый адрес
         </p>
        </div>
       </div>`;
    depositItemsWrapper.replaceWith(replenishDiv);
    break;
  }

  // Заново находим элементы и добавляем обработчики событий
  attachEventListeners();
 };

 const attachEventListeners = () => {
  const depositItems = document.querySelectorAll(
   '.dashboard__create-deposit-item'
  );

  depositItems.forEach((item) => {
   item.addEventListener('click', () => {
    way++;
    changeWay(way + 1);
    console.log(way + 1);
   });
  });
 };
 changeWay(2);
};
