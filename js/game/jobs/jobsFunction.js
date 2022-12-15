import { surveyFunction } from "./surveys.js";
import { tutoringFunction } from "./tutoring.js";
import { dogWalkingFunction } from "./dogWalking.js";
import { lawnMowerFunction } from "./lawnMower.js";
import { babysittingFunction } from "./babysitting.js";
import { photographyFunction } from "./photography.js";
import { trainerFunction } from "./trainer.js";
import { cryptoFunction } from "./crypto.js";

const jobsFunction = () => {
  surveyFunction();
  tutoringFunction();
  dogWalkingFunction();
  lawnMowerFunction();
  babysittingFunction();
  photographyFunction();
  trainerFunction();
  cryptoFunction();
};

export default jobsFunction;
