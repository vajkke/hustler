// Btns
const surveysBtn = document.querySelector(".surveysBtn");
const tutoringBtn = document.querySelector(".tutoringBtn");
const dogWalkingBtn = document.querySelector(".dogWalkingBtn");
const lawnMowerBtn = document.querySelector(".lawnMowerBtn");
const babysittingBtn = document.querySelector(".babysittingBtn");
const photographyBtn = document.querySelector(".photographyBtn");
const trainerBtn = document.querySelector(".trainerBtn");
const cryptoBtn = document.querySelector(".cryptoBtn");

// TIME

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

// TIME FUNCTION

const managerEffects = (target) => {
  if (target.classList.contains("survey-manager-container")) {
    surveysTime = +surveyTimeDisplay.getAttribute("time");
    setInterval(() => {
      surveysBtn.click();
    }, surveysTime * 10);
  }
  if (target.classList.contains("tutoring-manager-container")) {
    tutoringTime = +tutoringTimeDisplay.getAttribute("time");
    setInterval(() => {
      tutoringBtn.click();
    }, tutoringTime * 10);
  }
  if (target.classList.contains("dogWalking-manager-container")) {
    dogWalkingTime = +dogWalkingTimeDisplay.getAttribute("time");
    setInterval(() => {
      dogWalkingBtn.click();
    }, dogWalkingTime * 10);
  }
  if (target.classList.contains("lawnMower-manager-container")) {
    lawnMowerTime = +lawnMowerTimeDisplay.getAttribute("time");

    lawnMowerBtn.click();
    setInterval(() => {
      lawnMowerBtn.click();
    }, lawnMowerTime * 100);
  }
};

export default managerEffects;
