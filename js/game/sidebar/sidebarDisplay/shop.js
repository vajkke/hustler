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

const shopHTML = `
<div class="shop-top--options">
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
</div>
`;

const shopShopHTML = `
<div class="item-container item-container--gold">
<img src="./img/items/leprechaunItem.svg" />
</div>
<div class="item-container item-container--gold">
<img src="./img/items/piggyBank.svg" />
</div>
<div class="item-container item-container--rare">
<img src="./img/items/crypto2Item.svg" />
</div>
<div class="item-container item-container--rare">
<img src="./img/items/manekiItem.svg" />
</div>
<div class="item-container item-container--rare">
<img src="./img/items/speedometerItem.svg" />
</div>
<div class="item-container item-container--rare">
<img src="./img/items/juiceItem.svg" />
</div>
<div class="item-container item-container--average">
<img src="./img/items/surveysItem.svg" />
</div>
<div class="item-container item-container--average">
<img src="./img/items/mathItem.svg" />
</div>
<div class="item-container item-container--average">
<img src="./img/items/dogsItem.svg" />
</div>
<div class="item-container item-container--average">
<img src="./img/items/lawnmowerItem.svg" />
</div>
<div class="item-container item-container--average">
<img src="./img/items/babysittingItem.svg" />
</div>
<div class="item-container item-container--average">
<img src="./img/items/photographyItem.svg" />
</div>
<div class="item-container item-container--average">
<img src="./img/items/trainerItem.svg" />
</div>
<div class="item-container item-container--average">
<img src="./img/items/cryptoItem.svg" />
</div>
`;

const exchangeHTML = `
<div class="converter--buttons">
<div class="dollars-to-gold--container">
  <div class="cost-container">
    <h1 class="exchange-cost--heading">Cost</h1>
    <div class="cost-display--container">
      <h1 class="cost-money-text">
        $ <span class="cost-money-value">1000000</span>
      </h1>
    </div>
  </div>
  <div class="result-container">
    <h1 class="exchange-result--heading">Result</h1>
    <div class="result-display--container">
      <h1 class="result-gold-text">
        <img src="./img/shop/gold-exchange.svg" />
        <span class="result-gold-value">1</span>
      </h1>
    </div>
  </div>
</div>

<div class="buttons-container">
  <div class="arrow-up--container arrow">
    <span class="material-symbols-outlined arrow-up">
      keyboard_arrow_up
    </span>
  </div>
  <div class="arrow-down--container arrow">
    <span class="material-symbols-outlined arrow-down">
      keyboard_arrow_down
    </span>
  </div>
</div>
</div>
<div class="exchange-button">EXCHANGE</div>
`;

const freeGoldHTML = `
<div class="free-left-side">
<div class="social-media--container">
  <div class="social-media github">
    <img
      src="./img/shop/github.svg"
      class="social-media--img github-img"
    />
    <h1 class="social-media-text">Star this repository</h1>
    <a href="#"><div class="social-media--btn">Go</div></a>
  </div>
  <div class="social-media linkedin">
    <img
      src="./img/shop/linkedin.svg"
      class="social-media--img linkedin-img"
    />
    <h1 class="social-media-text">Add on Linkedin</h1>
    <a href="#"><div class="social-media--btn">Go</div></a>
  </div>

  <div class="social-media youtube">
    <img
      src="./img/shop/youtube.svg"
      class="social-media--img youtube-img"
    />
    <h1 class="social-media-text">Subscribe on Youtube</h1>
    <a href="#"><div class="social-media--btn">Go</div></a>
  </div>
  <div class="social-media twitter">
    <img
      src="./img/shop/twitter.svg"
      class="social-media--img twitter-img"
    />
    <h1 class="social-media-text">Follow on Twitter</h1>
    <a href="#"><div class="social-media--btn">Go</div></a>
  </div>
</div>
</div>
<div class="free-right-side">
<div class="promo-code--container">
  <h1 class="promo-code--heading">
    Use promo code and get free gold
  </h1>
  <form name="promo-code" class="promo-code--form">
    <input type="text" class="promo-code--input" />
    <input type="button" value="apply" class="promo-codeBtn" />
  </form>
</div>
</div>
`;

const shopOpenFunction = () => {
  // removing others
  upgradesContainer.innerHTML = "";
  managerContainer.innerHTML = "";
  investorsContainer.innerHTML = "";
  avatarInventoryContainer.innerHTML = "";
  avatarSwagContainer.innerHTML = "";
  avatarContainer.innerHTML = "";

  totalMoneySliderDisplay.classList.add("hidden");
  sliderText.classList.add("hidden");
  borderEffect.classList.add("hidden");

  // refreshing & displaying shop
  shopShopContainer.innerHTML = "";
  shopExchangeContainer.innerHTML = "";
  shopFreeContainer.innerHTML = "";

  shopContainer.innerHTML = "";
  shopContainer.innerHTML += shopHTML;
  sliderHeading.innerHTML = "shop";

  // deciding which shop to display -- nepotrebno realno
  if (shopWrapper.getAttribute("option") === "shop") {
    shopShopContainer.innerHTML += shopShopHTML;
  } else if (shopWrapper.getAttribute("option") === "exchange") {
    shopExchangeContainer.innerHTML += exchangeHTML;
  } else if (shopWrapper.getAttribute("option") === "free") {
    shopFreeContainer.innerHTML += freeGoldHTML;
  }
};

export default shopOpenFunction;
