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

// profit increase

const currentProfitIncreaseDisplay = document.querySelector(
  ".profit-increase-value"
);

const itemEffect = (item) => {
  if (item.getAttribute("name") === "surveys") {
    surveysUpgradePrice = +surveyUpgradePriceDisplay.innerHTML;
    surveyMoney = +surveyMoneyDisplay.innerHTML;

    surveyMoney *= 3;
    surveyMoneyDisplay.innerHTML = surveyMoney.toFixed(1);
  }
  if (item.getAttribute("name") === "new-ipad") {
    tutoringUpgradePrice = +tutoringUpgradePriceDisplay.innerHTML;
    tutoringMoney = +tutoringMoneyDisplay.innerHTML;
    tutoringMoney *= 3;
    tutoringMoneyDisplay.innerHTML = tutoringMoney.toFixed(0);
  }
  if (item.getAttribute("name") === "premium-food") {
    dogWalkingUpgradePrice = +dogWalkingUpgradePriceDisplay.innerHTML;
    dogWalkingMoney = +dogWalkingMoneyDisplay.innerHTML;
    dogWalkingMoney *= 3;
    dogWalkingMoneyDisplay.innerHTML = dogWalkingMoney.toFixed(0);
  }
  if (item.getAttribute("name") === "electric-mower") {
    lawnMowerTime = +lawnMowerTimeDisplay.getAttribute("time");
    lawnMowerTime /= 3;
    lawnMowerTimeDisplay.setAttribute("time", lawnMowerTime);
    lawnMowerTimeDisplay.innerHTML = timeDisplay(lawnMowerTime);
  }
  if (item.getAttribute("name") === "top-tier-stroller") {
    babysittingTime = +babysittingTimeDisplay.getAttribute("time");
    babysittingTime /= 3;
    babysittingTimeDisplay.setAttribute("time", babysittingTime);
    babysittingTimeDisplay.innerHTML = timeDisplay(babysittingTime);
  }
  if (item.getAttribute("name") === "camera") {
    photographyTime = +photographyTimeDisplay.getAttribute("time");
    photographyTime /= 3;
    photographyTimeDisplay.setAttribute("time", photographyTime);
    photographyTimeDisplay.innerHTML = timeDisplay(photographyTime);
  }
  if (item.getAttribute("name") === "fitness-trainer-certification") {
    trainerTime = +trainerTimeDisplay.getAttribute("time");
    trainerTime /= 3;
    trainerTimeDisplay.setAttribute("time", trainerTime);
    trainerTimeDisplay.innerHTML = timeDisplay(trainerTime);
  }
  if (item.getAttribute("name") === "monitor") {
    cryptoTime = +cryptoTimeDisplay.getAttribute("time");
    cryptoTime /= 3;
    cryptoTimeDisplay.setAttribute("time", cryptoTime);
    cryptoTimeDisplay.innerHTML = timeDisplay(cryptoTime);
  }
  if (item.getAttribute("name") === "vitamin-bomb") {
    surveyMoney = +surveyMoneyDisplay.innerHTML;
    tutoringMoney = +tutoringMoneyDisplay.innerHTML;
    dogWalkingMoney = +dogWalkingMoneyDisplay.innerHTML;
    lawnMowerMoney = +lawnMowerMoneyDisplay.innerHTML;
    babysittingMoney = +babysittingMoneyDisplay.innerHTML;
    photographyMoney = +photographyMoneyDisplay.innerHTML;
    trainerMoney = +trainerMoneyDisplay.innerHTML;
    cryptoMoney = +cryptoMoneyDisplay.innerHTML;

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

    const vitaminMoneyArray = allMoneyValues.map(
      (moneyValue) => moneyValue * 3.33
    );
    surveyMoneyDisplay.innerHTML = vitaminMoneyArray[0].toFixed(2);
    tutoringMoneyDisplay.innerHTML = vitaminMoneyArray[1].toFixed(1);
    dogWalkingMoneyDisplay.innerHTML = vitaminMoneyArray[2].toFixed(1);
    lawnMowerMoneyDisplay.innerHTML = vitaminMoneyArray[3].toFixed(1);
    babysittingMoneyDisplay.innerHTML = vitaminMoneyArray[4].toFixed(1);
    photographyMoneyDisplay.innerHTML = vitaminMoneyArray[5].toFixed(1);
    trainerMoneyDisplay.innerHTML = vitaminMoneyArray[6].toFixed(1);
    cryptoMoneyDisplay.innerHTML = vitaminMoneyArray[7].toFixed(1);

    surveysTime = +surveyTimeDisplay.getAttribute("time");
    tutoringTime = +tutoringTimeDisplay.getAttribute("time");
    dogWalkingTime = +dogWalkingTimeDisplay.getAttribute("time");
    lawnMowerTime = +lawnMowerTimeDisplay.getAttribute("time");
    babysittingTime = +babysittingTimeDisplay.getAttribute("time");
    photographyTime = +photographyTimeDisplay.getAttribute("time");
    trainerTime = +trainerTimeDisplay.getAttribute("time");
    cryptoTime = +cryptoTimeDisplay.getAttribute("time");

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

    const vitaminTimeArray = allTimeValues.map((timeValue) =>
      (timeValue / 3.33).toFixed(1)
    );

    surveyTimeDisplay.setAttribute("time", vitaminTimeArray[0]);
    tutoringTimeDisplay.setAttribute("time", vitaminTimeArray[1]);
    dogWalkingTimeDisplay.setAttribute("time", vitaminTimeArray[2]);
    lawnMowerTimeDisplay.setAttribute("time", vitaminTimeArray[3]);
    babysittingTimeDisplay.setAttribute("time", vitaminTimeArray[4]);
    photographyTimeDisplay.setAttribute("time", vitaminTimeArray[5]);
    trainerTimeDisplay.setAttribute("time", vitaminTimeArray[6]);
    cryptoTimeDisplay.setAttribute("time", vitaminTimeArray[7]);

    surveyTimeDisplay.innerHTML = timeDisplay(vitaminTimeArray[0]).split(
      "."
    )[0];
    tutoringTimeDisplay.innerHTML = timeDisplay(vitaminTimeArray[1]).split(
      "."
    )[0];
    dogWalkingTimeDisplay.innerHTML = timeDisplay(vitaminTimeArray[2]).split(
      "."
    )[0];
    lawnMowerTimeDisplay.innerHTML = timeDisplay(vitaminTimeArray[3]).split(
      "."
    )[0];
    babysittingTimeDisplay.innerHTML = timeDisplay(vitaminTimeArray[4]).split(
      "."
    )[0];
    photographyTimeDisplay.innerHTML = timeDisplay(vitaminTimeArray[5]).split(
      "."
    )[0];
    trainerTimeDisplay.innerHTML = timeDisplay(vitaminTimeArray[6]).split(
      "."
    )[0];
    cryptoTimeDisplay.innerHTML = timeDisplay(vitaminTimeArray[7]).split(
      "."
    )[0];
  }
  if (item.getAttribute("name") === "speed") {
    surveysTime = +surveyTimeDisplay.getAttribute("time");
    tutoringTime = +tutoringTimeDisplay.getAttribute("time");
    dogWalkingTime = +dogWalkingTimeDisplay.getAttribute("time");
    lawnMowerTime = +lawnMowerTimeDisplay.getAttribute("time");
    babysittingTime = +babysittingTimeDisplay.getAttribute("time");
    photographyTime = +photographyTimeDisplay.getAttribute("time");
    trainerTime = +trainerTimeDisplay.getAttribute("time");
    cryptoTime = +cryptoTimeDisplay.getAttribute("time");

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

    const speedTimeArray = allTimeValues.map((timeValue) =>
      (timeValue / 5).toFixed(1)
    );

    surveyTimeDisplay.setAttribute("time", speedTimeArray[0]);
    tutoringTimeDisplay.setAttribute("time", speedTimeArray[1]);
    dogWalkingTimeDisplay.setAttribute("time", speedTimeArray[2]);
    lawnMowerTimeDisplay.setAttribute("time", speedTimeArray[3]);
    babysittingTimeDisplay.setAttribute("time", speedTimeArray[4]);
    photographyTimeDisplay.setAttribute("time", speedTimeArray[5]);
    trainerTimeDisplay.setAttribute("time", speedTimeArray[6]);
    cryptoTimeDisplay.setAttribute("time", speedTimeArray[7]);

    surveyTimeDisplay.innerHTML = timeDisplay(speedTimeArray[0]).split(".")[0];
    tutoringTimeDisplay.innerHTML = timeDisplay(speedTimeArray[1]).split(
      "."
    )[0];
    dogWalkingTimeDisplay.innerHTML = timeDisplay(speedTimeArray[2]).split(
      "."
    )[0];
    lawnMowerTimeDisplay.innerHTML = timeDisplay(speedTimeArray[3]).split(
      "."
    )[0];
    babysittingTimeDisplay.innerHTML = timeDisplay(speedTimeArray[4]).split(
      "."
    )[0];
    photographyTimeDisplay.innerHTML = timeDisplay(speedTimeArray[5]).split(
      "."
    )[0];
    trainerTimeDisplay.innerHTML = timeDisplay(speedTimeArray[6]).split(".")[0];
    cryptoTimeDisplay.innerHTML = timeDisplay(speedTimeArray[7]).split(".")[0];
  }
  if (item.getAttribute("name") === "maneki") {
    goldTradeValue = 2;
    defaultGoldValue = 2;
    goldValueTradeDisplay.innerHTML = goldTradeValue;
    goldValueTradeDisplay.setAttribute("goldDefaultValue", defaultGoldValue);
  }
  if (item.getAttribute("name") === "crypto-financial-adviser") {
    surveyMoney = +surveyMoneyDisplay.innerHTML;
    tutoringMoney = +tutoringMoneyDisplay.innerHTML;
    dogWalkingMoney = +dogWalkingMoneyDisplay.innerHTML;
    lawnMowerMoney = +lawnMowerMoneyDisplay.innerHTML;
    babysittingMoney = +babysittingMoneyDisplay.innerHTML;
    photographyMoney = +photographyMoneyDisplay.innerHTML;
    trainerMoney = +trainerMoneyDisplay.innerHTML;
    cryptoMoney = +cryptoMoneyDisplay.innerHTML;

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

    const financeAdviserMoneyArray = allMoneyValues.map(
      (moneyValue) => moneyValue * 5
    );
    surveyMoneyDisplay.innerHTML = financeAdviserMoneyArray[0].toFixed(1);
    tutoringMoneyDisplay.innerHTML = financeAdviserMoneyArray[1].toFixed(0);
    dogWalkingMoneyDisplay.innerHTML = financeAdviserMoneyArray[2].toFixed(0);
    lawnMowerMoneyDisplay.innerHTML = financeAdviserMoneyArray[3].toFixed(0);
    babysittingMoneyDisplay.innerHTML = financeAdviserMoneyArray[4].toFixed(0);
    photographyMoneyDisplay.innerHTML = financeAdviserMoneyArray[5].toFixed(0);
    trainerMoneyDisplay.innerHTML = financeAdviserMoneyArray[6].toFixed(0);
    cryptoMoneyDisplay.innerHTML = financeAdviserMoneyArray[7].toFixed(0);
  }
  if (item.getAttribute("name") === "piggy-bank") {
    const piggyBankPriceArray = allPriceValues.map((price) =>
      (price / 7.77).toFixed(1)
    );

    surveyUpgradePriceDisplay.innerHTML = piggyBankPriceArray[0];
    tutoringUpgradePriceDisplay.innerHTML = piggyBankPriceArray[1];
    dogWalkingUpgradePriceDisplay.innerHTML = piggyBankPriceArray[2];
    lawnMowerUpgradePriceDisplay.innerHTML = piggyBankPriceArray[3];
    babysittingUpgradePriceDisplay.innerHTML = piggyBankPriceArray[4];
    photographyUpgradePriceDisplay.innerHTML = piggyBankPriceArray[5];
    trainerUpgradePriceDisplay.innerHTML = piggyBankPriceArray[6];
    cryptoUpgradePriceDisplay.innerHTML = piggyBankPriceArray[7];
  }
  if (item.getAttribute("name") === "leprechaun") {
    currentProfitIncreaseDisplay.setAttribute("profit", "3");

    currentProfitIncreaseDisplay.innerHTML =
      currentProfitIncreaseDisplay.getAttribute("profit");
  }
};

export default itemEffect;
