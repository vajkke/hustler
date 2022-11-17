const dogWalkingProgressBar = document.querySelector(
  ".dogWalking-progress--bar"
);

//btns
const dogWalkingBtn = document.querySelector(".dogWalkingBtn");
const dogWalkingUpgradeBtn = document.querySelector(
  ".dogWalking-cost-container"
);

//display
const totalMoneyDisplay = document.querySelector(".total-money--amount");
const dogWalkingMoneyDisplay = document.querySelector(".dogWalking-profit");
const dogWalkingTimeDisplay = document.querySelector(".dogWalking-time");
const dogWalkingUpgradePriceDisplay = document.querySelector(
  ".dogWalking-upgrade--price"
);
const dogWalkingUpgradeCountDisplay = document.querySelector(
  ".dogWalking-upgrade-count"
);

const dogWalkingCountUpgradeBar = document.querySelector(
  ".dogWalking-upgrade-progress-bar"
);

//upgrades
let dogWalkingUpgradeBarWidth = 0;
let dogWalkingUpgradePrice = 500;
let dogWalkingUpgradeCount = 0;

let firstTimeStampUpgrade = 10;
let secondTimeStampUpgrade = 100;
let thirdTimeStampUpgrade = 200;
let forthTimeStampUpgrade = 300;

let upgradeWitdh = 10;

// money
let totalMoney = +totalMoneyDisplay.innerHTML;
let defaultdogWalkingMoney = 125;
let dogWalkingMoney = 250;

//time
let dogWalkingTime = 36;
let dogWalkingTimeValue = dogWalkingTime;

//playable
let btnClicked = false;

const timeFunction = () => {};

const dogWalkingFunction = () => {
  totalMoney = +totalMoneyDisplay.innerHTML;
  dogWalkingTimeDisplay.innerHTML = `00:${dogWalkingTimeValue}`;
  const intervalTimer = () => {
    dogWalkingTimeValue--;
    dogWalkingTimeDisplay.innerHTML = `00:${dogWalkingTimeValue}`;
  };
  dogWalkingBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (!btnClicked) {
      btnClicked = true;
      dogWalkingProgressBar.style.cssText = `width: 100%; transition: width ${dogWalkingTime}s ease-in-out;`;
      let timeInterval = setInterval(intervalTimer, 1000);

      setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += dogWalkingMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(2);
        dogWalkingProgressBar.style.cssText = `width: 0%;`;
        setTimeout((btnClicked = false), dogWalkingTime * 1000);
        clearInterval(timeInterval);
        dogWalkingTimeValue = dogWalkingTime;
        dogWalkingTimeDisplay.innerHTML = `00:${dogWalkingTimeValue}`;
      }, dogWalkingTime * 1000);
    }
  });

  dogWalkingUpgradeBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (totalMoney > dogWalkingUpgradePrice) {
      dogWalkingMoney += defaultdogWalkingMoney;
      totalMoney -= dogWalkingUpgradePrice;
      dogWalkingUpgradeCount++;
      dogWalkingUpgradePrice += dogWalkingUpgradePrice / 4;

      totalMoneyDisplay.innerHTML = totalMoney.toFixed(2);
      dogWalkingMoneyDisplay.innerHTML = dogWalkingMoney.toFixed(2);
      dogWalkingUpgradePriceDisplay.innerHTML =
        dogWalkingUpgradePrice.toFixed(2);
      dogWalkingUpgradeCountDisplay.innerHTML = dogWalkingUpgradeCount;
      dogWalkingUpgradeBarWidth += upgradeWitdh;
      dogWalkingCountUpgradeBar.style.width = dogWalkingUpgradeBarWidth + "%";
    }

    if (dogWalkingUpgradeCount === firstTimeStampUpgrade) {
      dogWalkingUpgradeCount++;
      dogWalkingMoney *= 2;
      dogWalkingUpgradeBarWidth = 0;
      dogWalkingCountUpgradeBar.style.width = dogWalkingUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      defaultdogWalkingMoney *= 2;
    }

    if (dogWalkingUpgradeCount === secondTimeStampUpgrade) {
      dogWalkingUpgradeCount++;
      dogWalkingMoney *= 2;
      dogWalkingUpgradeBarWidth = 0;
      dogWalkingCountUpgradeBar.style.width = dogWalkingUpgradeBarWidth + "%";
      defaultdogWalkingMoney *= 2;
    }

    if (dogWalkingUpgradeCount === thirdTimeStampUpgrade) {
      dogWalkingUpgradeCount++;
      dogWalkingMoney *= 2;
      dogWalkingUpgradeBarWidth = 0;
      dogWalkingCountUpgradeBar.style.width = dogWalkingUpgradeBarWidth + "%";
      defaultdogWalkingMoney *= 2;
    }
    if (dogWalkingUpgradeCount === forthTimeStampUpgrade) {
      dogWalkingUpgradeCount++;
      dogWalkingMoney *= 2;
      dogWalkingUpgradeBarWidth = 0;
      dogWalkingCountUpgradeBar.style.width = dogWalkingUpgradeBarWidth + "%";
      defaultdogWalkingMoney *= 2;
    }
  });
};

export default dogWalkingFunction;
