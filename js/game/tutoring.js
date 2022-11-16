const tutoringProgressBar = document.querySelector(".tutoring-progress--bar");

//btns
const tutoringBtn = document.querySelector(".tutoringBtn");
const tutoringUpgradeBtn = document.querySelector(".tutoring-cost-container");

//display
const totalMoneyDisplay = document.querySelector(".total-money--amount");
const tutoringMoneyDisplay = document.querySelector(".tutoring-profit");
const tutoringTimeDisplay = document.querySelector(".tutoring-time");
const tutoringUpgradePriceDisplay = document.querySelector(
  ".tutoring-upgrade--price"
);
const tutoringUpgradeCountDisplay = document.querySelector(
  ".tutoring-upgrade-count"
);

const tutoringCountUpgradeBar = document.querySelector(
  ".tutoring-upgrade-progress-bar"
);

//upgrades
let tutoringUpgradeBarWidth = 0;
let tutoringUpgradePrice = 50;
let tutoringUpgradeCount = 0;

let firstTimeStampUpgrade = 10;
let secondTimeStampUpgrade = 100;
let thirdTimeStampUpgrade = 200;
let forthTimeStampUpgrade = 300;

let upgradeWitdh = 10;

// money
let totalMoney = +totalMoneyDisplay.innerHTML;
let defaultTutoringMoney = 5;
let tutoringMoney = 5;

//time
let tutoringTime = 12;
let tutoringTimeValue = tutoringTime;

//playable
let btnClicked = false;

const tutoringFunction = () => {
  totalMoney = +totalMoneyDisplay.innerHTML;
  tutoringTimeDisplay.innerHTML = `00:${tutoringTimeValue}`;
  const intervalTimer = () => {
    tutoringTimeValue--;
    tutoringTimeDisplay.innerHTML = `00:${tutoringTimeValue}`;
  };
  tutoringBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (!btnClicked) {
      btnClicked = true;
      tutoringProgressBar.style.cssText = `width: 100%; transition: width ${tutoringTime}s ease-in-out;`;
      let timeInterval = setInterval(intervalTimer, 1000);

      setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += tutoringMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(2);
        tutoringProgressBar.style.cssText = `width: 0%;`;
        setTimeout((btnClicked = false), tutoringTime * 1000);
        clearInterval(timeInterval);
        tutoringTimeValue = tutoringTime;
        tutoringTimeDisplay.innerHTML = `00:${tutoringTimeValue}`;
      }, tutoringTime * 1000);
    }
  });

  tutoringUpgradeBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (totalMoney > tutoringUpgradePrice) {
      tutoringMoney += defaultTutoringMoney;
      totalMoney -= tutoringUpgradePrice;
      tutoringUpgradeCount++;
      tutoringUpgradePrice += tutoringUpgradePrice / 4;

      totalMoneyDisplay.innerHTML = totalMoney.toFixed(2);
      tutoringMoneyDisplay.innerHTML = tutoringMoney.toFixed(2);
      tutoringUpgradePriceDisplay.innerHTML = tutoringUpgradePrice.toFixed(2);
      tutoringUpgradeCountDisplay.innerHTML = tutoringUpgradeCount;
      tutoringUpgradeBarWidth += upgradeWitdh;
      tutoringCountUpgradeBar.style.width = tutoringUpgradeBarWidth + "%";
    }

    if (tutoringUpgradeCount === firstTimeStampUpgrade) {
      surveyUpgradeCount++;
      tutoringMoney *= 2;
      tutoringUpgradeBarWidth = 0;
      tutoringCountUpgradeBar.style.width = tutoringUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      defaultTutoringMoney *= 2;
    }

    if (tutoringUpgradeCount === secondTimeStampUpgrade) {
      surveyUpgradeCount++;
      tutoringMoney *= 2;
      tutoringUpgradeBarWidth = 0;
      tutoringCountUpgradeBar.style.width = tutoringUpgradeBarWidth + "%";
      defaultTutoringMoney *= 2;
    }

    if (tutoringUpgradeCount === thirdTimeStampUpgrade) {
      surveyUpgradeCount++;
      tutoringMoney *= 2;
      tutoringUpgradeBarWidth = 0;
      tutoringCountUpgradeBar.style.width = tutoringUpgradeBarWidth + "%";
      defaultTutoringMoney *= 2;
    }
    if (tutoringUpgradeCount === forthTimeStampUpgrade) {
      surveyUpgradeCount++;
      tutoringMoney *= 2;
      tutoringUpgradeBarWidth = 0;
      tutoringCountUpgradeBar.style.width = tutoringUpgradeBarWidth + "%";
      defaultTutoringMoney *= 2;
    }
  });
};

export default tutoringFunction;
