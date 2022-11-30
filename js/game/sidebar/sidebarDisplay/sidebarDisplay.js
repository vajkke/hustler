import avatarOpenFunction from "./avatar.js";
import investorsOpenFunction from "./investors.js";
import managersOpenFunction from "./managers.js";
import shopOpenFunction from "./shop.js";
import upgradesOpenFunction from "./upgrades.js";

const overlay = document.querySelector(".overlay");
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");
const closeSlider = document.querySelector(".close-container");
const totalMoneySliderDisplay = document.querySelector(
  ".total-money-display--slider"
);
const inventoryPopUpItem = document.querySelector(".inventory-pop-up--item");
const itemPopUp = document.querySelector(".shop-pop-up--item");
const itemPopUpOverlay = document.querySelector(".pop-up-item--overlay");

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
    if (
      e.target.classList.contains("managers-heading") ||
      e.target.classList.contains("managers")
    ) {
      sliderAnimation();
      managersOpenFunction();
    } else if (
      e.target.classList.contains("upgrades-heading") ||
      e.target.classList.contains("upgrades")
    ) {
      sliderAnimation();
      upgradesOpenFunction();
    } else if (
      e.target.classList.contains("avatar") ||
      e.target.classList.contains("avatar-img")
    ) {
      sliderAnimation();
      avatarOpenFunction();
    } else if (
      e.target.classList.contains("investors-heading") ||
      e.target.classList.contains("investors")
    ) {
      sliderAnimation();
      investorsOpenFunction();
    } else if (
      e.target.classList.contains("shop-heading") ||
      e.target.classList.contains("shop")
    ) {
      sliderAnimation();
      shopOpenFunction();
    }
  });

  closeSlider.addEventListener("click", () => {
    slider.style.animationName = "slidedown";
    sliderContainer.style.animationName = "slidedown";
    inventoryPopUpItem.classList.add("hidden");
    itemPopUp.classList.add("hidden");
    itemPopUpOverlay.classList.add("hidden");
    setTimeout(() => {
      overlay.classList.add("hidden");
      slider.classList.add("hidden");
    }, 600);
  });
};

export default sidebarDisplayFunction;
