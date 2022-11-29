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
  upgradesContainer.innerHTML = "";
  managerContainer.innerHTML = "";
  investorsContainer.innerHTML = "";
  avatarInventoryContainer.classList.add("hidden");
  avatarSwagContainer.classList.add("hidden");
  avatarContainer.classList.add("hidden");

  totalMoneySliderDisplay.classList.add("hidden");
  sliderText.classList.add("hidden");
  borderEffect.classList.add("hidden");

  // refreshing & displaying shop
  shopShopContainer.classList.remove("hidden");
  shopContainer.classList.remove("hidden");
  sliderHeading.innerHTML = "shop";

  shopFunction();
};

export default shopOpenFunction;
