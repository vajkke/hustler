const surveyProgressBar = document.querySelector(".survey-progress--bar");

const jobsSection = document.querySelector(".jobs");

//btns
const surveysBtn = document.querySelector(".surveysBtn");
const surveyUpgradeBtn = document.querySelector(".surveys-cost-container");

//display
const totalMoneySliderDisplay = document.querySelector(".total-money--slider");
const totalMoneyShopDisplay = document.querySelector(".total-money--shop");
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
let surveyUpgradeCount = +surveyUpgradeCountDisplay.innerHTML;

let firstTimeStampUpgrade = 10;
let secondTimeStampUpgrade = 50;
let thirdTimeStampUpgrade = 100;
let forthTimeStampUpgrade = 200;

let upgradeWitdh = 10;

// money
let totalMoney = +totalMoneyDisplay.innerHTML;
let defaultSurveyMoney = +surveyMoneyDisplay.innerHTML;
let surveyMoney = +surveyMoneyDisplay.innerHTML;

//time
let surveyTime = +surveyTimeDisplay.getAttribute("time");
let surveyTimeValue = surveyTime;

//playable
let surveyUpgradeAttribute = surveyUpgradeBtn.getAttribute("upgradeCount");

export let timeIntervalSurveys;
export let timeOutSurvey;

export const surveyFunction = () => {
  surveyTime = +surveyTimeDisplay.getAttribute("time");
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
    surveyTime = +surveyTimeDisplay.getAttribute("time");
    totalMoney = +totalMoneyDisplay.innerHTML;
    surveyMoney = +surveyMoneyDisplay.innerHTML;
    defaultSurveyMoney = +surveyMoneyDisplay.innerHTML;

    if (surveysBtn.getAttribute("surveyBtnClicked") === "no") {
      surveyTimeValue = +surveyTimeDisplay.getAttribute("time");
      surveysBtn.setAttribute("surveyBtnClicked", "yes");
      surveyProgressBar.style.cssText = `width: 100%; transition: width ${surveyTime}s ease-in-out;`;

      timeIntervalSurveys = setInterval(intervalTimer, 1000);
      timeOutSurvey = setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += surveyMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneySliderDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneyShopDisplay.innerHTML = totalMoney.toFixed(1);
        surveyProgressBar.style.cssText = `width: 0%;`;
        setTimeout(
          surveysBtn.setAttribute("surveyBtnClicked", "no"),
          surveyTime * 1000
        );
        clearInterval(timeIntervalSurveys);
        surveyTimeValue = surveyTime;
        surveyTimeDisplay.innerHTML = `00:${
          surveyTimeValue > 10 ? surveyTime : "0" + surveyTime
        }`;
      }, surveyTime * 1000);
    }
  });

  surveyUpgradeBtn.addEventListener("click", () => {
    surveyUpgradeAttribute = surveyUpgradeBtn.getAttribute("upgradeCount");
    surveyUpgradeCount = +surveyUpgradeCountDisplay.innerHTML;
    surveyUpgradePrice = +surveyUpgradePriceDisplay.innerHTML;
    totalMoney = +totalMoneyDisplay.innerHTML;
    surveyMoney = +surveyMoneyDisplay.innerHTML;
    defaultSurveyMoney = +surveyMoneyDisplay.innerHTML;
    if (totalMoney > surveyUpgradePrice) {
      surveyMoney += defaultSurveyMoney / 2;
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
      surveyMoney *= 1.7;
      surveyMoneyDisplay.innerHTML = surveyMoney.toFixed(2);

      surveyUpgradeBarWidth = 0;
      surveyCountUpgradeBar.style.width = surveyUpgradeBarWidth + "%";
      upgradeWitdh = 2.5;
      defaultSurveyMoney *= 1.5;
    }

    if (surveyUpgradeCount === secondTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      surveyMoney *= 1.7;
      surveyMoneyDisplay.innerHTML = surveyMoney.toFixed(2);
      surveyUpgradeBarWidth = 0;
      surveyCountUpgradeBar.style.width = surveyUpgradeBarWidth + "%";
      upgradeWitdh = 2;
      defaultSurveyMoney *= 1.5;
    }

    if (surveyUpgradeCount === thirdTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      surveyMoney *= 1.7;
      surveyMoneyDisplay.innerHTML = surveyMoney.toFixed(2);
      surveyUpgradeBarWidth = 0;
      surveyCountUpgradeBar.style.width = surveyUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      defaultSurveyMoney *= 1.5;
    }
    if (surveyUpgradeCount === forthTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      surveyMoney *= 1.7;
      surveyMoneyDisplay.innerHTML = surveyMoney.toFixed(2);
      surveyCountUpgradeBar.style.width = 100 + "%";
      defaultSurveyMoney *= 1.5;
    }
  });
};
