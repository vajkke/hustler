const lawnMowerProgressBar = document.querySelector(".lawnMower-progress--bar");

//btns
const lawnMowerBtn = document.querySelector(".lawnMowerBtn");
const lawnMowerUpgradeBtn = document.querySelector(".lawnMower-cost-container");

//display
const totalMoneySliderDisplay = document.querySelector(".total-money--slider");
const totalMoneyShopDisplay = document.querySelector(".total-money--shop");
const totalMoneyDisplay = document.querySelector(".total-money--amount");
const lawnMowerMoneyDisplay = document.querySelector(".lawnMower-profit");
const lawnMowerTimeDisplay = document.querySelector(".lawnMower-time");
const lawnMowerUpgradePriceDisplay = document.querySelector(
  ".lawnMower-upgrade--price"
);
const lawnMowerUpgradeCountDisplay = document.querySelector(
  ".lawnMower-upgrade-count"
);

const lawnMowerCountUpgradeBar = document.querySelector(
  ".lawnMower-upgrade-progress-bar"
);

//upgrades
let lawnMowerUpgradeBarWidth = 0;
let lawnMowerUpgradePrice = +lawnMowerUpgradePriceDisplay.innerHTML;
let lawnMowerUpgradeCount = +lawnMowerUpgradeCountDisplay.innerHTML;

let firstTimeStampUpgrade = 10;
let secondTimeStampUpgrade = 50;
let thirdTimeStampUpgrade = 100;
let forthTimeStampUpgrade = 200;

let upgradeWitdh = 10;

// money
let totalMoney = +totalMoneyDisplay.innerHTML;
let defaultlawnMowerMoney = +lawnMowerMoneyDisplay.innerHTML;
let lawnMowerMoney = +lawnMowerMoneyDisplay.innerHTML;

//time
let lawnMowerTime = +lawnMowerTimeDisplay.getAttribute("time");
let lawnMowerTimeValue = lawnMowerTime;

//playable
let btnClicked = false;

let minutes = Math.floor(lawnMowerTime / 60);
let seconds = lawnMowerTime % 60;

const intervalTimeFunction = () => {
  minutes = Math.floor(lawnMowerTime / 60);
  seconds = lawnMowerTime % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  lawnMowerTime--;

  lawnMowerTimeDisplay.innerHTML = `${minutes}:${seconds}`;
};

const timeFunction = () => {
  lawnMowerTime = +lawnMowerTimeDisplay.getAttribute("time");
  minutes = Math.floor(lawnMowerTime / 60);
  seconds = lawnMowerTime % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return [minutes, seconds];
};

export let timeIntervalLawnMower;
export let timeOutLawnMower;

export const lawnMowerFunction = () => {
  lawnMowerTime = +lawnMowerTimeDisplay.getAttribute("time");
  intervalTimeFunction();
  totalMoney = +totalMoneyDisplay.innerHTML;

  lawnMowerBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    defaultlawnMowerMoney = +lawnMowerMoneyDisplay.innerHTML;
    lawnMowerMoney = +lawnMowerMoneyDisplay.innerHTML;
    if (lawnMowerBtn.getAttribute("lawnMowerBtnClicked") === "no") {
      lawnMowerTime = +lawnMowerTimeDisplay.getAttribute("time");
      lawnMowerBtn.setAttribute("lawnMowerBtnClicked", "yes");
      lawnMowerProgressBar.style.cssText = `width: 100%; transition: width ${lawnMowerTime}s ease-in-out;`;
      timeIntervalLawnMower = setInterval(intervalTimeFunction, 1000);

      timeOutLawnMower = setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += lawnMowerMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneySliderDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneyShopDisplay.innerHTML = totalMoney.toFixed(1);
        lawnMowerProgressBar.style.cssText = `width: 0%;`;
        setTimeout(
          lawnMowerBtn.setAttribute("lawnMowerBtnClicked", "no"),
          lawnMowerTime * 1000
        );
        clearInterval(timeIntervalLawnMower);
        lawnMowerTime = 120;
        lawnMowerTimeDisplay.innerHTML = `${timeFunction()[0]}:${
          timeFunction()[1]
        }`;
      }, lawnMowerTime * 1000);
    }
  });

  lawnMowerUpgradeBtn.addEventListener("click", () => {
    lawnMowerUpgradeCount = +lawnMowerUpgradeCountDisplay.innerHTML;
    lawnMowerUpgradePrice = +lawnMowerUpgradePriceDisplay.innerHTML;
    totalMoney = +totalMoneyDisplay.innerHTML;
    lawnMowerMoney = +lawnMowerMoneyDisplay.innerHTML;
    defaultlawnMowerMoney = +lawnMowerMoneyDisplay.innerHTML;
    if (totalMoney > lawnMowerUpgradePrice) {
      lawnMowerMoney += defaultlawnMowerMoney / 2;
      totalMoney -= lawnMowerUpgradePrice;
      lawnMowerUpgradeCount++;
      lawnMowerUpgradePrice += lawnMowerUpgradePrice / 7;

      totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
      lawnMowerMoneyDisplay.innerHTML = lawnMowerMoney.toFixed(2);
      lawnMowerUpgradePriceDisplay.innerHTML = lawnMowerUpgradePrice.toFixed(2);
      lawnMowerUpgradeCountDisplay.innerHTML = Math.round(
        lawnMowerUpgradeCount
      );
      lawnMowerUpgradeBarWidth += upgradeWitdh;
      lawnMowerCountUpgradeBar.style.width = lawnMowerUpgradeBarWidth + "%";
    }

    if (lawnMowerUpgradeCount === firstTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      lawnMowerMoney *= 1.7;
      lawnMowerMoneyDisplay.innerHTML = lawnMowerMoney.toFixed(2);

      lawnMowerUpgradeBarWidth = 0;
      lawnMowerCountUpgradeBar.style.width = lawnMowerUpgradeBarWidth + "%";
      upgradeWitdh = 2.5;
      defaultlawnMowerMoney *= 1.5;
    }

    if (lawnMowerUpgradeCount === secondTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      lawnMowerMoney *= 1.7;
      lawnMowerMoneyDisplay.innerHTML = lawnMowerMoney.toFixed(2);
      lawnMowerUpgradeBarWidth = 0;
      lawnMowerCountUpgradeBar.style.width = lawnMowerUpgradeBarWidth + "%";
      upgradeWitdh = 2;
      defaultlawnMowerMoney *= 1.5;
    }

    if (lawnMowerUpgradeCount === thirdTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      lawnMowerMoney *= 1.7;
      lawnMowerMoneyDisplay.innerHTML = lawnMowerMoney.toFixed(2);
      lawnMowerUpgradeBarWidth = 0;
      lawnMowerCountUpgradeBar.style.width = lawnMowerUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      defaultlawnMowerMoney *= 1.5;
    }
    if (lawnMowerUpgradeCount === forthTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      lawnMowerMoney *= 1.7;
      lawnMowerMoneyDisplay.innerHTML = lawnMowerMoney.toFixed(2);
      lawnMowerCountUpgradeBar.style.width = 100 + "%";
      defaultlawnMowerMoney *= 1.5;
    }
  });
};
