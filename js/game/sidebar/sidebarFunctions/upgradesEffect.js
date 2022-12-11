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

// helping values

let targetArray = [];

const upgradesEffects = (target) => {
  targetArray.push(target);
  let hasDuplicate = targetArray.some(
    (val, i) => targetArray.indexOf(val) !== i
  );
  console.log(hasDuplicate);
  if (
    target.classList.contains("survey-upgrader1") ||
    (target.classList.contains("survey-upgrader2") && hasDuplicate === false)
  ) {
    surveysTime = +surveyTimeDisplay.getAttribute("time");
    surveysTime /= 2;

    surveyTimeDisplay.setAttribute("time", surveysTime);
    surveyTimeDisplay.innerHTML = timeDisplay(surveysTime);
  }

  if (
    target.classList.contains("tutoring-upgrader1") ||
    (target.classList.contains("tutoring-upgrader2") && hasDuplicate === false)
  ) {
    tutoringTime = +tutoringTimeDisplay.getAttribute("time");
    tutoringTime /= 2;
    tutoringTimeDisplay.setAttribute("time", tutoringTime);
    tutoringTimeDisplay.innerHTML = timeDisplay(tutoringTime);
  }
  if (
    target.classList.contains("dogWalking-upgrader1") ||
    (target.classList.contains("dogWalking-upgrader2") &&
      hasDuplicate === false)
  ) {
    dogWalkingTime = +dogWalkingTimeDisplay.getAttribute("time");
    dogWalkingTime /= 2;
    dogWalkingTimeDisplay.setAttribute("time", dogWalkingTime);
    dogWalkingTimeDisplay.innerHTML = timeDisplay(dogWalkingTime);
  }
  if (
    target.classList.contains("lawnMower-upgrader1") ||
    (target.classList.contains("lawnMower-upgrader2") && hasDuplicate === false)
  ) {
    lawnMowerTime = +lawnMowerTimeDisplay.getAttribute("time");
    lawnMowerTime /= 2;
    lawnMowerTimeDisplay.setAttribute("time", lawnMowerTime);
    lawnMowerTimeDisplay.innerHTML = timeDisplay(lawnMowerTime);
  }
  if (
    target.classList.contains("babysitting-upgrader1") ||
    (target.classList.contains("babysitting-upgrader2") &&
      hasDuplicate === false)
  ) {
    babysittingTime = +babysittingTimeDisplay.getAttribute("time");
    babysittingTime /= 2;
    babysittingTimeDisplay.setAttribute("time", babysittingTime);
    babysittingTimeDisplay.innerHTML = timeDisplay(babysittingTime);
  }
  if (
    target.classList.contains("photography-upgrader1") ||
    (target.classList.contains("photography-upgrader2") &&
      hasDuplicate === false)
  ) {
    photographyTime = +photographyTimeDisplay.getAttribute("time");
    photographyTime /= 2;
    photographyTimeDisplay.setAttribute("time", photographyTime);
    photographyTimeDisplay.innerHTML = timeDisplay(photographyTime);
  }
  if (
    target.classList.contains("trainer-upgrader1") ||
    (target.classList.contains("trainer-upgrader2") && hasDuplicate === false)
  ) {
    trainerTime = +trainerTimeDisplay.getAttribute("time");
    trainerTime /= 2;
    trainerTimeDisplay.setAttribute("time", trainerTime);
    trainerTimeDisplay.innerHTML = timeDisplay(trainerTime);
  }
  if (
    target.classList.contains("crypto-upgrader1") ||
    (target.classList.contains("crypto-upgrader2") && hasDuplicate === false)
  ) {
    cryptoTime = +cryptoTimeDisplay.getAttribute("time");
    cryptoTime /= 2;
    cryptoTimeDisplay.setAttribute("time", cryptoTime);
    cryptoTimeDisplay.innerHTML = timeDisplay(cryptoTime);
  }
  if (target.classList.contains("speed-upgrader1")) {
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

    const timeArray = allTimeValues.map((timeValue) =>
      (timeValue / 3.33).toFixed(0)
    );

    surveyTimeDisplay.setAttribute("time", timeArray[0]);
    tutoringTimeDisplay.setAttribute("time", timeArray[1]);
    dogWalkingTimeDisplay.setAttribute("time", timeArray[2]);
    lawnMowerTimeDisplay.setAttribute("time", timeArray[3]);
    babysittingTimeDisplay.setAttribute("time", timeArray[4]);
    photographyTimeDisplay.setAttribute("time", timeArray[5]);
    trainerTimeDisplay.setAttribute("time", timeArray[6]);
    cryptoTimeDisplay.setAttribute("time", timeArray[7]);

    surveyTimeDisplay.innerHTML = timeDisplay(timeArray[0]);
    tutoringTimeDisplay.innerHTML = timeDisplay(timeArray[1]);
    dogWalkingTimeDisplay.innerHTML = timeDisplay(timeArray[2]);
    lawnMowerTimeDisplay.innerHTML = timeDisplay(timeArray[3]);
    babysittingTimeDisplay.innerHTML = timeDisplay(timeArray[4]);
    photographyTimeDisplay.innerHTML = timeDisplay(timeArray[5]);
    trainerTimeDisplay.innerHTML = timeDisplay(timeArray[6]);
    cryptoTimeDisplay.innerHTML = timeDisplay(timeArray[7]);
  }
  if (target.classList.contains("speed-upgrader2")) {
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

    const timeArray = allTimeValues.map((timeValue) =>
      (timeValue / 5.55).toFixed(0)
    );

    surveyTimeDisplay.setAttribute("time", timeArray[0]);
    tutoringTimeDisplay.setAttribute("time", timeArray[1]);
    dogWalkingTimeDisplay.setAttribute("time", timeArray[2]);
    lawnMowerTimeDisplay.setAttribute("time", timeArray[3]);
    babysittingTimeDisplay.setAttribute("time", timeArray[4]);
    photographyTimeDisplay.setAttribute("time", timeArray[5]);
    trainerTimeDisplay.setAttribute("time", timeArray[6]);
    cryptoTimeDisplay.setAttribute("time", timeArray[7]);

    surveyTimeDisplay.innerHTML = timeDisplay(timeArray[0]);
    tutoringTimeDisplay.innerHTML = timeDisplay(timeArray[1]);
    dogWalkingTimeDisplay.innerHTML = timeDisplay(timeArray[2]);
    lawnMowerTimeDisplay.innerHTML = timeDisplay(timeArray[3]);
    babysittingTimeDisplay.innerHTML = timeDisplay(timeArray[4]);
    photographyTimeDisplay.innerHTML = timeDisplay(timeArray[5]);
    trainerTimeDisplay.innerHTML = timeDisplay(timeArray[6]);
    cryptoTimeDisplay.innerHTML = timeDisplay(timeArray[7]);
  }
  if (target.classList.contains("profit-upgrader1")) {
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

    const moneyArray = allMoneyValues.map((moneyValue) => moneyValue * 3.33);

    surveyMoneyDisplay.innerHTML = moneyArray[0].toFixed(2);
    tutoringMoneyDisplay.innerHTML = moneyArray[1].toFixed(1);
    dogWalkingMoneyDisplay.innerHTML = moneyArray[2].toFixed(1);
    lawnMowerMoneyDisplay.innerHTML = moneyArray[3].toFixed(1);
    babysittingMoneyDisplay.innerHTML = moneyArray[4].toFixed(1);
    photographyMoneyDisplay.innerHTML = moneyArray[5].toFixed(1);
    trainerMoneyDisplay.innerHTML = moneyArray[6].toFixed(1);
    cryptoMoneyDisplay.innerHTML = moneyArray[7].toFixed(1);
  }
  if (target.classList.contains("profit-upgrader2")) {
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

    const moneyArray = allMoneyValues.map((moneyValue) => moneyValue * 5.55);

    surveyMoneyDisplay.innerHTML = moneyArray[0].toFixed(2);
    tutoringMoneyDisplay.innerHTML = moneyArray[1].toFixed(1);
    dogWalkingMoneyDisplay.innerHTML = moneyArray[2].toFixed(1);
    lawnMowerMoneyDisplay.innerHTML = moneyArray[3].toFixed(1);
    babysittingMoneyDisplay.innerHTML = moneyArray[4].toFixed(1);
    photographyMoneyDisplay.innerHTML = moneyArray[5].toFixed(1);
    trainerMoneyDisplay.innerHTML = moneyArray[6].toFixed(1);
    cryptoMoneyDisplay.innerHTML = moneyArray[7].toFixed(1);
  }
};

export default upgradesEffects;
