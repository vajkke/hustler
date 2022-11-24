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

// text & html
const sliderHeading = document.querySelector(".slider-heading");
const sliderInfoHeading = document.querySelector(
  ".slider-option-info--heading"
);
const sliderInfoText = document.querySelector(".slider-option-info--text");

const managersHTML = `
<div class="managers-option--container">
<div class="manager-container survey-manager-container">
  <img
    src="./img/managers/surveys-manager.svg"
    alt=""
    class="manager-photo"
  />
  <div class="manager-name-info-price">
    <h1 class="manager-name">Rebbeca Tejeda</h1>
    <p class="manager-info">Runs Surveys</p>
    <p class="manager-price survey-manager-price">$300</p>
  </div>
  <div class="manager-buy survey-manager-buy">Buy</div>
</div>
<div class="manager-container tutoring-manager-container">
  <img
    src="./img/managers/tutoring-manager.svg"
    alt=""
    class="manager-photo"
  />
  <div class="manager-name-info-price">
    <h1 class="manager-name">Herschel Herman</h1>
    <p class="manager-info">Runs Tutoring</p>
    <p class="manager-price tutoring-manager-price">$300</p>
  </div>
  <div class="manager-buy tutoring-manager-buy">Buy</div>
</div>
<div class="manager-container dogWalking-manager-container">
  <img
    src="./img/managers/dogWalking-manager.svg"
    alt=""
    class="manager-photo"
  />
  <div class="manager-name-info-price">
    <h1 class="manager-name">Ardella Medlins</h1>
    <p class="manager-info">Runs Dog Walking</p>
    <p class="manager-price dogWalking-manager-price">$300</p>
  </div>
  <div class="manager-buy dogWalking-manager-buy">Buy</div>
</div>
<div class="manager-container lawnMower-manager-container">
  <img
    src="./img/managers/lawnMower-manager.svg"
    alt=""
    class="manager-photo"
  />
  <div class="manager-name-info-price">
    <h1 class="manager-name">Pierre Devlin</h1>
    <p class="manager-info">Runs Lawn Mowing</p>
    <p class="manager-price lawnMower-manager-price">$300</p>
  </div>
  <div class="manager-buy lawnMower-manager-buy">Buy</div>
</div>
<div class="manager-container babysitting-manager-container">
  <img
    src="./img/managers/babysitting-manager.svg"
    alt=""
    class="manager-photo"
  />
  <div class="manager-name-info-price">
    <h1 class="manager-name">Chelsie Spradlin</h1>
    <p class="manager-info">Runs Babysitting</p>
    <p class="manager-price babysitting-manager-price">$300</p>
  </div>
  <div class="manager-buy babysitting-manager-buy">Buy</div>
</div>
<div class="manager-container photography-manager-container">
  <img
    src="./img/managers/photography-manager.svg"
    alt=""
    class="manager-photo"
  />
  <div class="manager-name-info-price">
    <h1 class="manager-name">Lorita Mccaffrey</h1>
    <p class="manager-info">Runs Photography</p>
    <p class="manager-price photography-manager-price">$300</p>
  </div>
  <div class="manager-buy photography-manager-buy">Buy</div>
</div>
<div class="manager-container trainer-manager-container">
  <img
    src="./img/managers/trainer-manager.svg"
    alt=""
    class="manager-photo"
  />
  <div class="manager-name-info-price">
    <h1 class="manager-name">Brock Diggs</h1>
    <p class="manager-info">Runs Personal Training</p>
    <p class="manager-price trainer-manager-price">$300</p>
  </div>
  <div class="manager-buy trainer-manager-buy">Buy</div>
</div>
<div class="manager-container crypto-manager-container">
  <img
    src="./img/managers/crypto-manager.svg"
    alt=""
    class="manager-photo"
  />
  <div class="manager-name-info-price">
    <h1 class="manager-name">Linwood Lessard</h1>
    <p class="manager-info">Runs Crypto Trading</p>
    <p class="manager-price crypto-manager-price">$300</p>
  </div>
  <div class="manager-buy crypto-manager-buy">Buy</div>
</div>
</div>

`;

const managersOpenFunction = () => {
  // removing other
  avatarContainer.innerHTML = "";
  avatarSwag.innerHTML = "";
  avatarInventory.innerHTML = "";
  upgradesContainer.innerHTML = "";
  investorsContainer.innerHTML = "";

  // display managers
  managerContainer.innerHTML = "";
  managerContainer.innerHTML += managersHTML;

  sliderHeading.innerHTML = "managers";
  sliderInfoHeading.innerHTML = "Managers Make Life Easier";
  sliderInfoText.innerHTML =
    "Hire one to run your business for you, or to maximaze efficiency, all just for one easy payment!";
};

export default managersOpenFunction;
