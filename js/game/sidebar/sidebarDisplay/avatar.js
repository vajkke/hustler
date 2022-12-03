// avatar function
import avatarFunction from "../sidebarFunctions/avatarFunction.js";

// main option
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

const equipedItemPopUp = document.querySelector(".equiped-pop-up--item");
const equipedOverlayPopUp = document.querySelector(".pop-up-equiped--overlay");

// other options
const upgradesContainer = document.querySelector(".upgrades-option--container");
const managerContainer = document.querySelector(".managers-option--container");
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
const totalMoneySliderDisplay = document.querySelector(
  ".total-money-display--slider"
);
const borderEffect = document.querySelector(".border-effect");
const sliderText = document.querySelector(".slider-text");

const avatarHTML = `
<div class="top-options">
<div class="top-options--container swag">
  <div class="top-options-img swag-option-img">
    <img src="./img/avatars/swag.svg" class="swag-img" />
  </div>
  <h1 class="top-options--heading swag-option--heading">Swag</h1>
</div>
<div class="top-options--container inventory">
  <div class="top-options-img inventory-option-img">
    <img
      src="./img/avatars/inventory.svg"
      class="inventory-img"
    />
  </div>
  <h1 class="top-options--heading inventory-option--heading">
    Inventory
  </h1>
</div>
</div>
`;

const avatarOpenFunction = () => {
  // removing others
  const otherOptions = [
    upgradesContainer,
    investorsContainer,
    shopContainer,
    shopShopContainer,
    shopExchangeContainer,
    shopFreeContainer,
    managerContainer,
    totalMoneySliderDisplay,
    sliderText,
    borderEffect,
    equipedItemPopUp,
    equipedOverlayPopUp,
  ];
  otherOptions.forEach((option) => option.classList.add("hidden"));

  // refreshing & displaying avatar
  avatarInventoryContainer.classList.add("hidden");
  avatarSwagContainer.classList.remove("hidden");
  avatarContainer.classList.remove("hidden");

  avatarContainer.innerHTML = "";
  avatarContainer.innerHTML += avatarHTML;
  sliderHeading.innerHTML = "avatar";

  // functions
  avatarFunction();
};

export default avatarOpenFunction;
