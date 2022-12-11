const cryptoProgressBar = document.querySelector(".crypto-progress--bar");

//btns
const cryptoBtn = document.querySelector(".cryptoBtn");
const cryptoUpgradeBtn = document.querySelector(".crypto-cost-container");

//display
const totalMoneySliderDisplay = document.querySelector(".total-money--slider");
const totalMoneyShopDisplay = document.querySelector(".total-money--shop");
const totalMoneyDisplay = document.querySelector(".total-money--amount");
const cryptoMoneyDisplay = document.querySelector(".crypto-profit");
const cryptoTimeDisplay = document.querySelector(".crypto-time");
const cryptoUpgradePriceDisplay = document.querySelector(
  ".crypto-upgrade--price"
);
const cryptoUpgradeCountDisplay = document.querySelector(
  ".crypto-upgrade-count"
);

const cryptoCountUpgradeBar = document.querySelector(
  ".crypto-upgrade-progress-bar"
);

//upgrades
let cryptoUpgradeBarWidth = 0;
let cryptoUpgradePrice = 1500;
let cryptoUpgradeCount = 0;

let firstTimeStampUpgrade = 10;
let secondTimeStampUpgrade = 50;
let thirdTimeStampUpgrade = 100;
let forthTimeStampUpgrade = 200;

let upgradeWitdh = 10;

// money
let totalMoney = +totalMoneyDisplay.innerHTML;
let defaultcryptoMoney = +cryptoMoneyDisplay.innerHTML;
let cryptoMoney = +cryptoMoneyDisplay.innerHTML;

//time
let cryptoTime = +cryptoTimeDisplay.getAttribute("time");

//playable
let btnClicked = false;

let hours = Math.floor(cryptoTime / 3600);
let minutes = Math.floor(cryptoTime / 60) - hours * 60;
let seconds = cryptoTime % 60;

const intervalTimeFunction = () => {
  hours = Math.floor(cryptoTime / 3600);
  minutes = Math.floor(cryptoTime / 60) - hours * 60;
  seconds = cryptoTime % 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  cryptoTime--;

  cryptoTimeDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;
};

const timeFunction = () => {
  cryptoTime = +cryptoTimeDisplay.getAttribute("time");
  hours = Math.floor(cryptoTime / 3600);
  minutes = Math.floor(cryptoTime / 60) - hours * 60;
  seconds = cryptoTime % 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return [hours, minutes, seconds];
};

const cryptoFunction = () => {
  cryptoTime = +cryptoTimeDisplay.getAttribute("time");
  intervalTimeFunction();

  totalMoney = +totalMoneyDisplay.innerHTML;
  cryptoTimeDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;

  cryptoBtn.addEventListener("click", () => {
    cryptoTime = +cryptoTimeDisplay.getAttribute("time");
    totalMoney = +totalMoneyDisplay.innerHTML;
    defaultcryptoMoney = +cryptoMoneyDisplay.innerHTML;
    cryptoMoney = +cryptoMoneyDisplay.innerHTML;
    if (!btnClicked) {
      btnClicked = true;
      cryptoProgressBar.style.cssText = `width: 100%; transition: width ${cryptoTime}s ease-in-out;`;
      let timeInterval = setInterval(intervalTimeFunction, 1000);

      setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += cryptoMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneySliderDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneyShopDisplay.innerHTML = totalMoney.toFixed(1);
        cryptoProgressBar.style.cssText = `width: 0%;`;
        setTimeout((btnClicked = false), cryptoTime * 1000);
        clearInterval(timeInterval);
        cryptoTime = 10800;
        cryptoTimeDisplay.innerHTML = `${timeFunction()[0]}:${
          timeFunction()[1]
        }:${timeFunction()[2]}`;
      }, cryptoTime * 1000);
    }
  });

  cryptoUpgradeBtn.addEventListener("click", () => {
    cryptoUpgradePrice = +cryptoUpgradePriceDisplay.innerHTML;
    totalMoney = +totalMoneyDisplay.innerHTML;
    defaultcryptoMoney = +cryptoMoneyDisplay.innerHTML;
    cryptoMoney = +cryptoMoneyDisplay.innerHTML;
    if (totalMoney > cryptoUpgradePrice) {
      cryptoMoney += defaultcryptoMoney;
      totalMoney -= cryptoUpgradePrice;
      cryptoUpgradeCount++;
      cryptoUpgradePrice += cryptoUpgradePrice / 7;

      totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
      cryptoMoneyDisplay.innerHTML = cryptoMoney.toFixed(2);
      cryptoUpgradePriceDisplay.innerHTML = cryptoUpgradePrice.toFixed(2);
      cryptoUpgradeCountDisplay.innerHTML = Math.round(cryptoUpgradeCount);
      cryptoUpgradeBarWidth += upgradeWitdh;
      cryptoCountUpgradeBar.style.width = cryptoUpgradeBarWidth + "%";
    }

    if (cryptoUpgradeCount === firstTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      cryptoMoney *= 3;
      cryptoMoneyDisplay.innerHTML = cryptoMoney.toFixed(2);

      cryptoUpgradeBarWidth = 0;
      cryptoCountUpgradeBar.style.width = cryptoUpgradeBarWidth + "%";
      upgradeWitdh = 2.5;
      defaultcryptoMoney *= 2;
    }

    if (cryptoUpgradeCount === secondTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      cryptoMoney *= 4;
      cryptoMoneyDisplay.innerHTML = cryptoMoney.toFixed(2);

      cryptoUpgradeBarWidth = 0;
      cryptoCountUpgradeBar.style.width = cryptoUpgradeBarWidth + "%";
      upgradeWitdh = 2;
      defaultcryptoMoney *= 2;
    }

    if (cryptoUpgradeCount === thirdTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      cryptoMoney *= 5;
      cryptoMoneyDisplay.innerHTML = cryptoMoney.toFixed(2);

      cryptoUpgradeBarWidth = 0;
      cryptoCountUpgradeBar.style.width = cryptoUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      defaultcryptoMoney *= 2;
    }
    if (cryptoUpgradeCount === forthTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      cryptoMoney *= 10;
      cryptoMoneyDisplay.innerHTML = cryptoMoney.toFixed(2);
      cryptoCountUpgradeBar.style.width = 100 + "%";
      defaultcryptoMoney *= 2;
    }
  });
};

export default cryptoFunction;
