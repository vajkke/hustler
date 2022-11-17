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
let surveyUpgradePrice = 1;
let surveyUpgradeCount = 0;

let firstTimeStampUpgrade = 10;
let secondTimeStampUpgrade = 100;
let thirdTimeStampUpgrade = 200;
let forthTimeStampUpgrade = 300;

let upgradeWitdh = 10;

// money
let totalMoney = +totalMoneyDisplay.innerHTML;
let defaultSurveyMoney = 0.1;
let surveyMoney = 0.1;

//time
let surveyTime = 4;
let surveyTimeValue = surveyTime;

//playable
let btnClicked = false;

const surveyFunction = () => {
  totalMoney = +totalMoneyDisplay.innerHTML;
  surveyTimeDisplay.innerHTML = `00:0${surveyTimeValue}`;
  const intervalTimer = () => {
    surveyTimeValue--;
    surveyTimeDisplay.innerHTML = `00:0${surveyTimeValue}`;
  };
  surveysBtn.addEventListener("click", () => {
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
        surveyTimeDisplay.innerHTML = `00:0${surveyTimeValue}`;
      }, surveyTime * 1000);
    }
  });

  surveyUpgradeBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (totalMoney > surveyUpgradePrice) {
      surveyMoney += defaultSurveyMoney;
      totalMoney -= surveyUpgradePrice;
      surveyUpgradeCount++;
      surveyUpgradePrice += surveyUpgradePrice / 5;

      totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
      surveyMoneyDisplay.innerHTML = surveyMoney.toFixed(2);
      surveyUpgradePriceDisplay.innerHTML = surveyUpgradePrice.toFixed(2);
      surveyUpgradeCountDisplay.innerHTML = surveyUpgradeCount;
      surveyUpgradeBarWidth += upgradeWitdh;
      surveyCountUpgradeBar.style.width = surveyUpgradeBarWidth + "%";
    }

    if (surveyUpgradeCount === firstTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      surveyMoneyDisplay.innerHTML = surveyMoney.toFixed(2);
      surveyMoney *= 2;
      surveyUpgradeBarWidth = 0;
      surveyUpgradeCount++;
      surveyCountUpgradeBar.style.width = surveyUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      defaultSurveyMoney *= 2;
    }

    if (surveyUpgradeCount === secondTimeStampUpgrade) {
      surveyUpgradeCount++;
      surveyMoneyDisplay.innerHTML = surveyMoney.toFixed(2);
      surveyMoney *= 2;
      surveyUpgradeBarWidth = 0;
      surveyCountUpgradeBar.style.width = surveyUpgradeBarWidth + "%";
      defaultSurveyMoney *= 2;
    }

    if (surveyUpgradeCount === thirdTimeStampUpgrade) {
      surveyUpgradeCount++;
      surveyMoneyDisplay.innerHTML = surveyMoney.toFixed(2);
      surveyMoney *= 2;
      surveyUpgradeBarWidth = 0;
      surveyCountUpgradeBar.style.width = surveyUpgradeBarWidth + "%";
      defaultSurveyMoney *= 2;
    }
    if (surveyUpgradeCount === forthTimeStampUpgrade) {
      surveyUpgradeCount++;
      surveyMoneyDisplay.innerHTML = surveyMoney.toFixed(2);
      surveyMoney *= 2;
      surveyUpgradeBarWidth = 0;
      surveyCountUpgradeBar.style.width = surveyUpgradeBarWidth + "%";
      defaultSurveyMoney *= 2;
    }
  });
};

export default surveyFunction;
