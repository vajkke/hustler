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
let tutoringUpgradePrice = +tutoringUpgradePriceDisplay.innerHTML;
let tutoringUpgradeCount = 0;

let firstTimeStampUpgrade = 10;
let secondTimeStampUpgrade = 50;
let thirdTimeStampUpgrade = 100;
let forthTimeStampUpgrade = 200;

let upgradeWitdh = 10;

// money
let totalMoney = +totalMoneyDisplay.innerHTML;
let defaulttutoringMoney = 0.1;
let tutoringMoney = +tutoringMoneyDisplay.innerHTML;

//time
let tutoringTime = 12;
let tutoringTimeValue = tutoringTime;

//playable
let btnClicked = false;
let tutoringUpgradeAttribute = tutoringUpgradeBtn.getAttribute("upgradeCount");

const tutoringFunction = () => {
  totalMoney = +totalMoneyDisplay.innerHTML;
  tutoringTimeDisplay.innerHTML = `00:${
    tutoringTimeValue >= 10 ? tutoringTimeValue : "0" + tutoringTimeValue
  }`;
  const intervalTimer = () => {
    tutoringTimeValue--;
    tutoringTimeDisplay.innerHTML = `00:${
      tutoringTimeValue >= 10 ? tutoringTimeValue : "0" + tutoringTimeValue
    }`;
  };
  tutoringBtn.addEventListener("click", () => {
    console.log(tutoringUpgradePrice);
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (!btnClicked) {
      btnClicked = true;
      tutoringProgressBar.style.cssText = `width: 100%; transition: width ${tutoringTime}s ease-in-out;`;
      let timeInterval = setInterval(intervalTimer, 1000);

      setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += tutoringMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
        tutoringProgressBar.style.cssText = `width: 0%;`;
        setTimeout((btnClicked = false), tutoringTime * 1000);
        clearInterval(timeInterval);
        tutoringTimeValue = tutoringTime;
        tutoringTimeDisplay.innerHTML = `00:${
          tutoringTimeValue >= 10 ? tutoringTimeValue : "0" + tutoringTimeValue
        }`;
      }, tutoringTime * 1000);
    }
  });

  tutoringUpgradeBtn.addEventListener("click", () => {
    tutoringUpgradeAttribute = tutoringUpgradeBtn.getAttribute("upgradeCount");
    tutoringUpgradePrice = +tutoringUpgradePriceDisplay.innerHTML;
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (totalMoney > tutoringUpgradePrice) {
      tutoringMoney += defaulttutoringMoney;
      totalMoney -= tutoringUpgradePrice;
      tutoringUpgradeCount++;
      tutoringUpgradePrice += tutoringUpgradePrice / 7;

      totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
      tutoringMoneyDisplay.innerHTML = tutoringMoney.toFixed(2);
      tutoringUpgradePriceDisplay.innerHTML = tutoringUpgradePrice.toFixed(2);
      tutoringUpgradeCountDisplay.innerHTML = Math.round(tutoringUpgradeCount);
      tutoringUpgradeBarWidth += upgradeWitdh;
      tutoringCountUpgradeBar.style.width = tutoringUpgradeBarWidth + "%";
    }

    if (tutoringUpgradeCount === firstTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      tutoringMoney *= 3;
      tutoringMoneyDisplay.innerHTML = tutoringMoney.toFixed(2);

      tutoringUpgradeBarWidth = 0;
      tutoringCountUpgradeBar.style.width = tutoringUpgradeBarWidth + "%";
      upgradeWitdh = 2.5;
      defaulttutoringMoney *= 2;
    }

    if (tutoringUpgradeCount === secondTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      tutoringMoney *= 4;
      tutoringMoneyDisplay.innerHTML = tutoringMoney.toFixed(2);

      tutoringUpgradeBarWidth = 0;
      tutoringCountUpgradeBar.style.width = tutoringUpgradeBarWidth + "%";
      upgradeWitdh = 2;
      defaulttutoringMoney *= 2;
    }

    if (tutoringUpgradeCount === thirdTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      tutoringMoney *= 5;
      tutoringMoneyDisplay.innerHTML = tutoringMoney.toFixed(2);

      tutoringUpgradeBarWidth = 0;
      tutoringCountUpgradeBar.style.width = tutoringUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      defaulttutoringMoney *= 2;
    }
    if (tutoringUpgradeCount === forthTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      tutoringMoney *= 10;
      tutoringMoneyDisplay.innerHTML = tutoringMoney.toFixed(2);
      tutoringCountUpgradeBar.style.width = 100 + "%";
      defaulttutoringMoney *= 2;
    }
  });
};

export default tutoringFunction;
