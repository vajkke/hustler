const photographyProgressBar = document.querySelector(
  ".photography-progress--bar"
);

//btns
const photographyBtn = document.querySelector(".photographyBtn");
const photographyUpgradeBtn = document.querySelector(
  ".photography-cost-container"
);

//display
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
let photographyUpgradePrice = 1500;
let photographyUpgradeCount = 0;

let firstTimeStampUpgrade = 10;
let secondTimeStampUpgrade = 100;
let thirdTimeStampUpgrade = 200;
let forthTimeStampUpgrade = 300;

let upgradeWitdh = 10;

// money
let totalMoney = +totalMoneyDisplay.innerHTML;
let defaultphotographyMoney = 1000;
let photographyMoney = 1000;

//time
let photographyTime = 1200;
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
  minutes = Math.floor(photographyTime / 60);
  seconds = photographyTime % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return [minutes, seconds];
};

const photographyFunction = () => {
  intervalTimeFunction();

  totalMoney = +totalMoneyDisplay.innerHTML;
  photographyTimeDisplay.innerHTML = `${minutes}:${seconds}`;

  photographyBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (!btnClicked) {
      btnClicked = true;
      photographyProgressBar.style.cssText = `width: 100%; transition: width ${photographyTime}s ease-in-out;`;
      let timeInterval = setInterval(intervalTimeFunction, 1000);

      setTimeout(() => {
        totalMoney = +totalMoneyDisplay.innerHTML;
        totalMoney += photographyMoney;
        totalMoneyDisplay.innerHTML = totalMoney.toFixed(2);
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
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (totalMoney > photographyUpgradePrice) {
      photographyMoney += defaultphotographyMoney;
      totalMoney -= photographyUpgradePrice;
      photographyUpgradeCount++;
      photographyUpgradePrice += photographyUpgradePrice / 4;

      totalMoneyDisplay.innerHTML = totalMoney.toFixed(2);
      photographyMoneyDisplay.innerHTML = photographyMoney.toFixed(2);
      photographyUpgradePriceDisplay.innerHTML =
        photographyUpgradePrice.toFixed(2);
      photographyUpgradeCountDisplay.innerHTML = photographyUpgradeCount;
      photographyUpgradeBarWidth += upgradeWitdh;
      photographyCountUpgradeBar.style.width = photographyUpgradeBarWidth + "%";
    }

    if (photographyUpgradeCount === firstTimeStampUpgrade) {
      photographyUpgradeCount++;
      photographyMoney *= 2;
      photographyUpgradeBarWidth = 0;
      photographyCountUpgradeBar.style.width = photographyUpgradeBarWidth + "%";
      upgradeWitdh = 1;
      defaultphotographyMoney *= 2;
    }

    if (photographyUpgradeCount === secondTimeStampUpgrade) {
      photographyUpgradeCount++;
      photographyMoney *= 2;
      photographyUpgradeBarWidth = 0;
      photographyCountUpgradeBar.style.width = photographyUpgradeBarWidth + "%";
      defaultphotographyMoney *= 2;
    }

    if (photographyUpgradeCount === thirdTimeStampUpgrade) {
      photographyUpgradeCount++;
      photographyMoney *= 2;
      photographyUpgradeBarWidth = 0;
      photographyCountUpgradeBar.style.width = photographyUpgradeBarWidth + "%";
      defaultphotographyMoney *= 2;
    }
    if (photographyUpgradeCount === forthTimeStampUpgrade) {
      photographyUpgradeCount++;
      photographyMoney *= 2;
      photographyUpgradeBarWidth = 0;
      photographyCountUpgradeBar.style.width = photographyUpgradeBarWidth + "%";
      defaultphotographyMoney *= 2;
    }
  });
};

export default photographyFunction;
