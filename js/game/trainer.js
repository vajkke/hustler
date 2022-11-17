const trainerProgressBar = document.querySelector(".trainer-progress--bar");

//btns
const trainerBtn = document.querySelector(".trainerBtn");
const trainerUpgradeBtn = document.querySelector(".trainer-cost-container");

//display
const totalMoneyDisplay = document.querySelector(".total-money--amount");
const trainerMoneyDisplay = document.querySelector(".trainer-profit");
const trainerTimeDisplay = document.querySelector(".trainer-time");
const trainerUpgradePriceDisplay = document.querySelector(
  ".trainer-upgrade--price"
);
const trainerUpgradeCountDisplay = document.querySelector(
  ".trainer-upgrade-count"
);

const trainerCountUpgradeBar = document.querySelector(
  ".trainer-upgrade-progress-bar"
);

//upgrades
let trainerUpgradeBarWidth = 0;
let trainerUpgradePrice = 1500;
let trainerUpgradeCount = 0;

let firstTimeStampUpgrade = 10;
let secondTimeStampUpgrade = 100;
let thirdTimeStampUpgrade = 200;
let forthTimeStampUpgrade = 300;

let upgradeWitdh = 10;

// money
let totalMoney = +totalMoneyDisplay.innerHTML;
let defaulttrainerMoney = 5000;
let trainerMoney = 5000;

//time
let trainerTime = 360;
let trainerTimeValue = trainerTime;

//playable
let btnClicked = false;

const trainerFunction = () => {
  totalMoney = +totalMoneyDisplay.innerHTML;
  trainerTimeDisplay.innerHTML = `0${trainerTimeValue / 60}:00`;
  const intervalTimer = () => {
    trainerTimeValue--;
    trainerTimeDisplay.innerHTML = `0${trainerTimeValue / 60}:00`;
  };
  trainerBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (!btnClicked) {
      btnClicked = true;
      trainerProgressBar.style.cssText = `width: 100%; transition: width ${trainerTime}s ease-in-out;`;
      let timeInterval = setInterval(intervalTimer, 1000);

      setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += trainerMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(2);
        trainerProgressBar.style.cssText = `width: 0%;`;
        setTimeout((btnClicked = false), trainerTime * 1000);
        clearInterval(timeInterval);
        trainerTimeValue = trainerTime;
        trainerTimeDisplay.innerHTML = `0${trainerTimeValue / 60}:00`;
      }, trainerTime * 1000);
    }
  });

  trainerUpgradeBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (totalMoney > trainerUpgradePrice) {
      trainerMoney += defaulttrainerMoney;
      totalMoney -= trainerUpgradePrice;
      trainerUpgradeCount++;
      trainerUpgradePrice += trainerUpgradePrice / 4;

      totalMoneyDisplay.innerHTML = totalMoney.toFixed(2);
      trainerMoneyDisplay.innerHTML = trainerMoney.toFixed(2);
      trainerUpgradePriceDisplay.innerHTML = trainerUpgradePrice.toFixed(2);
      trainerUpgradeCountDisplay.innerHTML = trainerUpgradeCount;
      trainerUpgradeBarWidth += upgradeWitdh;
      trainerCountUpgradeBar.style.width = trainerUpgradeBarWidth + "%";
    }

    if (trainerUpgradeCount === firstTimeStampUpgrade) {
      trainerUpgradeCount++;
      trainerMoney *= 2;
      trainerUpgradeBarWidth = 0;
      trainerCountUpgradeBar.style.width = trainerUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      defaulttrainerMoney *= 2;
    }

    if (trainerUpgradeCount === secondTimeStampUpgrade) {
      trainerUpgradeCount++;
      trainerMoney *= 2;
      trainerUpgradeBarWidth = 0;
      trainerCountUpgradeBar.style.width = trainerUpgradeBarWidth + "%";
      defaulttrainerMoney *= 2;
    }

    if (trainerUpgradeCount === thirdTimeStampUpgrade) {
      trainerUpgradeCount++;
      trainerMoney *= 2;
      trainerUpgradeBarWidth = 0;
      trainerCountUpgradeBar.style.width = trainerUpgradeBarWidth + "%";
      defaulttrainerMoney *= 2;
    }
    if (trainerUpgradeCount === forthTimeStampUpgrade) {
      trainerUpgradeCount++;
      trainerMoney *= 2;
      trainerUpgradeBarWidth = 0;
      trainerCountUpgradeBar.style.width = trainerUpgradeBarWidth + "%";
      defaulttrainerMoney *= 2;
    }
  });
};

export default trainerFunction;
