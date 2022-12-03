// display

// gold display
const goldValueTradeDisplay = document.querySelector(".result-gold-value");

// price display
const surveyUpgradePriceDisplay = document.querySelector(
  ".survey-upgrade--price"
);
const tutoringUpgradePriceDisplay = document.querySelector(
  ".tutoring-upgrade--price"
);
const dogWalkingUpgradePriceDisplay = document.querySelector(
  ".dogWalking-upgrade--price"
);
const lawnMowerUpgradePriceDisplay = document.querySelector(
  ".lawnMower-upgrade--price"
);
const babysittingUpgradePriceDisplay = document.querySelector(
  ".babysitting-upgrade--price"
);
const photographyUpgradePriceDisplay = document.querySelector(
  ".photography-upgrade--price"
);
const trainerUpgradePriceDisplay = document.querySelector(
  ".trainer-upgrade--price"
);
const cryptoUpgradePriceDisplay = document.querySelector(
  ".crypto-upgrade--price"
);

// profit display
const surveyMoneyDisplay = document.querySelector(".survey-profit");
const tutoringMoneyDisplay = document.querySelector(".tutoring-profit");
const dogWalkingMoneyDisplay = document.querySelector(".dogWalking-profit");
const lawnMowerMoneyDisplay = document.querySelector(".lawnMower-profit");
const babysittingMoneyDisplay = document.querySelector(".babysitting-profit");
const photographyMoneyDisplay = document.querySelector(".photography-profit");
const trainerMoneyDisplay = document.querySelector(".trainer-profit");
const cryptoMoneyDisplay = document.querySelector(".crypto-profit");

// time display
const surveyTimeDisplay = document.querySelector(".surveys-time");
const tutoringTimeDisplay = document.querySelector(".tutoring-time");
const dogWalkingTimeDisplay = document.querySelector(".dogWalking-time");
const lawnMowerTimeDisplay = document.querySelector(".lawnMower-time");
const babysittingTimeDisplay = document.querySelector(".babysitting-time");
const photographyTimeDisplay = document.querySelector(".photography-time");
const trainerTimeDisplay = document.querySelector(".trainer-time");
const cryptoTimeDisplay = document.querySelector(".crypto-time");

// values
// money values
let surveyMoney = +surveyMoneyDisplay.innerHTML;
let tutoringMoney = +tutoringMoneyDisplay.innerHTML;
let dogWalkingMoney = +dogWalkingMoneyDisplay.innerHTML;
let lawnMowerMoney = +lawnMowerMoneyDisplay.innerHTML;
let babysittingMoney = +babysittingMoneyDisplay.innerHTML;
let photographyMoney = +photographyMoneyDisplay.innerHTML;
let trainerMoney = +trainerMoneyDisplay.innerHTML;
let cryptoMoney = +cryptoMoneyDisplay.innerHTML;

const allMoneyValues = [
  surveyMoney,
  tutoringMoney,
  dogWalkingMoney,
  lawnMowerMoney,
  babysittingMoney,
  photographyMoney,
  trainerMoney,
  cryptoMoney,
];

// time values
let surveysTime = +surveyTimeDisplay.getAttribute("time");
let tutoringTime = +tutoringTimeDisplay.getAttribute("time");
let dogWalkingTime = +dogWalkingTimeDisplay.getAttribute("time");
let lawnMowerTime = +lawnMowerTimeDisplay.getAttribute("time");
let babysittingTime = +babysittingTimeDisplay.getAttribute("time");
let photographyTime = +photographyTimeDisplay.getAttribute("time");
let trainerTime = +trainerTimeDisplay.getAttribute("time");
let cryptoTime = +cryptoTimeDisplay.getAttribute("time");

const allTimeValues = [
  surveysTime,
  tutoringTime,
  dogWalkingTime,
  lawnMowerTime,
  babysittingTime,
  photographyTime,
  trainerTime,
  cryptoTime,
];

// gold values
let goldTradeValue = +goldValueTradeDisplay.innerHTML;
let defaultGoldValue = +goldValueTradeDisplay.getAttribute("goldDefaultValue");

// price values

