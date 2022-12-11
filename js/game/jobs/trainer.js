const trainerProgressBar = document.querySelector(".trainer-progress--bar");

//btns
const trainerBtn = document.querySelector(".trainerBtn");
const trainerUpgradeBtn = document.querySelector(".trainer-cost-container");

//display
const totalMoneySliderDisplay = document.querySelector(".total-money--slider");
const totalMoneyShopDisplay = document.querySelector(".total-money--shop");
const totalMoneyDisplay = document.querySelector(".total-money--amount");
const trainerMoneyDisplay = document.querySelector(".trainer-profit");
const trainerTimeDisplay = document.querySelector(".trainer-time");
const trainerUpgradePriceDisplay = document.querySelector(
  ".trainer-upgrade--price"
);
const trainerUpgradeCountDisplay = document.querySelector(
  ".trainer-upgrade-count"
);

const trainerCountUpgradeBar = document.querySelector(
  ".trainer-upgrade-progress-bar"
);

//upgrades
let trainerUpgradeBarWidth = 0;
let trainerUpgradePrice = +trainerUpgradePriceDisplay.innerHTML;
let trainerUpgradeCount = 0;

let firstTimeStampUpgrade = 10;
let secondTimeStampUpgrade = 50;
let thirdTimeStampUpgrade = 100;
let forthTimeStampUpgrade = 200;

let upgradeWitdh = 10;

// money
let totalMoney = +totalMoneyDisplay.innerHTML;
let defaulttrainerMoney = +trainerMoneyDisplay.innerHTML;
let trainerMoney = +trainerMoneyDisplay.innerHTML;

//time
let trainerTime = +trainerTimeDisplay.getAttribute("time");
let trainerTimeValue = trainerTime;

//playable
let btnClicked = false;

let hours = Math.floor(trainerTime / 3600);
let minutes = Math.floor(trainerTime / 60) - hours * 60;
let seconds = trainerTime % 60;

const intervalTimeFunction = () => {
  hours = Math.floor(trainerTime / 3600);
  minutes = Math.floor(trainerTime / 60) - hours * 60;
  seconds = trainerTime % 60;

  if (hours < 10) {
    hours = `0${hours}`;
  } else if (hours === 0) {
    hours = ``;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  trainerTime--;

  trainerTimeDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;
};

const timeFunction = () => {
  trainerTime = +trainerTimeDisplay.getAttribute("time");
  hours = Math.floor(trainerTime / 3600);
  minutes = Math.floor(trainerTime / 60) - hours * 60;
  seconds = trainerTime % 60;

  if (hours < 10) {
    hours = `0${hours}`;
  } else if (hours === 0) {
    hours = ``;
    console.log("lalal");
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return [hours, minutes, seconds];
};

const trainerFunction = () => {
  trainerTime = +trainerTimeDisplay.getAttribute("time");
  intervalTimeFunction();

  totalMoney = +totalMoneyDisplay.innerHTML;
  trainerTimeDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;

  trainerBtn.addEventListener("click", () => {
    trainerTime = +trainerTimeDisplay.getAttribute("time");
    totalMoney = +totalMoneyDisplay.innerHTML;
    defaulttrainerMoney = +trainerMoneyDisplay.innerHTML;
    trainerMoney = +trainerMoneyDisplay.innerHTML;
    if (!btnClicked) {
      btnClicked = true;
      trainerProgressBar.style.cssText = `width: 100%; transition: width ${trainerTime}s ease-in-out;`;
      let timeInterval = setInterval(intervalTimeFunction, 1000);

      setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += trainerMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneySliderDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneyShopDisplay.innerHTML = totalMoney.toFixed(1);
        trainerProgressBar.style.cssText = `width: 0%;`;
        setTimeout((btnClicked = false), trainerTime * 1000);
        clearInterval(timeInterval);
        trainerTime = 3600;
        trainerTimeDisplay.innerHTML = `${timeFunction()[0]}:${
          timeFunction()[1]
        }:${timeFunction()[2]}`;
      }, trainerTime * 1000);
    }
  });

  trainerUpgradeBtn.addEventListener("click", () => {
    trainerUpgradePrice = +trainerUpgradePriceDisplay.innerHTML;
    totalMoney = +totalMoneyDisplay.innerHTML;
    defaulttrainerMoney = +trainerMoneyDisplay.innerHTML;
    trainerMoney = +trainerMoneyDisplay.innerHTML;
    if (totalMoney > trainerUpgradePrice) {
      trainerMoney += defaulttrainerMoney;
      totalMoney -= trainerUpgradePrice;
      trainerUpgradeCount++;
      trainerUpgradePrice += trainerUpgradePrice / 7;

      totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
      trainerMoneyDisplay.innerHTML = trainerMoney.toFixed(2);
      trainerUpgradePriceDisplay.innerHTML = trainerUpgradePrice.toFixed(2);
      trainerUpgradeCountDisplay.innerHTML = Math.round(trainerUpgradeCount);
      trainerUpgradeBarWidth += upgradeWitdh;
      trainerCountUpgradeBar.style.width = trainerUpgradeBarWidth + "%";
    }

    if (trainerUpgradeCount === firstTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      trainerMoney *= 3;
      trainerMoneyDisplay.innerHTML = trainerMoney.toFixed(2);

      trainerUpgradeBarWidth = 0;
      trainerCountUpgradeBar.style.width = trainerUpgradeBarWidth + "%";
      upgradeWitdh = 2.5;
      defaulttrainerMoney *= 2;
    }

    if (trainerUpgradeCount === secondTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      trainerMoney *= 4;
      trainerMoneyDisplay.innerHTML = trainerMoney.toFixed(2);

      trainerUpgradeBarWidth = 0;
      trainerCountUpgradeBar.style.width = trainerUpgradeBarWidth + "%";
      upgradeWitdh = 2;
      defaulttrainerMoney *= 2;
    }

    if (trainerUpgradeCount === thirdTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      trainerMoney *= 5;
      trainerMoneyDisplay.innerHTML = trainerMoney.toFixed(2);

      trainerUpgradeBarWidth = 0;
      trainerCountUpgradeBar.style.width = trainerUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      defaulttrainerMoney *= 2;
    }
    if (trainerUpgradeCount === forthTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      trainerMoney *= 10;
      trainerMoneyDisplay.innerHTML = trainerMoney.toFixed(2);
      trainerCountUpgradeBar.style.width = 100 + "%";
      defaulttrainerMoney *= 2;
    }
  });
};

export default trainerFunction;
