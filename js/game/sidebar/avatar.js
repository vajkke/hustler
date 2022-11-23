const upgradesContainer = document.querySelector(".upgrades-option--container");
const managerContainer = document.querySelector(".managers-option--container");

const avatarWrapper = document.querySelector(
  ".avatar-option--container--wrapper"
);
const avatarContainer = document.querySelector(".avatar-option--container");
const avatarSwagContainer = document.querySelector(
  ".avatar-selection-container--swag"
);

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
                    <div class="item-used--container"></div>
                  </div>
                  <div class="item-used-bottom">
                    <div class="item-used--container"></div>
                    <div class="item-used--container"></div>
                    <div class="item-used--container"></div>
                  </div>
                </div>
              </div>
           
`;

const avatarOpenFunction = () => {
  sliderHeading.innerHTML = "avatar";
  // removing others
  upgradesContainer.innerHTML = "";
  managerContainer.innerHTML = "";

  avatarSwagContainer.innerHTML = "";
  avatarContainer.innerHTML = "";

  avatarContainer.innerHTML += avatarHTML;

  if (avatarWrapper.getAttribute("option") === "swag") {
    avatarSwagContainer.innerHTML += avatarSwagHTML;
  }

  totalMoneySliderDisplay.classList.add("hidden");
  sliderText.classList.add("hidden");
  borderEffect.classList.add("hidden");
};

export default avatarOpenFunction;
