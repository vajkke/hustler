// display

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

// time values
let surveysTime = +surveyTimeDisplay.getAttribute("time");
let tutoringTime = +tutoringTimeDisplay.getAttribute("time");
let dogWalkingTime = +dogWalkingTimeDisplay.getAttribute("time");
let lawnMowerTime = +lawnMowerTimeDisplay.getAttribute("time");
let babysittingTime = +babysittingTimeDisplay.getAttribute("time");
let photographyTime = +photographyTimeDisplay.getAttribute("time");
let trainerTime = +trainerTimeDisplay.getAttribute("time");
let cryptoTime = +cryptoTimeDisplay.getAttribute("time");

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

const disableUpgradeEffect = () => {
  // MONEY //

  // money display
  surveyMoneyDisplay.innerHTML = 0.1;
  tutoringMoneyDisplay.innerHTML = 5;
  dogWalkingMoneyDisplay.innerHTML = 350;
  lawnMowerMoneyDisplay.innerHTML = 1000;
  babysittingMoneyDisplay.innerHTML = 5000;
  photographyMoneyDisplay.innerHTML = 10000;
  trainerMoneyDisplay.innerHTML = 25000;
  cryptoMoneyDisplay.innerHTML = 50000;

  // money value
  surveyMoney = +surveyMoneyDisplay.innerHTML;
  tutoringMoney = +tutoringMoneyDisplay.innerHTML;
  dogWalkingMoney = +dogWalkingMoneyDisplay.innerHTML;
  lawnMowerMoney = +lawnMowerMoneyDisplay.innerHTML;
  babysittingMoney = +babysittingMoneyDisplay.innerHTML;
  photographyMoney = +photographyMoneyDisplay.innerHTML;
  trainerMoney = +trainerMoneyDisplay.innerHTML;
  cryptoMoney = +cryptoMoneyDisplay.innerHTML;
  //
  //
  //
  // TIME //

  //time attribute
  surveyTimeDisplay.setAttribute("time", 4);
  tutoringTimeDisplay.setAttribute("time", 12);
  dogWalkingTimeDisplay.setAttribute("time", 36);
  lawnMowerTimeDisplay.setAttribute("time", 120);
  babysittingTimeDisplay.setAttribute("time", 360);
  photographyTimeDisplay.setAttribute("time", 1200);
  trainerTimeDisplay.setAttribute("time", 3600);
  cryptoTimeDisplay.setAttribute("time", 10800);

  // time value
  surveysTime = +surveyTimeDisplay.getAttribute("time");
  tutoringTime = +tutoringTimeDisplay.getAttribute("time");
  dogWalkingTime = +dogWalkingTimeDisplay.getAttribute("time");
  lawnMowerTime = +lawnMowerTimeDisplay.getAttribute("time");
  babysittingTime = +babysittingTimeDisplay.getAttribute("time");
  photographyTime = +photographyTimeDisplay.getAttribute("time");
  trainerTime = +trainerTimeDisplay.getAttribute("time");
  cryptoTime = +cryptoTimeDisplay.getAttribute("time");

  //time display
  surveyTimeDisplay.innerHTML = timeDisplay(surveysTime);
  tutoringTimeDisplay.innerHTML = timeDisplay(tutoringTime);
  dogWalkingTimeDisplay.innerHTML = timeDisplay(dogWalkingTime);
  lawnMowerTimeDisplay.innerHTML = timeDisplay(lawnMowerTime);
  babysittingTimeDisplay.innerHTML = timeDisplay(babysittingTime);
  photographyTimeDisplay.innerHTML = timeDisplay(photographyTime);
  trainerTimeDisplay.innerHTML = timeDisplay(trainerTime);
  cryptoTimeDisplay.innerHTML = timeDisplay(cryptoTime);
};

export default disableUpgradeEffect;
