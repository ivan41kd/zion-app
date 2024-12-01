const dashboardCondition = document.querySelectorAll('.dashboard__conditions');

const closePopup = (section) => {
 section.remove();
};
const openAltcoins = () => {
 const sectionPopup = document.createElement('section');
 sectionPopup.className = 'popup';
 sectionPopup.innerHTML = `<div class="popup__wrapper">
    <img
     src="./assets/icons/dashboard/popup-close.svg"
     alt=""
     class="popup__close"
    />
    <div class="popup__title-wrapper">
     <h2 class="popup__title">УСЛОВИЯ ВЫВОДА</h2>
     <p class="popup__subtitle">Altcoins</p>
    </div>
    <p class="popup__text">
     Вывод заработанных средств возможен <br /><span>один раз в неделю</span>
    </p>
    <p class="popup__text">
     Минимальная сумма вывода составляет <span>5 USDT</span>
    </p>
    <p class="popup__text">
     Запрос на вывод средств вы можете <br />
     произвести <span>в любой день</span>
    </p>
    <p class="popup__text">
     Сумма будет перечислена на ваш кошелек <span>в понедельник</span>
    </p>
    <p class="popup__text">
     Платформа не берет комиссию за вывод, пользователь<br />
     оплачивает только <span>комиссию сети</span><br />
     <span>TRC20 - (~4-8 USDT)</span>
     <span>BEP20 - (~0,1 USDT)</span>
    </p>
   </div>`;

 document.body.append(sectionPopup);
 const popupCloseIcon = sectionPopup.querySelector('.popup__close');
 popupCloseIcon.addEventListener('click', () => closePopup(sectionPopup));
};
const openPartner = () => {
 const sectionPopup = document.createElement('section');
 sectionPopup.className = 'popup';
 sectionPopup.innerHTML = `<div class="popup__wrapper">
       <img
        src="./assets/icons/dashboard/popup-close.svg"
        alt=""
        class="popup__close"
       />
       <div class="popup__title-wrapper">
        <h2 class="popup__title">УСЛОВИЯ ВЫВОДА</h2>
        <p class="popup__subtitle">ПАРТНЕРСКАЯ ПРОГРАММА</p>
       </div>
       <p class="popup__text">
       Вывод дохода от партнерской программы производится на ваш личный кошелек
       </p>
       <p class="popup__text">
        Минимальная сумма вывода составляет <span>5 USDT</span>
       </p>
       <p class="popup__text">
        Запрос на вывод средств вы можете <br />
        произвести <span>в любой день</span>
       </p>
       <p class="popup__text">
       Регламент вывода - <span>24 часа </span>
       </p>
      </div>`;

 document.body.append(sectionPopup);
 const popupCloseIcon = sectionPopup.querySelector('.popup__close');
 popupCloseIcon.addEventListener('click', () => closePopup(sectionPopup));
};
const openBtc = () => {
 const sectionPopup = document.createElement('section');
 sectionPopup.className = 'popup';
 sectionPopup.innerHTML = `<div class="popup__wrapper">
          <img
           src="./assets/icons/dashboard/popup-close.svg"
           alt=""
           class="popup__close"
          />
          <div class="popup__title-wrapper">
           <h2 class="popup__title">УСЛОВИЯ ВЫВОДА</h2>
           <p class="popup__subtitle">BTC/ETH</p>
          </div>
          <p class="popup__text">
          Вывод заработанных средств возможен <span>один раз в неделю</span>
          </p>
          <p class="popup__text">
           Минимальная сумма вывода составляет <span>20 USDT</span>
          </p>
          <p class="popup__text">
           Запрос на вывод средств вы можете <br />
           произвести <span>в любой день</span>
          </p>
          <p class="popup__text">
          Сумма будет перечислена на ваш кошелек <span>в понедельник</span>
         </p>
          <p class="popup__text">
          Платформа не берет комиссию за вывод, пользователь<br />
          оплачивает только <span>комиссию сети</span><br />
          <span>TRC20 - (~4-8 USDT)</span>
          <span>BEP20 - (~0,1 USDT)</span>
         </p>
         </div>`;

 document.body.append(sectionPopup);
 const popupCloseIcon = sectionPopup.querySelector('.popup__close');
 popupCloseIcon.addEventListener('click', () => closePopup(sectionPopup));
};

dashboardCondition.forEach((item) => {
 item.addEventListener('click', () => {
  switch (item.dataset.open) {
   case 'altcoins':
    openAltcoins();
    break;
   case 'partner':
    openPartner();
    break;
   case 'btc':
    openBtc();
    break;
  }
 });
});
