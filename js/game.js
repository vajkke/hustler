import jobsFunction from "./game/jobs/jobsFunction.js";
import upgradesFunction from "./game/upgrades/upgrades.js";

const gameFunctions = () => {
  jobsFunction();
  upgradesFunction();
};

export default gameFunctions;
