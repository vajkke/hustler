import babysittingFunction from "./babysitting.js";
import cryptoFunction from "./crypto.js";
import dogWalkingFunction from "./dogWalking.js";
import lawnMowerFunction from "./lawnMower.js";
import photographyFunction from "./photography.js";
import surveyFunction from "./surveys.js";
import trainerFunction from "./trainer.js";
import tutoringFunction from "./tutoring.js";

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
