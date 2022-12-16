// effects
import disableUpgradeEffect from "./disableUpgradesEffect.js";
import disableManagerEffect from "./disableManagerEffect.js";
import restartJobs from "./restartJobs.js";
import itemEffect from "../sidebar/sidebarFunctions/itemEffect.js";

import { timeIntervalSurveys, timeOutSurvey } from "../jobs/surveys.js";
import { timeIntervalTutoring, timeOutTutoring } from "../jobs/tutoring.js";
import {
  timeIntervalDogWalking,
  timeOutDogWalking,
} from "../jobs/dogWalking.js";

import { timeIntervalLawnMower, timeOutLawnMower } from "../jobs/lawnMower.js";
import {
  timeIntervalBabysitting,
  timeOutBabysitting,
} from "../jobs/babysitting.js";

import {
  timeIntervalPhotography,
  timeOutPhotography,
} from "../jobs/photography.js";

import { timeIntervalTrainer, timeOutTrainer } from "../jobs/trainer.js";

import { timeIntervalCrypto, timeOutCrypto } from "../jobs/crypto.js";

import managerEffects from "../sidebar/sidebarFunctions/managerEffects.js";

// buttons
const surveysBtn = document.querySelector(".surveysBtn");
const tutoringBtn = document.querySelector(".tutoringBtn");
const dogWalkingBtn = document.querySelector(".dogWalkingBtn");
const lawnMowerBtn = document.querySelector(".lawnMowerBtn");
const babysittingBtn = document.querySelector(".babysittingBtn");
const photographyBtn = document.querySelector(".photographyBtn");
const trainerBtn = document.querySelector(".trainerBtn");
const cryptoBtn = document.querySelector(".cryptoBtn");

// display
const upgraderContainers = document.querySelectorAll(".upgrader-container");
const managerContainers = document.querySelectorAll(".manager-container");
const totalMoneyDisplay = document.querySelector(".total-money--amount");
const totalMoneySliderDisplay = document.querySelector(".total-money--slider");

// items
const usedItemsContainers = document.querySelectorAll(".item-used--container");

const gameReset = () => {
  upgraderContainers.forEach((upgrader) => upgrader.classList.remove("hidden"));
  managerContainers.forEach((manager) => manager.classList.remove("hidden"));
  totalMoneyDisplay.innerHTML = 0;
  totalMoneySliderDisplay.innerHTML = 0;

  disableUpgradeEffect();
  restartJobs();
  disableManagerEffect();

  // clearing intervals and timeouts
  clearTimeout(timeOutTutoring);
  clearInterval(timeIntervalTutoring);

  clearInterval(timeIntervalSurveys);
  clearTimeout(timeOutSurvey);

  clearInterval(timeIntervalDogWalking);
  clearTimeout(timeOutDogWalking);

  clearInterval(timeIntervalLawnMower);
  clearTimeout(timeOutLawnMower);

  clearInterval(timeIntervalBabysitting);
  clearTimeout(timeOutBabysitting);

  clearInterval(timeIntervalPhotography);
  clearTimeout(timeOutPhotography);

  clearInterval(timeIntervalTrainer);
  clearTimeout(timeOutTrainer);

  clearInterval(timeIntervalCrypto);
  clearTimeout(timeOutCrypto);

  // reseting time display & buttons
  managerEffects(null);
  surveysBtn.setAttribute("surveyBtnClicked", "no");
  tutoringBtn.setAttribute("tutoringBtnClicked", "no");
  dogWalkingBtn.setAttribute("dogWalkingBtnClicked", "no");
  lawnMowerBtn.setAttribute("lawnMowerBtnClicked", "no");
  babysittingBtn.setAttribute("babysittingBtnClicked", "no");
  photographyBtn.setAttribute("photographyBtnClicked", "no");
  trainerBtn.setAttribute("trainerBtnClicked", "no");
  cryptoBtn.setAttribute("cryptoBtnClicked", "no");

  //
  //items

  usedItemsContainers.forEach((usedItem) => {
    itemEffect(usedItem);
  });
};

export default gameReset;
