// display
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
    seconds = time % 60;

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

const itemEffect = (item) => {
  if (item.getAttribute("name") === "surveys") {
    surveyMoney *= 3;
    surveyMoneyDisplay.innerHTML = surveyMoney.toFixed(1);
  } else if (item.getAttribute("name") === "new-ipad") {
    tutoringMoney *= 3;
    tutoringMoneyDisplay.innerHTML = tutoringMoney.toFixed(0);
  } else if (item.getAttribute("name") === "premium-food") {
    dogWalkingMoney *= 3;
    dogWalkingMoneyDisplay.innerHTML = dogWalkingMoney.toFixed(0);
  } else if (item.getAttribute("name") === "electric-mower") {
    lawnMowerTime /= 3;
    lawnMowerTimeDisplay.setAttribute("time", lawnMowerTime);

    lawnMowerTimeDisplay.innerHTML = timeDisplay(lawnMowerTime);
  } else if (item.getAttribute("name") === "top-tier-stroller") {
    babysittingTime /= 3;
    babysittingTimeDisplay.setAttribute("time", babysittingTime);

    babysittingTimeDisplay.innerHTML = timeDisplay(babysittingTime);
  } else if (item.getAttribute("name") === "camera") {
    photographyTime /= 3;
    photographyTimeDisplay.setAttribute("time", photographyTime);

    photographyTimeDisplay.innerHTML = timeDisplay(photographyTime);
  } else if (item.getAttribute("name") === "fitness-trainer-certification") {
    trainerTime /= 3;
    trainerTimeDisplay.setAttribute("time", trainerTime);

    trainerTimeDisplay.innerHTML = timeDisplay(trainerTime);
  } else if (item.getAttribute("name") === "monitor") {
    cryptoTime /= 3;
    cryptoTimeDisplay.setAttribute("time", cryptoTime);

    cryptoTimeDisplay.innerHTML = timeDisplay(cryptoTime);
  } else if (item.getAttribute("name") === "vitamin-bomb") {
    const vitaminMoneyArray = allMoneyValues.map(
      (moneyValue) => moneyValue * 3.33
    );
    surveyMoneyDisplay.innerHTML = vitaminMoneyArray[0].toFixed(1);
    tutoringMoneyDisplay.innerHTML = vitaminMoneyArray[1].toFixed(1);
    dogWalkingMoneyDisplay.innerHTML = vitaminMoneyArray[2].toFixed(1);
    lawnMowerMoneyDisplay.innerHTML = vitaminMoneyArray[3].toFixed(1);
    babysittingMoneyDisplay.innerHTML = vitaminMoneyArray[4].toFixed(1);
    photographyMoneyDisplay.innerHTML = vitaminMoneyArray[5].toFixed(1);
    trainerMoneyDisplay.innerHTML = vitaminMoneyArray[6].toFixed(1);
    cryptoMoneyDisplay.innerHTML = vitaminMoneyArray[7].toFixed(1);

    const vitaminTimeArray = allTimeValues.map((timeValue) => timeValue / 3.33);

    surveyTimeDisplay.setAttribute("time", vitaminTimeArray[0]);
    tutoringTimeDisplay.setAttribute("time", vitaminTimeArray[1]);
    dogWalkingTimeDisplay.setAttribute("time", vitaminTimeArray[2]);
    lawnMowerTimeDisplay.setAttribute("time", vitaminTimeArray[3]);
    babysittingTimeDisplay.setAttribute("time", vitaminTimeArray[4]);
    photographyTimeDisplay.setAttribute("time", vitaminTimeArray[5]);
    trainerTimeDisplay.setAttribute("time", vitaminTimeArray[6]);
    cryptoTimeDisplay.setAttribute("time", vitaminTimeArray[7]);

    surveyTimeDisplay.innerHTML = timeDisplay(vitaminTimeArray[0]);
    tutoringTimeDisplay.innerHTML = timeDisplay(vitaminTimeArray[1]);
    dogWalkingTimeDisplay.innerHTML = timeDisplay(vitaminTimeArray[2]);
    lawnMowerTimeDisplay.innerHTML = timeDisplay(vitaminTimeArray[3]);
    babysittingTimeDisplay.innerHTML = timeDisplay(vitaminTimeArray[4]);
    photographyTimeDisplay.innerHTML = timeDisplay(vitaminTimeArray[5]);
    trainerTimeDisplay.innerHTML = timeDisplay(vitaminTimeArray[6]);
    cryptoTimeDisplay.innerHTML = timeDisplay(vitaminTimeArray[7]);
  }
};

export default itemEffect;
