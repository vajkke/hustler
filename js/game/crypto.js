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
let defaultcryptoMoney = 5000;
let cryptoMoney = 5000;

//time
let cryptoTime = 1200;
let cryptoTimeValue = cryptoTime;

//playable
let btnClicked = false;

const cryptoFunction = () => {
  totalMoney = +totalMoneyDisplay.innerHTML;
  cryptoTimeDisplay.innerHTML = `${cryptoTimeValue / 60}:00`;
  const intervalTimer = () => {
    cryptoTimeValue--;
    cryptoTimeDisplay.innerHTML = `${cryptoTimeValue / 60}:00`;
  };
  cryptoBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (!btnClicked) {
      btnClicked = true;
      cryptoProgressBar.style.cssText = `width: 100%; transition: width ${cryptoTime}s ease-in-out;`;
      let timeInterval = setInterval(intervalTimer, 1000);

      setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += cryptoMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(2);
        cryptoProgressBar.style.cssText = `width: 0%;`;
        setTimeout((btnClicked = false), cryptoTime * 1000);
        clearInterval(timeInterval);
        cryptoTimeValue = cryptoTime;
        cryptoTimeDisplay.innerHTML = `${cryptoTimeValue / 60}:00`;
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
