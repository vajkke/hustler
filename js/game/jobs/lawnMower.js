const lawnMowerProgressBar = document.querySelector(".lawnMower-progress--bar");

//btns
const lawnMowerBtn = document.querySelector(".lawnMowerBtn");
const lawnMowerUpgradeBtn = document.querySelector(".lawnMower-cost-container");

//display
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
let lawnMowerUpgradePrice = 1500;
let lawnMowerUpgradeCount = 0;

let firstTimeStampUpgrade = 10;
let secondTimeStampUpgrade = 100;
let thirdTimeStampUpgrade = 200;
let forthTimeStampUpgrade = 300;

let upgradeWitdh = 10;

// money
let totalMoney = +totalMoneyDisplay.innerHTML;
let defaultlawnMowerMoney = 500;
let lawnMowerMoney = 1000;

//time
let lawnMowerTime = 120;
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
  minutes = Math.floor(lawnMowerTime / 60);
  seconds = lawnMowerTime % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return [minutes, seconds];
};

const lawnMowerFunction = () => {
  intervalTimeFunction();

  totalMoney = +totalMoneyDisplay.innerHTML;
  lawnMowerTimeDisplay.innerHTML = `${minutes}:${seconds}`;

  lawnMowerBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (!btnClicked) {
      btnClicked = true;
      lawnMowerProgressBar.style.cssText = `width: 100%; transition: width ${lawnMowerTime}s ease-in-out;`;
      let timeInterval = setInterval(intervalTimeFunction, 1000);

      setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += lawnMowerMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(2);
        lawnMowerProgressBar.style.cssText = `width: 0%;`;
        setTimeout((btnClicked = false), lawnMowerTime * 1000);
        clearInterval(timeInterval);
        lawnMowerTime = 120;
        lawnMowerTimeDisplay.innerHTML = `${timeFunction()[0]}:${
          timeFunction()[1]
        }`;
      }, lawnMowerTime * 1000);
    }
  });

  lawnMowerUpgradeBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (totalMoney > lawnMowerUpgradePrice) {
      lawnMowerMoney += defaultlawnMowerMoney;
      totalMoney -= lawnMowerUpgradePrice;
      lawnMowerUpgradeCount++;
      lawnMowerUpgradePrice += lawnMowerUpgradePrice / 4;

      totalMoneyDisplay.innerHTML = totalMoney.toFixed(2);
      lawnMowerMoneyDisplay.innerHTML = lawnMowerMoney.toFixed(2);
      lawnMowerUpgradePriceDisplay.innerHTML = lawnMowerUpgradePrice.toFixed(2);
      lawnMowerUpgradeCountDisplay.innerHTML = lawnMowerUpgradeCount;
      lawnMowerUpgradeBarWidth += upgradeWitdh;
      lawnMowerCountUpgradeBar.style.width = lawnMowerUpgradeBarWidth + "%";
    }

    if (lawnMowerUpgradeCount === firstTimeStampUpgrade) {
      lawnMowerUpgradeCount++;
      lawnMowerMoney *= 2;
      lawnMowerUpgradeBarWidth = 0;
      lawnMowerCountUpgradeBar.style.width = lawnMowerUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      defaultlawnMowerMoney *= 2;
    }

    if (lawnMowerUpgradeCount === secondTimeStampUpgrade) {
      lawnMowerUpgradeCount++;
      lawnMowerMoney *= 2;
      lawnMowerUpgradeBarWidth = 0;
      lawnMowerCountUpgradeBar.style.width = lawnMowerUpgradeBarWidth + "%";
      defaultlawnMowerMoney *= 2;
    }

    if (lawnMowerUpgradeCount === thirdTimeStampUpgrade) {
      lawnMowerUpgradeCount++;
      lawnMowerMoney *= 2;
      lawnMowerUpgradeBarWidth = 0;
      lawnMowerCountUpgradeBar.style.width = lawnMowerUpgradeBarWidth + "%";
      defaultlawnMowerMoney *= 2;
    }
    if (lawnMowerUpgradeCount === forthTimeStampUpgrade) {
      lawnMowerUpgradeCount++;
      lawnMowerMoney *= 2;
      lawnMowerUpgradeBarWidth = 0;
      lawnMowerCountUpgradeBar.style.width = lawnMowerUpgradeBarWidth + "%";
      defaultlawnMowerMoney *= 2;
    }
  });
};

export default lawnMowerFunction;
