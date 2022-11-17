const cryptoProgressBar = document.querySelector(".crypto-progress--bar");

//btns
const cryptoBtn = document.querySelector(".cryptoBtn");
const cryptoUpgradeBtn = document.querySelector(".crypto-cost-container");

//display
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
let secondTimeStampUpgrade = 100;
let thirdTimeStampUpgrade = 200;
let forthTimeStampUpgrade = 300;

let upgradeWitdh = 10;

// money
let totalMoney = +totalMoneyDisplay.innerHTML;
let defaultcryptoMoney = 1000;
let cryptoMoney = 1000;

//time
let cryptoTime = 10800;
let cryptoTimeValue = cryptoTime;

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
  intervalTimeFunction();

  totalMoney = +totalMoneyDisplay.innerHTML;
  cryptoTimeDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;

  cryptoBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (!btnClicked) {
      btnClicked = true;
      cryptoProgressBar.style.cssText = `width: 100%; transition: width ${cryptoTime}s ease-in-out;`;
      let timeInterval = setInterval(intervalTimeFunction, 1000);

      setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += cryptoMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(2);
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
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (totalMoney > cryptoUpgradePrice) {
      cryptoMoney += defaultcryptoMoney;
      totalMoney -= cryptoUpgradePrice;
      cryptoUpgradeCount++;
      cryptoUpgradePrice += cryptoUpgradePrice / 4;

      totalMoneyDisplay.innerHTML = totalMoney.toFixed(2);
      cryptoMoneyDisplay.innerHTML = cryptoMoney.toFixed(2);
      cryptoUpgradePriceDisplay.innerHTML = cryptoUpgradePrice.toFixed(2);
      cryptoUpgradeCountDisplay.innerHTML = cryptoUpgradeCount;
      cryptoUpgradeBarWidth += upgradeWitdh;
      cryptoCountUpgradeBar.style.width = cryptoUpgradeBarWidth + "%";
    }

    if (cryptoUpgradeCount === firstTimeStampUpgrade) {
      cryptoUpgradeCount++;
      cryptoMoney *= 2;
      cryptoUpgradeBarWidth = 0;
      cryptoCountUpgradeBar.style.width = cryptoUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      defaultcryptoMoney *= 2;
    }

    if (cryptoUpgradeCount === secondTimeStampUpgrade) {
      cryptoUpgradeCount++;
      cryptoMoney *= 2;
      cryptoUpgradeBarWidth = 0;
      cryptoCountUpgradeBar.style.width = cryptoUpgradeBarWidth + "%";
      defaultcryptoMoney *= 2;
    }

    if (cryptoUpgradeCount === thirdTimeStampUpgrade) {
      cryptoUpgradeCount++;
      cryptoMoney *= 2;
      cryptoUpgradeBarWidth = 0;
      cryptoCountUpgradeBar.style.width = cryptoUpgradeBarWidth + "%";
      defaultcryptoMoney *= 2;
    }
    if (cryptoUpgradeCount === forthTimeStampUpgrade) {
      cryptoUpgradeCount++;
      cryptoMoney *= 2;
      cryptoUpgradeBarWidth = 0;
      cryptoCountUpgradeBar.style.width = cryptoUpgradeBarWidth + "%";
      defaultcryptoMoney *= 2;
    }
  });
};

export default cryptoFunction;
