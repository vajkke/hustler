const babysittingProgressBar = document.querySelector(
  ".babysitting-progress--bar"
);

const babysittingBar = document.querySelector(".babysitting-bar");

//btns
const babysittingBtn = document.querySelector(".babysittingBtn");
const babysittingUpgradeBtn = document.querySelector(
  ".babysitting-cost-container"
);

//display
const totalMoneySliderDisplay = document.querySelector(".total-money--slider");
const totalMoneyShopDisplay = document.querySelector(".total-money--shop");
const totalMoneyDisplay = document.querySelector(".total-money--amount");
const babysittingMoneyDisplay = document.querySelector(".babysitting-profit");
const babysittingTimeDisplay = document.querySelector(".babysitting-time");
const babysittingUpgradePriceDisplay = document.querySelector(
  ".babysitting-upgrade--price"
);
const babysittingUpgradeCountDisplay = document.querySelector(
  ".babysitting-upgrade-count"
);

const babysittingCountUpgradeBar = document.querySelector(
  ".babysitting-upgrade-progress-bar"
);

//upgrades
let babysittingUpgradeBarWidth = 0;
let babysittingUpgradePrice = +babysittingUpgradePriceDisplay.innerHTML;
let babysittingUpgradeCount = +babysittingUpgradeCountDisplay.innerHTML;

let firstTimeStampUpgrade = 10;
let secondTimeStampUpgrade = 50;
let thirdTimeStampUpgrade = 100;
let forthTimeStampUpgrade = 200;

let upgradeWitdh = 10;

// money
let totalMoney = +totalMoneyDisplay.innerHTML;
let defaultbabysittingMoney = +babysittingMoneyDisplay.innerHTML;
let babysittingMoney = +babysittingMoneyDisplay.innerHTML;

//time
let babysittingTime = +babysittingTimeDisplay.getAttribute("time");
let babysittingTimeValue = babysittingTime;

//playable
let btnClicked = false;

let minutes = Math.floor(babysittingTime / 60);
let seconds = babysittingTime % 60;

const intervalTimeFunction = () => {
  minutes = Math.floor(babysittingTime / 60);
  seconds = babysittingTime % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  babysittingTime--;

  babysittingTimeDisplay.innerHTML = `${minutes}:${seconds}`;
};

const timeFunction = () => {
  babysittingTime = +babysittingTimeDisplay.getAttribute("time");
  minutes = Math.floor(babysittingTime / 60);
  seconds = babysittingTime % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return [minutes, seconds];
};

export let timeIntervalBabysitting;
export let timeOutBabysitting;

export const babysittingFunction = () => {
  babysittingTime = +babysittingTimeDisplay.getAttribute("time");
  intervalTimeFunction();
  totalMoney = +totalMoneyDisplay.innerHTML;

  babysittingBtn.addEventListener("click", () => {
    let timeInterval;
    totalMoney = +totalMoneyDisplay.innerHTML;
    defaultbabysittingMoney = +babysittingMoneyDisplay.innerHTML;
    babysittingMoney = +babysittingMoneyDisplay.innerHTML;
    if (babysittingBtn.getAttribute("babysittingBtnClicked") === "no") {
      babysittingTime = +babysittingTimeDisplay.getAttribute("time");
      babysittingBtn.setAttribute("babysittingBtnClicked", "yes");

      if (babysittingTime < 1) {
        babysittingBar.style.cssText = `  background-image: url("../img/animations/progress-bar.gif");
        background-repeat: no-repeat;
        background-size: auto;`;
        babysittingProgressBar.classList.add("hidden");
      }

      babysittingProgressBar.style.cssText = `width: 100%; transition: width ${babysittingTime}s ease-in-out;`;
      timeIntervalBabysitting = setInterval(intervalTimeFunction, 1000);

      timeOutBabysitting = setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += babysittingMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneySliderDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneyShopDisplay.innerHTML = totalMoney.toFixed(1);
        babysittingProgressBar.style.cssText = `width: 0%;`;
        setTimeout(
          babysittingBtn.setAttribute("babysittingBtnClicked", "no"),
          babysittingTime * 1000
        );
        clearInterval(timeInterval);
        babysittingTime = 360;
        babysittingTimeDisplay.innerHTML = `${timeFunction()[0]}:${
          timeFunction()[1]
        }`;
      }, babysittingTime * 1000);
    }
  });

  babysittingUpgradeBtn.addEventListener("click", () => {
    babysittingUpgradeCount = +babysittingUpgradeCountDisplay.innerHTML;
    babysittingUpgradePrice = +babysittingUpgradePriceDisplay.innerHTML;
    totalMoney = +totalMoneyDisplay.innerHTML;
    babysittingMoney = +babysittingMoneyDisplay.innerHTML;
    defaultbabysittingMoney = +babysittingMoneyDisplay.innerHTML;
    if (totalMoney > babysittingUpgradePrice) {
      babysittingMoney += defaultbabysittingMoney / 2;
      totalMoney -= babysittingUpgradePrice;
      babysittingUpgradeCount++;
      babysittingUpgradePrice += babysittingUpgradePrice / 7;

      totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
      babysittingMoneyDisplay.innerHTML = babysittingMoney.toFixed(2);
      babysittingUpgradePriceDisplay.innerHTML =
        babysittingUpgradePrice.toFixed(2);
      babysittingUpgradeCountDisplay.innerHTML = Math.round(
        babysittingUpgradeCount
      );
      babysittingUpgradeBarWidth += upgradeWitdh;
      babysittingCountUpgradeBar.style.width = babysittingUpgradeBarWidth + "%";
    }

    if (babysittingUpgradeCount === firstTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      babysittingMoney *= 1.7;
      babysittingMoneyDisplay.innerHTML = babysittingMoney.toFixed(2);

      babysittingUpgradeBarWidth = 0;
      babysittingCountUpgradeBar.style.width = babysittingUpgradeBarWidth + "%";
      upgradeWitdh = 2.5;
      defaultbabysittingMoney *= 1.5;
    }

    if (babysittingUpgradeCount === secondTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      babysittingMoney *= 1.7;
      babysittingMoneyDisplay.innerHTML = babysittingMoney.toFixed(2);
      babysittingUpgradeBarWidth = 0;
      babysittingCountUpgradeBar.style.width = babysittingUpgradeBarWidth + "%";
      upgradeWitdh = 2;
      defaultbabysittingMoney *= 1.5;
    }

    if (babysittingUpgradeCount === thirdTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      babysittingMoney *= 1.7;
      babysittingMoneyDisplay.innerHTML = babysittingMoney.toFixed(2);
      babysittingUpgradeBarWidth = 0;
      babysittingCountUpgradeBar.style.width = babysittingUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      defaultbabysittingMoney *= 1.5;
    }
    if (babysittingUpgradeCount === forthTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      babysittingMoney *= 1.7;
      babysittingMoneyDisplay.innerHTML = babysittingMoney.toFixed(2);
      babysittingCountUpgradeBar.style.width = 100 + "%";
      defaultbabysittingMoney *= 1.5;
    }
  });
};
