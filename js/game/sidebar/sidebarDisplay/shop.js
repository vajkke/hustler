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

const shopHTML = `<div class="shop-top--options">
<div class="shop-top-option shop-option--shop">
  <div class="shop-option-img shop-option--shop-img">
    <img src="./img/shop/shop.svg" alt="" />
  </div>
  <h1 class="shop-option--heading shop-option--shop-heading">
    Shop
  </h1>
</div>
<div class="shop-top-option shop-option--trade">
  <div class="shop-option-img shop-option--trade-img">
    <img src="./img/shop/exchange.svg" alt="" />
  </div>
  <h1 class="shop-option--heading shop-option--trade-heading">
    Exchange
  </h1>
</div>

<div class="shop-top-option shop-option--freeGold">
  <div class="shop-option-img shop-option--freeGold-img">
    <img src="./img/shop/free.svg" alt="" />
  </div>
  <h1
    class="shop-option--heading shop-option--freeGold-heading"
  >
    Free Gold
  </h1>
</div>
</div>
<div class="border-effect--avatar">&nbsp;</div>
<div class="gold-money--container">
<div class="gold-number--container">
  <img src="./img/shop/gold.svg" class="gold-img" />
  <h1 class="gold-number--value">0</h1>
</div>
<p class="total-money-display--shop">
  $ <span class="total-money--slider">0</span>
</p>
</div>`;

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
  sliderHeading.innerHTML = "shop";
  shopContainer.innerHTML = "";
  shopContainer.innerHTML += shopHTML;

  shopFunction();
};

export default shopOpenFunction;
