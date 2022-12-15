// time
const surveyTimeDisplay = document.querySelector(".surveys-time");
const tutoringTimeDisplay = document.querySelector(".tutoring-time");
const dogWalkingTimeDisplay = document.querySelector(".dogWalking-time");
const lawnMowerTimeDisplay = document.querySelector(".lawnMower-time");
const babysittingTimeDisplay = document.querySelector(".babysitting-time");
const photographyTimeDisplay = document.querySelector(".photography-time");
const trainerTimeDisplay = document.querySelector(".trainer-time");
const cryptoTimeDisplay = document.querySelector(".crypto-time");

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

// Btns
const surveysBtn = document.querySelector(".surveysBtn");
const tutoringBtn = document.querySelector(".tutoringBtn");
const dogWalkingBtn = document.querySelector(".dogWalkingBtn");
const lawnMowerBtn = document.querySelector(".lawnMowerBtn");
const babysittingBtn = document.querySelector(".babysittingBtn");
const photographyBtn = document.querySelector(".photographyBtn");
const trainerBtn = document.querySelector(".trainerBtn");
const cryptoBtn = document.querySelector(".cryptoBtn");

// BUTTON FUNCTIONS

const surveyButtonFunction = () => {
  surveysBtn.click();
};

const tutoringButtonFunction = () => {
  tutoringBtn.click();
};

const dogWalkingButtonFunction = () => {
  dogWalkingBtn.click();
};

const lawnMowerButtonFunction = () => {
  lawnMowerBtn.click();
};

const babysittingButtonFunction = () => {
  babysittingBtn.click();
};

const photographyButtonFunction = () => {
  photographyBtn.click();
};

const trainerButtonFunction = () => {
  trainerBtn.click();
};

const cryptoButtonFunction = () => {
  cryptoBtn.click();
};

let surveyInterval;
let tutoringInterval;
let dogWalkingInterval;
let lawnMowerInterval;
let babysittingInterval;
let photographyInterval;
let trainerInterval;
let cryptoInterval;

const managerEffects = (target) => {
  if (target) {
    if (target.classList.contains("survey-manager-container")) {
      surveyInterval = setInterval(surveyButtonFunction, 100);
    }

    if (target.classList.contains("tutoring-manager-container")) {
      tutoringInterval = setInterval(tutoringButtonFunction, 100);
    }

    if (target.classList.contains("dogWalking-manager-container")) {
      dogWalkingInterval = setInterval(dogWalkingButtonFunction, 100);
    }

    if (target.classList.contains("lawnMower-manager-container")) {
      lawnMowerInterval = setInterval(lawnMowerButtonFunction, 100);
    }
    if (target.classList.contains("babysitting-manager-container")) {
      babysittingInterval = setInterval(babysittingButtonFunction, 100);
    }
    if (target.classList.contains("photography-manager-container")) {
      photographyInterval = setInterval(photographyButtonFunction, 100);
    }
    if (target.classList.contains("trainer-manager-container")) {
      trainerInterval = setInterval(trainerButtonFunction, 100);
    }
    if (target.classList.contains("crypto-manager-container")) {
      cryptoInterval = setInterval(cryptoButtonFunction, 100);
    }
  } else if (!target) {
    clearInterval(surveyInterval);
    clearInterval(tutoringInterval);
    clearInterval(dogWalkingInterval);
    clearInterval(lawnMowerInterval);
    clearInterval(babysittingInterval);
    clearInterval(photographyInterval);
    clearInterval(trainerInterval);
    clearInterval(cryptoInterval);

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
  }
};

export default managerEffects;
