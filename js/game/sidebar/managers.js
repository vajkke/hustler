const managersBtn = document.querySelector(".managers");
const overlay = document.querySelector(".overlay");
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");
const closeSlider = document.querySelector(".close-container");
const managerContainer = document.querySelector(".managers-option--container");

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
  managersBtn.addEventListener("click", () => {
    managerContainer.innerHTML = "";
    managerContainer.innerHTML += managersHTML;
    slider.style.animationName = "slideup";
    sliderContainer.style.animationName = "slideup";
    overlay.classList.remove("hidden");
    slider.classList.remove("hidden");
  });

  closeSlider.addEventListener("click", () => {
    slider.style.animationName = "slidedown";
    sliderContainer.style.animationName = "slidedown";
    setTimeout(() => {
      overlay.classList.add("hidden");
      slider.classList.add("hidden");
    }, 600);
  });
};

export default managersOpenFunction;
