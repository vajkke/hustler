const dogWalkingProgressBar = document.querySelector(
  ".dogWalking-progress--bar"
);
const dogWalkingBar = document.querySelector(".dogWalking-bar");

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
let dogWalkingUpgradeCount = +dogWalkingUpgradeCountDisplay.innerHTML;

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
let dogWalkingTime = +dogWalkingTimeDisplay.getAttribute("time");
let dogWalkingTimeValue = dogWalkingTime;

export let timeIntervalDogWalking;
export let timeOutDogWalking;

export const dogWalkingFunction = () => {
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
    dogWalkingTime = +dogWalkingTimeDisplay.getAttribute("time");
    defaultdogWalkingMoney = +dogWalkingMoneyDisplay.innerHTML;
    dogWalkingMoney = +dogWalkingMoneyDisplay.innerHTML;
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (dogWalkingBtn.getAttribute("dogWalkingBtnClicked") === "no") {
      dogWalkingTimeValue = +dogWalkingTimeDisplay.getAttribute("time");
      dogWalkingBtn.setAttribute("dogWalkingBtnClicked", "yes");

      if (dogWalkingTime < 1) {
        dogWalkingBar.style.cssText = `  background-image: url("../img/animations/progress-bar.gif");
        background-repeat: no-repeat;
        background-size: auto;`;
        dogWalkingProgressBar.classList.add("hidden");
      }

      dogWalkingProgressBar.style.cssText = `width: 100%; transition: width ${dogWalkingTime}s ease-in-out;`;
      timeIntervalDogWalking = setInterval(intervalTimer, 1000);

      timeOutDogWalking = setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += dogWalkingMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneySliderDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneyShopDisplay.innerHTML = totalMoney.toFixed(1);
        dogWalkingProgressBar.style.cssText = `width: 0%;`;
        setTimeout(
          dogWalkingBtn.setAttribute("dogWalkingBtnClickedss", "yes"),
          dogWalkingTime * 1000
        );
        clearInterval(timeIntervalDogWalking);
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
    dogWalkingUpgradeCount = +surveyUpgradeCountDisplay.innerHTML;
    dogWalkingUpgradePrice = +surveyUpgradePriceDisplay.innerHTML;
    totalMoney = +totalMoneyDisplay.innerHTML;
    dogWalkingMoney = +surveyMoneyDisplay.innerHTML;
    defaultSurveyMoney = +surveyMoneyDisplay.innerHTML;
    if (totalMoney > dogWalkingUpgradePrice) {
      dogWalkingMoney += defaultSurveyMoney / 2;
      totalMoney -= dogWalkingUpgradePrice;
      dogWalkingUpgradeCount++;
      dogWalkingUpgradePrice += dogWalkingUpgradePrice / 7;

      totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
      dogWalkingMoneyDisplay.innerHTML = dogWalkingMoney.toFixed(2);
      dogWalkingUpgradePriceDisplay.innerHTML =
        dogWalkingUpgradePrice.toFixed(2);
      dogWalkingUpgradeCountDisplay.innerHTML = Math.round(surveyUpgradeCount);
      dogWalkingUpgradeBarWidth += upgradeWitdh;
      dogWalkingCountUpgradeBar.style.width = dogWalkingUpgradeBarWidth + "%";
    }

    if (surveyUpgradeCount === firstTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      dogWalkingMoney *= 1.7;
      dogWalkingMoneyDisplay.innerHTML = dogWalkingMoney.toFixed(2);

      dogWalkingUpgradeBarWidth = 0;
      dogWalkingCountUpgradeBar.style.width = dogWalkingUpgradeBarWidth + "%";
      upgradeWitdh = 2.5;
      defaultSurveyMoney *= 1.5;
    }

    if (surveyUpgradeCount === secondTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      dogWalkingMoney *= 1.7;
      dogWalkingMoneyDisplay.innerHTML = dogWalkingMoney.toFixed(2);
      dogWalkingUpgradeBarWidth = 0;
      dogWalkingCountUpgradeBar.style.width = dogWalkingUpgradeBarWidth + "%";
      upgradeWitdh = 2;
      defaultSurveyMoney *= 1.5;
    }

    if (surveyUpgradeCount === thirdTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      dogWalkingMoney *= 1.7;
      dogWalkingMoneyDisplay.innerHTML = dogWalkingMoney.toFixed(2);
      dogWalkingUpgradeBarWidth = 0;
      dogWalkingCountUpgradeBar.style.width = dogWalkingUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      defaultSurveyMoney *= 1.5;
    }
    if (surveyUpgradeCount === forthTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      dogWalkingMoney *= 1.7;
      dogWalkingMoneyDisplay.innerHTML = dogWalkingMoney.toFixed(2);
      dogWalkingCountUpgradeBar.style.width = 100 + "%";
      defaultSurveyMoney *= 1.5;
    }
  });
};
