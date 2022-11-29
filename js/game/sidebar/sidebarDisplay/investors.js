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
const investorsHTML = `<div class="investors-left-side">
<div class="investors-text">
  <h1 class="investors-text--heading">
    Holy Smokes! Look at those profits!
  </h1>
  <p class="investors-text-info">
    The more money you earn, the more investors you attract. They
    increase profits but you'll need to sell your businesses to
    start over to bring 'em on board.
  </p>
</div>
<div class="investors-number">
  <img src="./img/investors/profit-right.svg" />
  <div class="profit-increase--container">
    <h1 class="investor-number-heading">
      Your total profit increase
    </h1>
    <p class="total-profit-increase-text">
      <span class="total-profit-increase-value">0</span>%
    </p>
  </div>
  <img src="./img/investors/profit-right.svg" />
</div>
</div>
<div class="investors-right-side">
<div class="profit-claim-container">
  <p class="profit-increase-text">
    <span class="profit-increase-value">0</span>%
  </p>
  <p class="profit-claim-text">Profit gained with Restart</p>
  <h1 class="claim-profit">Claim</h1>
  <p class="warning-text">Restart Your Businesses</p>
</div>
</div>`;

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
  investorsContainer.innerHTML = "";
  investorsContainer.innerHTML += investorsHTML;
  sliderHeading.innerHTML = "investors";
};

export default investorsOpenFunction;
