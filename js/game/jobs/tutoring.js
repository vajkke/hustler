const jobsSection = document.querySelector(".jobs");

const tutoringProgressBar = document.querySelector(".tutoring-progress--bar");

//btns
const tutoringBtn = document.querySelector(".tutoringBtn");
const tutoringUpgradeBtn = document.querySelector(".tutoring-cost-container");

//display
const totalMoneySliderDisplay = document.querySelector(".total-money--slider");
const totalMoneyShopDisplay = document.querySelector(".total-money--shop");
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
let tutoringUpgradeCount = +tutoringUpgradeCountDisplay.innerHTML;

let firstTimeStampUpgrade = 10;
let secondTimeStampUpgrade = 50;
let thirdTimeStampUpgrade = 100;
let forthTimeStampUpgrade = 200;

let upgradeWitdh = 10;

// money
let totalMoney = +totalMoneyDisplay.innerHTML;
let defaulttutoringMoney = +tutoringMoneyDisplay.innerHTML;
let tutoringMoney = +tutoringMoneyDisplay.innerHTML;

//time
let tutoringTime = +tutoringTimeDisplay.getAttribute("time");
let tutoringTimeValue = tutoringTime;

//playable

// export let btnClickedTutoring = false;
let tutoringUpgradeAttribute = tutoringUpgradeBtn.getAttribute("upgradeCount");

export let timeIntervalTutoring;
export let timeOutTutoring;

export const tutoringFunction = () => {
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
    tutoringTime = +tutoringTimeDisplay.getAttribute("time");
    totalMoney = +totalMoneyDisplay.innerHTML;
    defaulttutoringMoney = +tutoringMoneyDisplay.innerHTML;
    tutoringMoney = +tutoringMoneyDisplay.innerHTML;
    if (tutoringBtn.getAttribute("tutoringBtnClicked") === "no") {
      console.log("jeste");
      tutoringTimeValue = +tutoringTimeDisplay.getAttribute("time");
      tutoringBtn.setAttribute("tutoringBtnClicked", "yes");
      tutoringProgressBar.style.cssText = `width: 100%; transition: width ${tutoringTime}s ease-in-out;`;

      timeIntervalTutoring = setInterval(intervalTimer, 1000);

      timeOutTutoring = setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += tutoringMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneySliderDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneyShopDisplay.innerHTML = totalMoney.toFixed(1);
        tutoringProgressBar.style.cssText = `width: 0%;`;
        setTimeout(
          tutoringBtn.setAttribute("tutoringBtnClicked", "no"),
          tutoringTime * 1000
        );
        clearInterval(timeIntervalTutoring);
        tutoringTimeValue = tutoringTime;
        tutoringTimeDisplay.innerHTML = `00:${
          tutoringTimeValue >= 10 ? tutoringTimeValue : "0" + tutoringTimeValue
        }`;
      }, tutoringTime * 1000);
    }
  });

  tutoringUpgradeBtn.addEventListener("click", () => {
    tutoringUpgradeAttribute = tutoringUpgradeBtn.getAttribute("upgradeCount");
    tutoringUpgradeCount = +tutoringUpgradeCountDisplay.innerHTML;
    tutoringUpgradePrice = +tutoringUpgradePriceDisplay.innerHTML;
    totalMoney = +totalMoneyDisplay.innerHTML;
    tutoringMoney = +tutoringMoneyDisplay.innerHTML;
    defaulttutoringMoney = +tutoringMoneyDisplay.innerHTML;
    if (totalMoney > tutoringUpgradePrice) {
      tutoringMoney += defaulttutoringMoney / 2;
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
      tutoringMoney *= 1.7;
      tutoringMoneyDisplay.innerHTML = tutoringMoney.toFixed(2);

      tutoringUpgradeBarWidth = 0;
      tutoringCountUpgradeBar.style.width = tutoringUpgradeBarWidth + "%";
      upgradeWitdh = 2.5;
      defaulttutoringMoney *= 1.5;
    }

    if (tutoringUpgradeCount === secondTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      tutoringMoney *= 1.7;
      tutoringMoneyDisplay.innerHTML = tutoringMoney.toFixed(2);
      tutoringUpgradeBarWidth = 0;
      tutoringCountUpgradeBar.style.width = tutoringUpgradeBarWidth + "%";
      upgradeWitdh = 2;
      defaulttutoringMoney *= 1.5;
    }

    if (tutoringUpgradeCount === thirdTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      tutoringMoney *= 1.7;
      tutoringMoneyDisplay.innerHTML = tutoringMoney.toFixed(2);
      tutoringUpgradeBarWidth = 0;
      tutoringCountUpgradeBar.style.width = tutoringUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      defaulttutoringMoney *= 1.5;
    }
    if (tutoringUpgradeCount === forthTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      tutoringMoney *= 1.7;
      tutoringMoneyDisplay.innerHTML = tutoringMoney.toFixed(2);
      tutoringCountUpgradeBar.style.width = 100 + "%";
      defaulttutoringMoney *= 1.5;
    }
  });
};
