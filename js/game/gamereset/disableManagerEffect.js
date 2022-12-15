import managerEffects from "../sidebar/sidebarFunctions/managerEffects.js";

// display
const progressBar = document.querySelectorAll(".progress-bar");

const disableManagerEffect = () => {
  managerEffects(null);

  progressBar.forEach(
    (bar) =>
      (bar.style.cssText = `width: 0%; transition: width 0s ease-in-out;`)
  );
};

export default disableManagerEffect;
