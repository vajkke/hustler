import avatarOpenFunction from "./avatar.js";
import managersOpenFunction from "./managers.js";
import upgradesOpenFunction from "./upgrades.js";

const overlay = document.querySelector(".overlay");
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");
const closeSlider = document.querySelector(".close-container");
const totalMoneySliderDisplay = document.querySelector(
  ".total-money-display--slider"
);

const borderEffect = document.querySelector(".border-effect");
const sliderText = document.querySelector(".slider-text");

const sliderAnimation = () => {
  sliderContainer.classList.remove("hidden");
  slider.style.animationName = "slideup";
  sliderContainer.style.animationName = "slideup";
  overlay.classList.remove("hidden");
  slider.classList.remove("hidden");
  totalMoneySliderDisplay.classList.remove("hidden");
  sliderText.classList.remove("hidden");
  borderEffect.classList.remove("hidden");
};

const sidebarDisplayFunction = () => {
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("managers-heading")) {
      sliderAnimation();
      managersOpenFunction();
    } else if (e.target.classList.contains("upgrades-heading")) {
      sliderAnimation();
      upgradesOpenFunction();
    } else if (
      e.target.classList.contains("avatar") ||
      e.target.classList.contains("avatar-img")
    ) {
      sliderAnimation();
      avatarOpenFunction();
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

export default sidebarDisplayFunction;