let surveysUpgradePrice = +surveyUpgradePriceDisplay.innerHTML;
let tutoringUpgradePrice = +tutoringUpgradePriceDisplay.innerHTML;
let dogWalkingUpgradePrice = +dogWalkingUpgradePriceDisplay.innerHTML;
let lawnMowerUpgradePrice = +lawnMowerUpgradePriceDisplay.innerHTML;
let babysittingUpgradePrice = +babysittingUpgradePriceDisplay.innerHTML;
let photographyUpgradePrice = +photographyUpgradePriceDisplay.innerHTML;
let trainerUpgradePrice = +trainerUpgradePriceDisplay.innerHTML;
let cryptoUpgradePrice = +cryptoUpgradePriceDisplay.innerHTML;

const allPriceValues = [
  surveysUpgradePrice,
  tutoringUpgradePrice,
  dogWalkingUpgradePrice,
  lawnMowerUpgradePrice,
  babysittingUpgradePrice,
  photographyUpgradePrice,
  trainerUpgradePrice,
  cryptoUpgradePrice,
];

// TIME FUNCTION
let hours;
let minutes;
let seconds;
const timeDisplay = (time) => {
  if (time >= 3600) {
    hours = Math.floor(time / 3600);
    minutes = Math.floor(time / 60) - hours * 60;
    seconds = (time % 60).toFixed(0);

    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${hours}:${minutes}:${seconds}`;
  } else {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${minutes}:${seconds}`;
  }
};

