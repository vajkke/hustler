import managersOpenFunction from "./managers.js";
import upgradesOpenFunction from "./upgrades.js";

const overlay = document.querySelector(".overlay");
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");
const closeSlider = document.querySelector(".close-container");

const sliderAnimation = () => {
  slider.style.animationName = "slideup";
  sliderContainer.style.animationName = "slideup";
  overlay.classList.remove("hidden");
  slider.classList.remove("hidden");
};

const sidebarFunction = () => {
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("managers-heading")) {
      sliderAnimation();
      managersOpenFunction();
    } else if (e.target.classList.contains("upgrades-heading")) {
      sliderAnimation();
      upgradesOpenFunction();
    }
  });

  closeSlider.addEventListener("click", () => {
    slider.style.animationName = "slidedown";
    sliderContainer.style.animationName = "slidedown";
    setTimeout(() => {
      overlay.classList.add("hidden");
      slider.classList.add("hidden");
    }, 600);
  });
};

export default sidebarFunction;
