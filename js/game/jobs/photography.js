const photographyProgressBar = document.querySelector(
  ".photography-progress--bar"
);

//btns
const photographyBtn = document.querySelector(".photographyBtn");
const photographyUpgradeBtn = document.querySelector(
  ".photography-cost-container"
);

//display
const totalMoneySliderDisplay = document.querySelector(".total-money--slider");
const totalMoneyShopDisplay = document.querySelector(".total-money--shop");
const totalMoneyDisplay = document.querySelector(".total-money--amount");
const photographyMoneyDisplay = document.querySelector(".photography-profit");
const photographyTimeDisplay = document.querySelector(".photography-time");
const photographyUpgradePriceDisplay = document.querySelector(
  ".photography-upgrade--price"
);
const photographyUpgradeCountDisplay = document.querySelector(
  ".photography-upgrade-count"
);

const photographyCountUpgradeBar = document.querySelector(
  ".photography-upgrade-progress-bar"
);

//upgrades
let photographyUpgradeBarWidth = 0;
let photographyUpgradePrice = +photographyUpgradePriceDisplay.innerHTML;
let photographyUpgradeCount = 0;

let firstTimeStampUpgrade = 10;
let secondTimeStampUpgrade = 50;
let thirdTimeStampUpgrade = 100;
let forthTimeStampUpgrade = 200;

let upgradeWitdh = 10;

// money
let totalMoney = +totalMoneyDisplay.innerHTML;
let defaultphotographyMoney = +photographyMoneyDisplay.innerHTML;
let photographyMoney = +photographyMoneyDisplay.innerHTML;

//time
let photographyTime = +photographyTimeDisplay.getAttribute("time");
let photographyTimeValue = photographyTime;

//playable
let btnClicked = false;

let minutes = Math.floor(photographyTime / 60);
let seconds = photographyTime % 60;

const intervalTimeFunction = () => {
  minutes = Math.floor(photographyTime / 60);
  seconds = photographyTime % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  photographyTime--;

  photographyTimeDisplay.innerHTML = `${minutes}:${seconds}`;
};

const timeFunction = () => {
  photographyTime = +photographyTimeDisplay.getAttribute("time");
  minutes = Math.floor(photographyTime / 60);
  seconds = photographyTime % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return [minutes, seconds];
};

const photographyFunction = () => {
  photographyTime = +photographyTimeDisplay.getAttribute("time");
  intervalTimeFunction();

  totalMoney = +totalMoneyDisplay.innerHTML;
  defaultphotographyMoney = +photographyMoneyDisplay.innerHTML;
  photographyMoney = +photographyMoneyDisplay.innerHTML;
  photographyTimeDisplay.innerHTML = `${minutes}:${seconds}`;

  photographyBtn.addEventListener("click", () => {
    photographyTime = +photographyTimeDisplay.getAttribute("time");
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (!btnClicked) {
      btnClicked = true;
      photographyProgressBar.style.cssText = `width: 100%; transition: width ${photographyTime}s ease-in-out;`;
      let timeInterval = setInterval(intervalTimeFunction, 1000);

      setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += photographyMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneySliderDisplay.innerHTML = totalMoney.toFixed(1);
        totalMoneyShopDisplay.innerHTML = totalMoney.toFixed(1);
        photographyProgressBar.style.cssText = `width: 0%;`;
        setTimeout((btnClicked = false), photographyTime * 1000);
        clearInterval(timeInterval);
        photographyTime = 1200;
        photographyTimeDisplay.innerHTML = `${timeFunction()[0]}:${
          timeFunction()[1]
        }`;
      }, photographyTime * 1000);
    }
  });

  photographyUpgradeBtn.addEventListener("click", () => {
    photographyUpgradeAttribute =
      photographyUpgradeBtn.getAttribute("upgradeCount");
    photographyUpgradePrice = +photographyUpgradePriceDisplay.innerHTML;
    totalMoney = +totalMoneyDisplay.innerHTML;
    defaultphotographyMoney = +photographyMoneyDisplay.innerHTML;
    photographyMoney = +photographyMoneyDisplay.innerHTML;
    if (totalMoney > photographyUpgradePrice) {
      photographyMoney += defaultphotographyMoney;
      totalMoney -= photographyUpgradePrice;
      photographyUpgradeCount++;
      photographyUpgradePrice += photographyUpgradePrice / 7;

      totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
      photographyMoneyDisplay.innerHTML = photographyMoney.toFixed(2);
      photographyUpgradePriceDisplay.innerHTML =
        photographyUpgradePrice.toFixed(2);
      photographyUpgradeCountDisplay.innerHTML = Math.round(
        photographyUpgradeCount
      );
      photographyUpgradeBarWidth += upgradeWitdh;
      photographyCountUpgradeBar.style.width = photographyUpgradeBarWidth + "%";
    }

    if (photographyUpgradeCount === firstTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      photographyMoney *= 3;
      photographyMoneyDisplay.innerHTML = photographyMoney.toFixed(2);

      photographyUpgradeBarWidth = 0;
      photographyCountUpgradeBar.style.width = photographyUpgradeBarWidth + "%";
      upgradeWitdh = 2.5;
      defaultphotographyMoney *= 2;
    }

    if (photographyUpgradeCount === secondTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      photographyMoney *= 4;
      photographyMoneyDisplay.innerHTML = photographyMoney.toFixed(2);

      photographyUpgradeBarWidth = 0;
      photographyCountUpgradeBar.style.width = photographyUpgradeBarWidth + "%";
      upgradeWitdh = 2;
      defaultphotographyMoney *= 2;
    }

    if (photographyUpgradeCount === thirdTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      photographyMoney *= 5;
      photographyMoneyDisplay.innerHTML = photographyMoney.toFixed(2);

      photographyUpgradeBarWidth = 0;
      photographyCountUpgradeBar.style.width = photographyUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      defaultphotographyMoney *= 2;
    }
    if (photographyUpgradeCount === forthTimeStampUpgrade) {
      totalMoney = +totalMoneyDisplay.innerHTML;
      photographyMoney *= 10;
      photographyMoneyDisplay.innerHTML = photographyMoney.toFixed(2);
      photographyCountUpgradeBar.style.width = 100 + "%";
      defaultphotographyMoney *= 2;
    }
  });
};

export default photographyFunction;
