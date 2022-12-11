import managerFunction from "../sidebarFunctions/managerFunction.js";

// main option
const managerContainer = document.querySelector(".managers-option--container");

// other options
const upgradesContainer = document.querySelector(".upgrades-option--container");
const avatarContainer = document.querySelector(".avatar-option--container");
const avatarInventory = document.querySelector(
  ".avatar-selection-container--inventory"
);
const avatarSwag = document.querySelector(".avatar-selection-container--swag");
const investorsContainer = document.querySelector(
  ".investors-option--container"
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
const sliderInfoHeading = document.querySelector(
  ".slider-option-info--heading"
);
const sliderInfoText = document.querySelector(".slider-option-info--text");

const managersOpenFunction = () => {
  // removing other
  const otherOptions = [
    avatarContainer,
    avatarSwag,
    avatarInventory,
    upgradesContainer,
    investorsContainer,
    shopContainer,
    shopShopContainer,
    shopExchangeContainer,
    shopFreeContainer,
  ];
  otherOptions.forEach((option) => option.classList.add("hidden"));

  // display managers
  managerContainer.classList.remove("hidden");

  sliderHeading.innerHTML = "managers";
  sliderInfoHeading.innerHTML = "Managers Make Life Easier";
  sliderInfoText.innerHTML =
    "Hire one to run your business for you, or to maximaze efficiency, all just for one easy payment!";

  managerFunction();
};

export default managersOpenFunction;
