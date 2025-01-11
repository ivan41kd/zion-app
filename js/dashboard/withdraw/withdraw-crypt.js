const initCrypt = () => {
 let way = 0;

 const isValidBitcoinAddress = (address) => {
  const ethereumAddressRegex = /^0x[a-fA-F0-9]{40}$/;
  return ethereumAddressRegex.test(address);
 };

 const withdrawItemsWrapper = document.querySelector(
  '.dashboard__withdraw-items'
 );
 const withdrawTop = document.querySelector('.dashboard__withdraw-top');
 const withdrawTitle = document.querySelector('.dashboard__withdraw-title');
 const withdrawSubTitle = document.querySelector(
  '.dashboard__withdraw-subtitle'
 );
 const withdrawAvaliable = document.querySelector(
  '.dashboard__withdraw-avaliable'
 );
 const withdrawPage = document.querySelector('.dashboard__withdraw');

 const changeWay = (way) => {
  if (way == 1) {
   more.style.display = 'grid';
   const walletsWrapper = document.querySelector(
    '.dashboard__withdraw-wallets'
   );

   withdrawTitle.textContent = 'Выберите монету';
   withdrawAvaliable.style.display = 'none';
   if (withdrawSubTitle) {
    withdrawSubTitle.style.display = 'none';
   }
   if (walletsWrapper) walletsWrapper.remove();
   withdrawItemsWrapper.innerHTML = `
            <div class="dashboard__withdraw-item">
              <div class="dashboard__withdraw-item-wrapper">
                <img
                  src="./assets/icons/dashboard/usdt-icon.svg"
                  alt=""
                  class="dashboard__withdraw-icon"
                />
                <div class="dashboard__withdraw-item-texts">
                  <p class="dashboard__withdraw-item-title">USDT TetherUS</p>
                </div>
              </div>
            </div>
            <div class="dashboard__withdraw-item">
              <div class="dashboard__withdraw-item-wrapper">
                <img
                  src="./assets/icons/dashboard/bitcoin-icon.svg"
                  alt=""
                  class="dashboard__withdraw-icon"
                />
                <div class="dashboard__withdraw-item-texts">
                  <p class="dashboard__withdraw-item-title">Bitcoin</p>
                </div>
              </div>
            </div>
            <div class="dashboard__withdraw-item">
              <div class="dashboard__withdraw-item-wrapper">
                <img
                  src="./assets/icons/dashboard/eth-icon.svg"
                  alt=""
                  class="dashboard__withdraw-icon"
                />
                <div class="dashboard__withdraw-item-texts">
                  <p class="dashboard__withdraw-item-title">Ethereum</p>
                </div>
              </div>
            </div>`;
  } else if (way == 2) {
   withdrawTitle.textContent = 'Выберите сеть';
   withdrawItemsWrapper.innerHTML = `
           <div class="dashboard__withdraw-item">
           <div class="dashboard__withdraw-item-wrapper commission">
            <div class="dashboard__withdraw-item-texts">
             <p class="dashboard__withdraw-item-title">TRС</p>
             <p class="dashboard__withdraw-item-subtitle">
             Tron (TRС20)
             </p>
            </div>
            <div class="dashboard__withdraw-item-commission">
            <p class="dashboard__withdraw-commission-title">Комиссия сети</p>
            <p class="dashboard__withdraw-commission-subtitle">
            ~4-8 USDT
            </p>
           </div>
           </div>
          </div>
          <div class="dashboard__withdraw-item">
           <div class="dashboard__withdraw-item-wrapper commission">
            <div class="dashboard__withdraw-item-texts">
             <p class="dashboard__withdraw-item-title">BSC</p>
             <p class="dashboard__withdraw-item-subtitle">
             BNB Smart Chain (BEP20)
             </p>
            </div>
            <div class="dashboard__withdraw-item-commission">
            <p class="dashboard__withdraw-commission-title">Комиссия сети</p>
            <p class="dashboard__withdraw-commission-subtitle">
            ~0,1  USDT
            </p>
           </div>
           </div>
          </div>
          <div class="dashboard__withdraw-item">
          <div class="dashboard__withdraw-item-wrapper commission">
           <div class="dashboard__withdraw-item-texts">
            <p class="dashboard__withdraw-item-title">POLYGON</p>
            <p class="dashboard__withdraw-item-subtitle">
            Polygon Network
            </p>
           </div>
           <div class="dashboard__withdraw-item-commission">
           <p class="dashboard__withdraw-commission-title">Комиссия сети</p>
           <p class="dashboard__withdraw-commission-subtitle">
           ~0,1  USDT
           </p>
          </div>
          </div>
         </div>
          `;
  } else if (way == 3) {
   withdrawTitle.textContent = 'Введите адрес';
   withdrawItemsWrapper.remove();
   const withdrawFormWrapper = document.createElement('div');
   withdrawFormWrapper.className = 'dashboard__withdraw-input-form';
   withdrawFormWrapper.innerHTML = `        <form action="" class="dashboard__withdraw-form">
   <div class='dashboard__withdraw-input-container'>
   <div class="dashboard__withdraw-input-wrapper">
    <input type="text" class="dashboard__withdraw-input" />
    <span class="dashboard__withdraw-placeholder">Адрес</span>
   </div>
   </div>
        <button class="dashboard__withdraw-form-button">Далее</button>
        </form>`;
   const withdrawForm = withdrawFormWrapper.querySelector(
    '.dashboard__withdraw-form'
   );
   const withdrawInputWrapper = withdrawFormWrapper.querySelector(
    '.dashboard__withdraw-input-wrapper'
   );
   const withdrawInputContainer = withdrawForm.querySelector(
    '.dashboard__withdraw-input-container'
   );
   const withdrawInput = withdrawForm.querySelector(
    '.dashboard__withdraw-input'
   );
   withdrawInput.addEventListener('input', () => {
    if (isValidBitcoinAddress(withdrawInput.value)) {
     if (withdrawInputContainer.classList.contains('invalid')) {
      withdrawInputContainer.classList.remove('invalid');
     }
     withdrawInputContainer.classList.add('valid');

     const existingError = withdrawInputWrapper.querySelector('.error-message');
     if (existingError) {
      existingError.remove();
     }
    } else {
     if (withdrawInputContainer.classList.contains('valid')) {
      withdrawInputContainer.classList.remove('valid');
     }
    }

    focusInput(withdrawInput, withdrawInputWrapper);
   });

   withdrawForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const existingError = withdrawInputWrapper.querySelector('.error-message');
    if (existingError) {
     existingError.remove();
    }
    if (isValidBitcoinAddress(withdrawInput.value)) {
     way++;
     changeWay(way);
    } else {
     withdrawInputContainer.classList.add('invalid');
     const spanError = document.createElement('span');
     spanError.textContent = 'Неверный адрес';
     spanError.className = 'error-message';
     withdrawInputWrapper.append(spanError);
    }
   });

   withdrawForm.append(more);
   withdrawPage.append(withdrawFormWrapper);
  } else if (way == 4) {
   const existWithDraw = document.querySelector(
    '.dashboard__withdraw-input-form'
   );
   if (existWithDraw) {
    existWithDraw.remove();
   }
   withdrawTitle.textContent = 'Введите сумму';
   withdrawAvaliable.style.display = 'flex';
   const withdrawFormWrapper = document.createElement('div');
   withdrawFormWrapper.className = 'dashboard__withdraw-input-form';
   withdrawFormWrapper.innerHTML = `   
      <div class='dashboard__withdraw-form-wrapper'>
    
      <form action="" class="dashboard__withdraw-form">
      <div class='dashboard__withdraw-input-container'>
      <div class="dashboard__withdraw-input-wrapper reinvest">
       <input type="number" class="dashboard__withdraw-input" />
       <span class="dashboard__withdraw-placeholder">Сумма от 5 USDT</span>
       </div>
       <span class='dashboard__withdraw-input-subtitle'>Минимальная сумма реинвеста - 20 USDT</span>
      </div>
       <button class="dashboard__withdraw-form-button">Далее</button>
       </form>
      </div>`;
   const withdrawForm = withdrawFormWrapper.querySelector(
    '.dashboard__withdraw-form'
   );
   const withdrawInput = withdrawForm.querySelector(
    '.dashboard__withdraw-input'
   );
   const withdrawInputWrapper = withdrawForm.querySelector(
    '.dashboard__withdraw-input-wrapper'
   );
   const withdrawInputContainer = withdrawForm.querySelector(
    '.dashboard__withdraw-input-container'
   );
   withdrawInput.addEventListener('input', () => {
    focusInput(withdrawInput, withdrawInputWrapper);
    if (withdrawInput.value >= 5) {
     if (withdrawInputContainer.classList.contains('invalid')) {
      withdrawInputContainer.classList.remove('invalid');
     }
     withdrawInputContainer.classList.add('valid');

     const existingError = withdrawInputWrapper.querySelector('.error-message');
     if (existingError) {
      existingError.remove();
     }
    } else {
     if (withdrawInputContainer.classList.contains('valid')) {
      withdrawInputContainer.classList.remove('valid');
     }
    }
   });
   withdrawForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const existingError = withdrawInputWrapper.querySelector('.error-message');
    if (existingError) {
     existingError.remove();
    }

    if (Number(withdrawInput.value) >= 5) {
     way++;
     changeWay(way);
    } else {
     withdrawInputContainer.classList.add('invalid');
     const spanError = document.createElement('span');
     spanError.textContent = 'Неверная сумма';
     spanError.className = 'error-message';
     withdrawInputWrapper.append(spanError);
    }
   });

   withdrawForm.append(more);
   withdrawPage.append(withdrawFormWrapper);
  } else if (way == 5) {
   withdrawTop.innerHTML = `
        <div class="dashboard__withdraw-title-wrapper">
        <h1 class="dashboard__withdraw-title">Введите код 
        подтверждения</h1>
       </div>`;

   const withdrawFormWrapper = document.createElement('div');
   withdrawFormWrapper.className = 'dashboard__withdraw-input-form';
   withdrawFormWrapper.innerHTML = `   
      <div class='dashboard__withdraw-form-wrapper'>
    
      <form action="" class="dashboard__withdraw-form">
      <div class='dashboard__withdraw-input-container'>
      <div class="dashboard__withdraw-input-wrapper">
       <input type="number" class="dashboard__withdraw-input" />
       <span class="dashboard__withdraw-placeholder">Код</span>
       </div>
      </div>
    
      <div class='dashboard__withdraw-button-wrapper'>
      <p class='dashboard__withdraw-button-subtitle'>Код будет отправлен в телеграм</p>
      <button class="dashboard__withdraw-form-button">Получить </button>
      </div>
       </form>
      </div>`;
   const code = 1234;
   const withdrawForm = withdrawFormWrapper.querySelector(
    '.dashboard__withdraw-form'
   );
   const withdrawInput = withdrawForm.querySelector(
    '.dashboard__withdraw-input'
   );

   const withdrawInputContainer = withdrawForm.querySelector(
    '.dashboard__withdraw-input-container'
   );
   const withdrawInputWrapper = withdrawForm.querySelector(
    '.dashboard__withdraw-input-wrapper'
   );
   const existWithDraw = document.querySelector(
    '.dashboard__withdraw-input-form'
   );

   withdrawInput.addEventListener('input', () => {
    focusInput(withdrawInput, withdrawInputWrapper);
    if (withdrawInput.value == code) {
     if (withdrawInputContainer.classList.contains('invalid')) {
      withdrawInputContainer.classList.remove('invalid');
     }
     withdrawInputContainer.classList.add('valid');

     const existingError = withdrawInputWrapper.querySelector('.error-message');
     if (existingError) {
      existingError.remove();
     }
    } else {
     if (withdrawInputContainer.classList.contains('valid')) {
      withdrawInputContainer.classList.remove('valid');
     }
    }
   });
   if (existWithDraw) {
    existWithDraw.remove();
   }
   withdrawForm.append(more);
   withdrawPage.append(withdrawFormWrapper);
   withdrawForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const existingError = withdrawInputWrapper.querySelector('.error-message');
    if (existingError) {
     existingError.remove();
    }

    if (Number(withdrawInput.value) == code) {
     way++;
     changeWay(way);
    } else {
     withdrawInputContainer.classList.add('invalid');
     const spanError = document.createElement('span');
     spanError.textContent = 'Неверный код';
     spanError.className = 'error-message';
     withdrawInputWrapper.append(spanError);
    }
   });
  } else if (way == 6) {
   withdrawTop.innerHTML = `
        <div class="dashboard__withdraw-title-wrapper">
        <h1 class="dashboard__withdraw-title">Запрос на вывод
        успешно выполнен</h1>
       </div>`;
   const existWithDraw = document.querySelector(
    '.dashboard__withdraw-input-form'
   );
   if (existWithDraw) {
    existWithDraw.remove();
   }
   const withdrawEnd = document.createElement('div');
   withdrawEnd.className = 'dashboard__withdraw-end';
   withdrawEnd.innerHTML = `${
    !withdrawPage.classList.contains('btc')
     ? `<svg width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg" class='dashboard__withdraw-end-icon'>
   <path d="M72.5003 98.3297C70.8573 98.3297 69.298 97.6027 68.242 96.3435L38.6022 61.0036C36.6299 58.6516 36.9373 55.1464 39.2893 53.1738C41.6409 51.2015 45.1464 51.5089 47.119 53.8609L72.493 84.1149L134.928 9.40664C136.897 7.05191 140.401 6.73756 142.757 8.70602C145.112 10.6745 145.426 14.1793 143.457 16.5344L76.7651 96.3359C75.7102 97.5982 74.1506 98.328 72.5055 98.3297C72.5034 98.3297 72.502 98.3297 72.5003 98.3297Z" fill="url(#paint0_linear_198_4413)"/>
   <path d="M72.5 144.5C32.6614 144.5 0.25 112.089 0.25 72.25C0.25 32.4114 32.6614 0 72.5 0C87.561 0 102 4.59691 114.255 13.2937C116.758 15.07 117.347 18.5394 115.571 21.0425C113.795 23.5455 110.326 24.135 107.822 22.3586C97.4575 15.0033 85.2431 11.1154 72.5 11.1154C38.7902 11.1154 11.3654 38.5402 11.3654 72.25C11.3654 105.96 38.7902 133.385 72.5 133.385C106.21 133.385 133.635 105.96 133.635 72.25C133.635 65.8218 132.642 59.4941 130.685 53.4421C129.74 50.5215 131.342 47.3884 134.262 46.4436C137.184 45.4998 140.316 47.1011 141.26 50.021C143.576 57.18 144.75 64.6589 144.75 72.25C144.75 112.089 112.339 144.5 72.5 144.5Z" fill="url(#paint1_linear_198_4413)"/>
   <defs>
   <linearGradient id="paint0_linear_198_4413" x1="91.0267" y1="7.41284" x2="91.0267" y2="98.3297" gradientUnits="userSpaceOnUse">
   <stop stop-color="#5F976E"/>
   <stop offset="1" stop-color="#FFF1B1"/>
   </linearGradient>
   <linearGradient id="paint1_linear_198_4413" x1="72.5" y1="0" x2="72.5" y2="144.5" gradientUnits="userSpaceOnUse">
   <stop stop-color="#5F976E"/>
   <stop offset="1" stop-color="#FFF1B1"/>
   </linearGradient>
   </defs>
   </svg>
   `
     : `<svg width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg" class='dashboard__withdraw-end-icon'>
   <path d="M72.5003 98.3297C70.8573 98.3297 69.298 97.6027 68.242 96.3435L38.6022 61.0036C36.6299 58.6516 36.9373 55.1464 39.2893 53.1738C41.6409 51.2015 45.1464 51.5089 47.119 53.8609L72.493 84.1149L134.928 9.40664C136.897 7.05191 140.401 6.73756 142.757 8.70602C145.112 10.6745 145.426 14.1793 143.457 16.5344L76.7651 96.3359C75.7102 97.5982 74.1506 98.328 72.5055 98.3297C72.5034 98.3297 72.502 98.3297 72.5003 98.3297Z" fill="url(#paint0_linear_198_6513)"/>
   <path d="M72.5 144.5C32.6614 144.5 0.25 112.089 0.25 72.25C0.25 32.4114 32.6614 0 72.5 0C87.561 0 102 4.59691 114.255 13.2937C116.758 15.07 117.347 18.5394 115.571 21.0425C113.795 23.5455 110.326 24.135 107.822 22.3586C97.4575 15.0033 85.2431 11.1154 72.5 11.1154C38.7902 11.1154 11.3654 38.5402 11.3654 72.25C11.3654 105.96 38.7902 133.385 72.5 133.385C106.21 133.385 133.635 105.96 133.635 72.25C133.635 65.8218 132.642 59.4941 130.685 53.4421C129.74 50.5215 131.342 47.3884 134.262 46.4436C137.184 45.4998 140.316 47.1011 141.26 50.021C143.576 57.18 144.75 64.6589 144.75 72.25C144.75 112.089 112.339 144.5 72.5 144.5Z" fill="url(#paint1_linear_198_6513)"/>
   <defs>
   <linearGradient id="paint0_linear_198_6513" x1="144.751" y1="297.481" x2="100.387" y2="303.106" gradientUnits="userSpaceOnUse">
   <stop stop-color="#627EEA"/>
   <stop offset="0.93718" stop-color="#FF9416"/>
   </linearGradient>
   <linearGradient id="paint1_linear_198_6513" x1="144.75" y1="461.024" x2="84.8193" y2="467.454" gradientUnits="userSpaceOnUse">
   <stop stop-color="#627EEA"/>
   <stop offset="0.93718" stop-color="#FF9416"/>
   </linearGradient>
   </defs>
   </svg>
   `
   } 

   <a href='dashboard.html'>
   <button class='dashboard__withdraw-end-button'>
   Перейти в раздел история операций</button>
   </a>
`;
   withdrawPage.append(withdrawEnd);
  }

  attachEventListeners();
 };

 const attachEventListeners = () => {
  const withdrawItems = document.querySelectorAll('.dashboard__withdraw-item');

  withdrawItems.forEach((item) => {
   item.addEventListener('click', () => {
    way++;
    changeWay(way);
   });
  });
 };
 changeWay(way + 1);
 attachEventListeners();
};
