const dogWalkingProgressBar = document.querySelector(
  ".dogWalking-progress--bar"
);

//btns
const dogWalkingBtn = document.querySelector(".dogWalkingBtn");
const dogWalkingUpgradeBtn = document.querySelector(
  ".dogWalking-cost-container"
);

//display
const totalMoneySliderDisplay = document.querySelector(".total-money--slider");
const totalMoneyShopDisplay = document.querySelector(".total-money--shop");
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
let dogWalkingUpgradePrice = +dogWalkingUpgradePriceDisplay.innerHTML;
let dogWalkingUpgradeCount = 0;

let firstTimeStampUpgrade = 10;
let secondTimeStampUpgrade = 50;
let thirdTimeStampUpgrade = 100;
let forthTimeStampUpgrade = 200;

let upgradeWitdh = 10;

// money
let totalMoney = +totalMoneyDisplay.innerHTML;
let defaultdogWalkingMoney = +dogWalkingMoneyDisplay.innerHTML;
let dogWalkingMoney = +dogWalkingMoneyDisplay.innerHTML;

//time
let dogWalkingTime = 36;
let dogWalkingTimeValue = dogWalkingTime;

//playable
let btnClicked = false;
let dogWalkingUpgradeAttribute =
  dogWalkingUpgradeBtn.getAttribute("upgradeCount");

const dogWalkingFunction = () => {
  totalMoney = +totalMoneyDisplay.innerHTML;

  dogWalkingTimeDisplay.innerHTML = `00:${
    dogWalkingTimeValue >= 10 ? dogWalkingTimeValue : "0" + dogWalkingTimeValue
  }`;
  const intervalTimer = () => {
    dogWalkingTimeValue--;
    dogWalkingTimeDisplay.innerHTML = `00:${
      dogWalkingTimeValue >= 10
        ? dogWalkingTimeValue
        : "0" + dogWalkingTimeValue
    }`;
  };
  dogWalkingBtn.addEventListener("click", () => {
    defaultdogWalkingMoney = +dogWalkingMoneyDisplay.innerHTML;
    dogWalkingMoney = +dogWalkingMoneyDisplay.innerHTML;
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (!btnClicked) {
      btnClicked = true;
      dogWalkingProgressBar.style.cssText = `width: 100%; transition: width ${dogWalkingTime}s ease-in-out;`;
      let timeInterval = setInterval(intervalTimer, 1000);

      setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += dogWalkingMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneySliderDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneyShopDisplay.innerHTML = totalMoney.toFixed(1);
        dogWalkingProgressBar.style.cssText = `width: 0%;`;
        setTimeout((btnClicked = false), dogWalkingTime * 1000);
        clearInterval(timeInterval);
        dogWalkingTimeValue = dogWalkingTime;
        dogWalkingTimeDisplay.innerHTML = `00:${
          dogWalkingTimeValue >= 10
            ? dogWalkingTimeValue
            : "0" + dogWalkingTimeValue
        }`;
      }, dogWalkingTime * 1000);
    }
  });

  dogWalkingUpgradeBtn.addEventListener("click", () => {
    dogWalkingUpgradeAttribute =
      dogWalkingUpgradeBtn.getAttribute("upgradeCount");
    dogWalkingUpgradePrice = +dogWalkingUpgradePriceDisplay.innerHTML;
    totalMoney = +totalMoneyDisplay.innerHTML;
    defaultdogWalkingMoney = +dogWalkingMoneyDisplay.innerHTML;
    dogWalkingMoney = +dogWalkingMoneyDisplay.innerHTML;
    if (totalMoney > dogWalkingUpgradePrice) {
      dogWalkingMoney += defaultdogWalkingMoney;
      totalMoney -= dogWalkingUpgradePrice;
      dogWalkingUpgradeCount++;
      dogWalkingUpgradePrice += dogWalkingUpgradePrice / 7;

      totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
      dogWalkingMoneyDisplay.innerHTML = dogWalkingMoney.toFixed(2);
      dogWalkingUpgradePriceDisplay.innerHTML =
        dogWalkingUpgradePrice.toFixed(2);
      dogWalkingUpgradeCountDisplay.innerHTML = Math.round(
        dogWalkingUpgradeCount
      );
      dogWalkingUpgradeBarWidth += upgradeWitdh;
      dogWalkingCountUpgradeBar.style.width = dogWalkingUpgradeBarWidth + "%";
    }

    if (dogWalkingUpgradeCount === firstTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      dogWalkingMoney *= 3;
      dogWalkingMoneyDisplay.innerHTML = dogWalkingMoney.toFixed(2);

      dogWalkingUpgradeBarWidth = 0;
      dogWalkingCountUpgradeBar.style.width = dogWalkingUpgradeBarWidth + "%";
      upgradeWitdh = 2.5;
      defaultdogWalkingMoney *= 2;
    }

    if (dogWalkingUpgradeCount === secondTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      dogWalkingMoney *= 4;
      dogWalkingMoneyDisplay.innerHTML = dogWalkingMoney.toFixed(2);

      dogWalkingUpgradeBarWidth = 0;
      dogWalkingCountUpgradeBar.style.width = dogWalkingUpgradeBarWidth + "%";
      upgradeWitdh = 2;
      defaultdogWalkingMoney *= 2;
    }

    if (dogWalkingUpgradeCount === thirdTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      dogWalkingMoney *= 5;
      dogWalkingMoneyDisplay.innerHTML = dogWalkingMoney.toFixed(2);

      dogWalkingUpgradeBarWidth = 0;
      dogWalkingCountUpgradeBar.style.width = dogWalkingUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      defaultdogWalkingMoney *= 2;
    }
    if (dogWalkingUpgradeCount === forthTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      dogWalkingMoney *= 10;
      dogWalkingMoneyDisplay.innerHTML = dogWalkingMoney.toFixed(2);
      dogWalkingCountUpgradeBar.style.width = 100 + "%";
      defaultdogWalkingMoney *= 2;
    }
  });
};

export default dogWalkingFunction;
