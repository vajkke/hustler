import babysittingFunction from "./game/babysitting.js";
import cryptoFunction from "./game/crypto.js";
import dogWalkingFunction from "./game/dogWalking.js";
import lawnMowerFunction from "./game/lawnMower.js";
import photographyFunction from "./game/photography.js";
import surveyFunction from "./game/surveys.js";
import trainerFunction from "./game/trainer.js";
import tutoringFunction from "./game/tutoring.js";

const gameFunctions = () => {
  surveyFunction();
  tutoringFunction();
  dogWalkingFunction();
  lawnMowerFunction();
  babysittingFunction();
  photographyFunction();
  trainerFunction();
  cryptoFunction();
};

export default gameFunctions;
