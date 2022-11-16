import babysittingFunction from "./game/babysitting.js";
import dogWalkingFunction from "./game/dogWalking.js";
import lawnMowerFunction from "./game/lawnMower.js";
import photographyFunction from "./game/photography.js";
import surveyFunction from "./game/surveys.js";
import tutoringFunction from "./game/tutoring.js";

const gameFunctions = () => {
  surveyFunction();
  tutoringFunction();
  dogWalkingFunction();
  lawnMowerFunction();
  babysittingFunction();
  photographyFunction();
};

export default gameFunctions;
