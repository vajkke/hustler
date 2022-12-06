import upgradesFunction from "../sidebarFunctions/upgradesFunction.js";

// main option
const upgradesContainer = document.querySelector(".upgrades-option--container");

// other option
const managerContainer = document.querySelector(".managers-option--container");
const avatarContainer = document.querySelector(".avatar-option--container");
const avatarSwag = document.querySelector(".avatar-selection-container--swag");
const avatarInventory = document.querySelector(
  ".avatar-selection-container--inventory"
);
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

// text & HTML
const sliderHeading = document.querySelector(".slider-heading");
const sliderInfoHeading = document.querySelector(
  ".slider-option-info--heading"
);
const sliderInfoText = document.querySelector(".slider-option-info--text");

const upgradesOpenFunction = () => {
  // removing other options
  const otherOptions = [
    avatarContainer,
    avatarSwag,
    avatarInventory,
    managerContainer,
    investorsContainer,
    shopContainer,
    shopShopContainer,
    shopExchangeContainer,
    shopFreeContainer,
  ];
  otherOptions.forEach((option) => option.classList.add("hidden"));

  // refreshing and displaying upgrades
  upgradesContainer.classList.remove("hidden");
  sliderHeading.innerHTML = "upgrades";
  sliderInfoHeading.innerHTML = "You Gotta Spend Money To Make Money!";
  sliderInfoText.innerHTML =
    "Purchase these fine quality upgrades to give your businesses a boost.";

  upgradesFunction();
};

export default upgradesOpenFunction;
