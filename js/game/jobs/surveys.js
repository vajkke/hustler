const surveyProgressBar = document.querySelector(".survey-progress--bar");

//btns
const surveysBtn = document.querySelector(".surveysBtn");
const surveyUpgradeBtn = document.querySelector(".surveys-cost-container");

//display
const totalMoneyDisplay = document.querySelector(".total-money--amount");
const surveyMoneyDisplay = document.querySelector(".survey-profit");
const surveyTimeDisplay = document.querySelector(".surveys-time");
const surveyUpgradePriceDisplay = document.querySelector(
  ".survey-upgrade--price"
);
const surveyUpgradeCountDisplay = document.querySelector(
  ".surveys-upgrade-count"
);

const surveyCountUpgradeBar = document.querySelector(
  ".survey-upgrade-progress-bar"
);

//upgrades
let surveyUpgradeBarWidth = 0;
let surveyUpgradePrice = +surveyUpgradePriceDisplay.innerHTML;
let surveyUpgradeCount = 0;

let firstTimeStampUpgrade = 10;
let secondTimeStampUpgrade = 50;
let thirdTimeStampUpgrade = 100;
let forthTimeStampUpgrade = 200;

let upgradeWitdh = 10;

// money
let totalMoney = +totalMoneyDisplay.innerHTML;
let defaultSurveyMoney = 0.1;
let surveyMoney = +surveyMoneyDisplay.innerHTML;

//time
let surveyTime = 4;
let surveyTimeValue = surveyTime;

//playable
let btnClicked = false;
let surveyUpgradeAttribute = surveyUpgradeBtn.getAttribute("upgradeCount");

const surveyFunction = () => {
  totalMoney = +totalMoneyDisplay.innerHTML;
  surveyTimeDisplay.innerHTML = `00:${
    surveyTimeValue > 10 ? surveyTime : "0" + surveyTime
  }`;
  const intervalTimer = () => {
    surveyTimeValue--;
    surveyTimeDisplay.innerHTML = `00:${
      surveyTimeValue > 10 ? surveyTimeValue : "0" + surveyTimeValue
    }`;
  };
  surveysBtn.addEventListener("click", () => {
    console.log(surveyUpgradePrice);
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (!btnClicked) {
      btnClicked = true;
      surveyProgressBar.style.cssText = `width: 100%; transition: width ${surveyTime}s ease-in-out;`;
      let timeInterval = setInterval(intervalTimer, 1000);

      setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += surveyMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
        surveyProgressBar.style.cssText = `width: 0%;`;
        setTimeout((btnClicked = false), surveyTime * 1000);
        clearInterval(timeInterval);
        surveyTimeValue = surveyTime;
        surveyTimeDisplay.innerHTML = `00:${
          surveyTimeValue > 10 ? surveyTime : "0" + surveyTime
        }`;
      }, surveyTime * 1000);
    }
  });

  surveyUpgradeBtn.addEventListener("click", () => {
    surveyUpgradeAttribute = surveyUpgradeBtn.getAttribute("upgradeCount");
    surveyUpgradePrice = +surveyUpgradePriceDisplay.innerHTML;
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (totalMoney > surveyUpgradePrice) {
      surveyMoney += defaultSurveyMoney;
      totalMoney -= surveyUpgradePrice;
      surveyUpgradeCount++;
      surveyUpgradePrice += surveyUpgradePrice / 7;

      totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
      surveyMoneyDisplay.innerHTML = surveyMoney.toFixed(2);
      surveyUpgradePriceDisplay.innerHTML = surveyUpgradePrice.toFixed(2);
      surveyUpgradeCountDisplay.innerHTML = Math.round(surveyUpgradeCount);
      surveyUpgradeBarWidth += upgradeWitdh;
      surveyCountUpgradeBar.style.width = surveyUpgradeBarWidth + "%";
    }

    if (surveyUpgradeCount === firstTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      surveyMoney *= 3;
      surveyMoneyDisplay.innerHTML = surveyMoney.toFixed(2);

      surveyUpgradeBarWidth = 0;
      surveyCountUpgradeBar.style.width = surveyUpgradeBarWidth + "%";
      upgradeWitdh = 2.5;
      defaultSurveyMoney *= 2;
    }

    if (surveyUpgradeCount === secondTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      surveyMoney *= 4;
      surveyMoneyDisplay.innerHTML = surveyMoney.toFixed(2);

      surveyUpgradeBarWidth = 0;
      surveyCountUpgradeBar.style.width = surveyUpgradeBarWidth + "%";
      upgradeWitdh = 2;
      defaultSurveyMoney *= 2;
    }

    if (surveyUpgradeCount === thirdTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      surveyMoney *= 5;
      surveyMoneyDisplay.innerHTML = surveyMoney.toFixed(2);

      surveyUpgradeBarWidth = 0;
      surveyCountUpgradeBar.style.width = surveyUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      defaultSurveyMoney *= 2;
    }
    if (surveyUpgradeCount === forthTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      surveyMoney *= 10;
      surveyMoneyDisplay.innerHTML = surveyMoney.toFixed(2);
      surveyCountUpgradeBar.style.width = 100 + "%";
      defaultSurveyMoney *= 2;
    }
  });
};

export default surveyFunction;
