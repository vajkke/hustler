import shopFunction from "../sidebarFunctions/shopFunction.js";

// main option
const shopWrapper = document.querySelector(".shop-option--container--wrapper");
const shopContainer = document.querySelector(".shop-option--container");
const shopShopContainer = document.querySelector(
  ".shop-selection-container--shop"
);
const shopExchangeContainer = document.querySelector(
  ".shop-selection-container--trade"
);
const shopFreeContainer = document.querySelector(
  ".shop-selection-container--freeGold"
);

// display main option
const shopImg = document.querySelector(".shop-option--shop-img");
const shopHeading = document.querySelector(".shop-option--shop-heading");
const tradeImg = document.querySelector(".shop-option--trade-img");
const tradeHeading = document.querySelector(".shop-option--trade-heading");
const freeGoldImg = document.querySelector(".shop-option--freeGold-img");
const freeGoldHeading = document.querySelector(
  ".shop-option--freeGold-heading"
);

// other options
const upgradesContainer = document.querySelector(".upgrades-option--container");
const managerContainer = document.querySelector(".managers-option--container");
const investorsContainer = document.querySelector(
  ".investors-option--container"
);
const avatarWrapper = document.querySelector(
  ".avatar-option--container--wrapper"
);
const avatarContainer = document.querySelector(".avatar-option--container");
const avatarSwagContainer = document.querySelector(
  ".avatar-selection-container--swag"
);
const avatarInventoryContainer = document.querySelector(
  ".avatar-selection-container--inventory"
);

// text & html
const sliderHeading = document.querySelector(".slider-heading");
const totalMoneySliderDisplay = document.querySelector(
  ".total-money-display--slider"
);
const borderEffect = document.querySelector(".border-effect");
const sliderText = document.querySelector(".slider-text");

const shopOpenFunction = () => {
  // removing others
  const otherOptions = [
    avatarContainer,
    managerContainer,
    avatarInventoryContainer,
    avatarSwagContainer,
    upgradesContainer,
    investorsContainer,
    shopExchangeContainer,
    shopFreeContainer,
    totalMoneySliderDisplay,
    sliderText,
    borderEffect,
  ];
  otherOptions.forEach((option) => option.classList.add("hidden"));

  // refreshing & displaying shop
  shopShopContainer.classList.remove("hidden");
  shopContainer.classList.remove("hidden");
  sliderHeading.innerHTML = "shop";
  shopImg.style.backgroundColor = "#dee7e7";
  shopHeading.style.backgroundColor = "#dee7e7";
  tradeImg.style.backgroundColor = "rgba(222, 231, 231, 0.5)";
  tradeHeading.style.backgroundColor = "rgba(222, 231, 231, 0.5)";
  freeGoldImg.style.backgroundColor = "rgba(222, 231, 231, 0.5)";
  freeGoldHeading.style.backgroundColor = "rgba(222, 231, 231, 0.5)";

  shopFunction();
};

export default shopOpenFunction;
