import investorsFunction from "../sidebarFunctions/investorsFunction.js";

// main option
const investorsContainer = document.querySelector(
  ".investors-option--container"
);

// other options
const managerContainer = document.querySelector(".managers-option--container");
const upgradesContainer = document.querySelector(".upgrades-option--container");
const avatarContainer = document.querySelector(".avatar-option--container");
const avatarSwag = document.querySelector(".avatar-selection-container--swag");
const avatarInventory = document.querySelector(
  ".avatar-selection-container--inventory"
);

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

// text & html
const sliderHeading = document.querySelector(".slider-heading");
const investorsHTML = ``;

const totalMoneySliderDisplay = document.querySelector(
  ".total-money-display--slider"
);

const borderEffect = document.querySelector(".border-effect");
const sliderText = document.querySelector(".slider-text");

const investorsOpenFunction = () => {
  // removing other
  const otherOptions = [
    avatarContainer,
    avatarSwag,
    avatarInventory,
    upgradesContainer,
    managerContainer,
    totalMoneySliderDisplay,
    sliderText,
    borderEffect,
    shopContainer,
    shopShopContainer,
    shopExchangeContainer,
    shopFreeContainer,
  ];

  otherOptions.forEach((option) => option.classList.add("hidden"));

  // display investors
  investorsContainer.classList.remove("hidden");
  sliderHeading.innerHTML = "investors";

  investorsFunction();
};

export default investorsOpenFunction;
