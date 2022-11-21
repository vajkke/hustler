const babysittingProgressBar = document.querySelector(
  ".babysitting-progress--bar"
);

//btns
const babysittingBtn = document.querySelector(".babysittingBtn");
const babysittingUpgradeBtn = document.querySelector(
  ".babysitting-cost-container"
);

//display
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
let babysittingUpgradeCount = 0;

let firstTimeStampUpgrade = 10;
let secondTimeStampUpgrade = 50;
let thirdTimeStampUpgrade = 100;
let forthTimeStampUpgrade = 200;

let upgradeWitdh = 10;

// money
let totalMoney = +totalMoneyDisplay.innerHTML;
let defaultbabysittingMoney = 2000;
let babysittingMoney = 5000;

//time
let babysittingTime = 360;
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
  minutes = Math.floor(babysittingTime / 60);
  seconds = babysittingTime % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return [minutes, seconds];
};

const babysittingFunction = () => {
  intervalTimeFunction();

  totalMoney = +totalMoneyDisplay.innerHTML;
  babysittingTimeDisplay.innerHTML = `${minutes}:${seconds}`;

  babysittingBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (!btnClicked) {
      btnClicked = true;
      babysittingProgressBar.style.cssText = `width: 100%; transition: width ${babysittingTime}s ease-in-out;`;
      let timeInterval = setInterval(intervalTimeFunction, 1000);

      setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += babysittingMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(2);
        babysittingProgressBar.style.cssText = `width: 0%;`;
        setTimeout((btnClicked = false), babysittingTime * 1000);
        clearInterval(timeInterval);
        babysittingTime = 360;
        babysittingTimeDisplay.innerHTML = `${timeFunction()[0]}:${
          timeFunction()[1]
        }`;
      }, babysittingTime * 1000);
    }
  });

  babysittingUpgradeBtn.addEventListener("click", () => {
    babysittingUpgradeAttribute =
      babysittingUpgradeBtn.getAttribute("upgradeCount");
    babysittingUpgradePrice = +babysittingUpgradePriceDisplay.innerHTML;
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (totalMoney > babysittingUpgradePrice) {
      babysittingMoney += babysittingMoney;
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
      babysittingMoney *= 3;
      babysittingMoneyDisplay.innerHTML = babysittingMoney.toFixed(2);

      babysittingUpgradeBarWidth = 0;
      babysittingCountUpgradeBar.style.width = babysittingUpgradeBarWidth + "%";
      upgradeWitdh = 2.5;
      babysittingMoney *= 2;
    }

    if (babysittingUpgradeCount === secondTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      babysittingMoney *= 4;
      babysittingMoneyDisplay.innerHTML = babysittingMoney.toFixed(2);

      babysittingUpgradeBarWidth = 0;
      babysittingCountUpgradeBar.style.width = babysittingUpgradeBarWidth + "%";
      upgradeWitdh = 2;
      babysittingMoney *= 2;
    }

    if (babysittingUpgradeCount === thirdTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      babysittingMoney *= 5;
      babysittingMoneyDisplay.innerHTML = babysittingMoney.toFixed(2);

      babysittingUpgradeBarWidth = 0;
      babysittingCountUpgradeBar.style.width = babysittingUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      babysittingMoney *= 2;
    }
    if (babysittingUpgradeCount === forthTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      babysittingMoney *= 10;
      babysittingMoneyDisplay.innerHTML = babysittingMoney.toFixed(2);
      babysittingCountUpgradeBar.style.width = 100 + "%";
      babysittingMoney *= 2;
    }
  });
};

export default babysittingFunction;
