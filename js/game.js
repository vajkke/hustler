import jobsFunction from "./game/jobs/jobsFunction.js";
import sidebar from "./game/sidebar/sidebar.js";
import animations from "./game/animations/animations.js";

const gameFunctions = () => {
  jobsFunction();
  sidebar();
  animations();
};

export default gameFunctions;