const disableItemsEffect = (item) => {
  if (item.getAttribute("name") === "surveys") {
    surveyMoneyDisplay.innerHTML = surveyMoney.toFixed(1);
  } else if (item.getAttribute("name") === "new-ipad") {
    tutoringMoneyDisplay.innerHTML = tutoringMoney.toFixed(0);
  } else if (item.getAttribute("name") === "premium-food") {
    dogWalkingMoneyDisplay.innerHTML = dogWalkingMoney.toFixed(0);
  } else if (item.getAttribute("name") === "electric-mower") {
    lawnMowerTimeDisplay.setAttribute("time", lawnMowerTime);
    lawnMowerTimeDisplay.innerHTML = timeDisplay(lawnMowerTime);
  } else if (item.getAttribute("name") === "top-tier-stroller") {
    babysittingTimeDisplay.setAttribute("time", babysittingTime);
    babysittingTimeDisplay.innerHTML = timeDisplay(babysittingTime);
  } else if (item.getAttribute("name") === "camera") {
    photographyTimeDisplay.setAttribute("time", photographyTime);
    photographyTimeDisplay.innerHTML = timeDisplay(photographyTime);
  } else if (item.getAttribute("name") === "fitness-trainer-certification") {
    trainerTimeDisplay.setAttribute("time", trainerTime);
    trainerTimeDisplay.innerHTML = timeDisplay(trainerTime);
  } else if (item.getAttribute("name") === "monitor") {
    cryptoTimeDisplay.setAttribute("time", cryptoTime);
    cryptoTimeDisplay.innerHTML = timeDisplay(cryptoTime);
  } else if (item.getAttribute("name") === "vitamin-bomb") {
    surveyMoneyDisplay.innerHTML = allMoneyValues[0].toFixed(2);
    tutoringMoneyDisplay.innerHTML = allMoneyValues[1].toFixed(1);
    dogWalkingMoneyDisplay.innerHTML = allMoneyValues[2].toFixed(1);
    lawnMowerMoneyDisplay.innerHTML = allMoneyValues[3].toFixed(1);
    babysittingMoneyDisplay.innerHTML = allMoneyValues[4].toFixed(1);
    photographyMoneyDisplay.innerHTML = allMoneyValues[5].toFixed(1);
    trainerMoneyDisplay.innerHTML = allMoneyValues[6].toFixed(1);
    cryptoMoneyDisplay.innerHTML = allMoneyValues[7].toFixed(1);

    surveyTimeDisplay.setAttribute("time", allTimeValues[0]);
    tutoringTimeDisplay.setAttribute("time", allTimeValues[1]);
    dogWalkingTimeDisplay.setAttribute("time", allTimeValues[2]);
    lawnMowerTimeDisplay.setAttribute("time", allTimeValues[3]);
    babysittingTimeDisplay.setAttribute("time", allTimeValues[4]);
    photographyTimeDisplay.setAttribute("time", allTimeValues[5]);
    trainerTimeDisplay.setAttribute("time", allTimeValues[6]);
    cryptoTimeDisplay.setAttribute("time", allTimeValues[7]);

    surveyTimeDisplay.innerHTML = timeDisplay(allTimeValues[0]);
    tutoringTimeDisplay.innerHTML = timeDisplay(allTimeValues[1]);
    dogWalkingTimeDisplay.innerHTML = timeDisplay(allTimeValues[2]);
    lawnMowerTimeDisplay.innerHTML = timeDisplay(allTimeValues[3]);
    babysittingTimeDisplay.innerHTML = timeDisplay(allTimeValues[4]);
    photographyTimeDisplay.innerHTML = timeDisplay(allTimeValues[5]);
    trainerTimeDisplay.innerHTML = timeDisplay(allTimeValues[6]);
    cryptoTimeDisplay.innerHTML = timeDisplay(allTimeValues[7]);
  } else if (item.getAttribute("name") === "speed") {
    surveyTimeDisplay.setAttribute("time", allTimeValues[0]);
    tutoringTimeDisplay.setAttribute("time", allTimeValues[1]);
    dogWalkingTimeDisplay.setAttribute("time", allTimeValues[2]);
    lawnMowerTimeDisplay.setAttribute("time", allTimeValues[3]);
    babysittingTimeDisplay.setAttribute("time", allTimeValues[4]);
    photographyTimeDisplay.setAttribute("time", allTimeValues[5]);
    trainerTimeDisplay.setAttribute("time", allTimeValues[6]);
    cryptoTimeDisplay.setAttribute("time", allTimeValues[7]);

    surveyTimeDisplay.innerHTML = timeDisplay(allTimeValues[0]);
    tutoringTimeDisplay.innerHTML = timeDisplay(allTimeValues[1]);
    dogWalkingTimeDisplay.innerHTML = timeDisplay(allTimeValues[2]);
    lawnMowerTimeDisplay.innerHTML = timeDisplay(allTimeValues[3]);
    babysittingTimeDisplay.innerHTML = timeDisplay(allTimeValues[4]);
    photographyTimeDisplay.innerHTML = timeDisplay(allTimeValues[5]);
    trainerTimeDisplay.innerHTML = timeDisplay(allTimeValues[6]);
    cryptoTimeDisplay.innerHTML = timeDisplay(allTimeValues[7]);
  } else if (item.getAttribute("name") === "maneki") {
    goldTradeValue = 1;
    defaultGoldValue = 1;
    goldValueTradeDisplay.innerHTML = goldTradeValue;
    goldValueTradeDisplay.setAttribute("goldDefaultValue", defaultGoldValue);
  } else if (item.getAttribute("name") === "crypto-financial-adviser") {
    surveyMoneyDisplay.innerHTML = allMoneyValues[0].toFixed(1);
    tutoringMoneyDisplay.innerHTML = allMoneyValues[1].toFixed(0);
    dogWalkingMoneyDisplay.innerHTML = allMoneyValues[2].toFixed(0);
    lawnMowerMoneyDisplay.innerHTML = allMoneyValues[3].toFixed(0);
    babysittingMoneyDisplay.innerHTML = allMoneyValues[4].toFixed(0);
    photographyMoneyDisplay.innerHTML = allMoneyValues[5].toFixed(0);
    trainerMoneyDisplay.innerHTML = allMoneyValues[6].toFixed(0);
    cryptoMoneyDisplay.innerHTML = allMoneyValues[7].toFixed(0);
  } else if (item.getAttribute("name") === "piggy-bank") {
    surveyUpgradePriceDisplay.innerHTML = allPriceValues[0];
    tutoringUpgradePriceDisplay.innerHTML = allPriceValues[1];
    dogWalkingUpgradePriceDisplay.innerHTML = allPriceValues[2];
    lawnMowerUpgradePriceDisplay.innerHTML = allPriceValues[3];
    babysittingUpgradePriceDisplay.innerHTML = allPriceValues[4];
    photographyUpgradePriceDisplay.innerHTML = allPriceValues[5];
    trainerUpgradePriceDisplay.innerHTML = allPriceValues[6];
    cryptoUpgradePriceDisplay.innerHTML = allPriceValues[7];
  }
};

export default disableItemsEffect;
