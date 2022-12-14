const trainerProgressBar = document.querySelector(".trainer-progress--bar");
const trainerBar = document.querySelector(".trainer-bar");

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
let trainerUpgradeCount = +trainerUpgradeCountDisplay.innerHTML;

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

export let timeIntervalTrainer;
export let timeOutTrainer;

export const trainerFunction = () => {
  trainerTime = +trainerTimeDisplay.getAttribute("time");
  intervalTimeFunction();
  totalMoney = +totalMoneyDisplay.innerHTML;

  trainerBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    defaulttrainerMoney = +trainerMoneyDisplay.innerHTML;
    trainerMoney = +trainerMoneyDisplay.innerHTML;
    if (trainerBtn.getAttribute("trainerBtnClicked") === "no") {
      trainerTime = +trainerTimeDisplay.getAttribute("time");
      trainerBtn.setAttribute("trainerBtnClicked", "yes");

      if (trainerTime < 1) {
        trainerBar.style.cssText = `  background-image: url("../img/animations/progress-bar.gif");
        background-repeat: no-repeat;
        background-size: auto;`;
        trainerProgressBar.classList.add("hidden");
      }

      trainerProgressBar.style.cssText = `width: 100%; transition: width ${trainerTime}s ease-in-out;`;
      timeIntervalTrainer = setInterval(intervalTimeFunction, 1000);

      timeOutTrainer = setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += trainerMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneySliderDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneyShopDisplay.innerHTML = totalMoney.toFixed(1);
        trainerProgressBar.style.cssText = `width: 0%;`;
        setTimeout(
          trainerBtn.setAttribute("trainerBtnClicked", "no"),
          trainerTime * 1000
        );
        clearInterval(timeIntervalTrainer);
        trainerTime = 3600;
        trainerTimeDisplay.innerHTML = `${timeFunction()[0]}:${
          timeFunction()[1]
        }:${timeFunction()[2]}`;
      }, trainerTime * 1000);
    }
  });

  trainerUpgradeBtn.addEventListener("click", () => {
    trainerUpgradeCount = +trainerUpgradeCountDisplay.innerHTML;
    trainerUpgradePrice = +trainerUpgradePriceDisplay.innerHTML;
    totalMoney = +totalMoneyDisplay.innerHTML;
    trainerMoney = +trainerMoneyDisplay.innerHTML;
    defaulttrainerMoney = +trainerMoneyDisplay.innerHTML;
    if (totalMoney > trainerUpgradePrice) {
      trainerMoney += defaulttrainerMoney / 2;
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
      trainerMoney *= 1.7;
      trainerMoneyDisplay.innerHTML = trainerMoney.toFixed(2);

      trainerUpgradeBarWidth = 0;
      trainerCountUpgradeBar.style.width = trainerUpgradeBarWidth + "%";
      upgradeWitdh = 2.5;
      defaulttrainerMoney *= 1.5;
    }

    if (trainerUpgradeCount === secondTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      trainerMoney *= 1.7;
      trainerMoneyDisplay.innerHTML = trainerMoney.toFixed(2);
      trainerUpgradeBarWidth = 0;
      trainerCountUpgradeBar.style.width = trainerUpgradeBarWidth + "%";
      upgradeWitdh = 2;
      defaulttrainerMoney *= 1.5;
    }

    if (trainerUpgradeCount === thirdTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      trainerMoney *= 1.7;
      trainerMoneyDisplay.innerHTML = trainerMoney.toFixed(2);
      trainerUpgradeBarWidth = 0;
      trainerCountUpgradeBar.style.width = trainerUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      defaulttrainerMoney *= 1.5;
    }
    if (trainerUpgradeCount === forthTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      trainerMoney *= 1.7;
      trainerMoneyDisplay.innerHTML = trainerMoney.toFixed(2);
      trainerCountUpgradeBar.style.width = 100 + "%";
      defaulttrainerMoney *= 1.5;
    }
  });
};
