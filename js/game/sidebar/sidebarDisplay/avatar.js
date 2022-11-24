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

// other options
const upgradesContainer = document.querySelector(".upgrades-option--container");
const managerContainer = document.querySelector(".managers-option--container");
const investorsContainer = document.querySelector(
  ".investors-option--container"
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

<div class="border-effect--avatar">&nbsp;</div>
<div class="avatar-selection-container--swag"></div>
`;

const avatarSwagHTML = `
                
              <div class="bottom-part">
                <div class="left-side">
                  <div class="avatar-selection--container">
                    <img
                      src="./img/avatars/avatarMan-select.svg"
                      class="avatar-seletion"
                    />
                    <div class="gender-select">
                      <img src="./img/avatars/male-sign.svg" class="gender" />
                    </div>
                  </div>
                </div>
                <div class="right-side">
                  <div class="item-used-top">
                    <div class="item-used--container"></div>
                    <div class="item-used--container"></div>
                  </div>
                  <div class="item-used-bottom">
                    <div class="item-used--container"></div>
                    <div class="item-used--container"></div>
                  </div>
                </div>
              </div>
           
`;

const avatarInventoryHTML = `
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
<div class="item-container item-container--gold">
<img src="./img/items/leprechaunItem.svg" />
</div>
<div class="item-container item-container--gold">
<img src="./img/items/piggyBank.svg" />
</div>`;

const avatarOpenFunction = () => {
  // removing others
  upgradesContainer.innerHTML = "";
  managerContainer.innerHTML = "";
  investorsContainer.innerHTML = "";
  totalMoneySliderDisplay.classList.add("hidden");
  sliderText.classList.add("hidden");
  borderEffect.classList.add("hidden");

  // refreshing & displaying avatar
  avatarInventoryContainer.innerHTML = "";
  avatarSwagContainer.innerHTML = "";
  avatarContainer.innerHTML = "";
  avatarContainer.innerHTML += avatarHTML;
  sliderHeading.innerHTML = "avatar";

  // deciding which avatar to display -- nepotrebno realno
  if (avatarWrapper.getAttribute("option") === "swag") {
    avatarSwagContainer.innerHTML += avatarSwagHTML;
  } else if (avatarWrapper.getAttribute("option") === "inventory") {
    avatarInventoryContainer.innerHTML += avatarInventoryHTML;
  }
};

export default avatarOpenFunction;
