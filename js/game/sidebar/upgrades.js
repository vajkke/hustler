const upgradesContainer = document.querySelector(".upgrades-option--container");
const managerContainer = document.querySelector(".managers-option--container");
const sliderHeading = document.querySelector(".slider-heading");
const sliderInfoHeading = document.querySelector(
  ".slider-option-info--heading"
);
const sliderInfoText = document.querySelector(".slider-option-info--text");

const upgradesHTML = `
<div class="upgrader-container survey-upgrader1">
<img
  src="./img/upgrades/surveys-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h2 class="upgrader-heading">Surveys</h2>
  <p class="upgrader-info">Speed of Surveys x2!</p>
  <p class="upgrader-price survey-upgrader1-price">$1000</p>
</div>
<div class="upgrader-buy survey-upgrader1-buy">Buy</div>
</div>
<div class="upgrader-container tutoring-upgrader1">
<img
  src="./img/upgrades/tutoring-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h2 class="upgrader-heading">Tutoring</h2>
  <p class="upgrader-info">Speed of Tutoring x2!</p>
  <p class="upgrader-price tutoring-upgrader1-price">$1000</p>
</div>
<div class="upgrader-buy tutoring-upgrader1-buy">Buy</div>
</div>
<div class="upgrader-container dogWalking-upgrader1">
<img
  src="./img/upgrades/dogwalking-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h2 class="upgrader-heading">Dog Walking</h2>
  <p class="upgrader-info">Speed of Dog Walking x2!</p>
  <p class="upgrader-price dogWalking-upgrader1-price">$1000</p>
</div>
<div class="upgrader-buy dogWalking-upgrader1-buy">Buy</div>
</div>
<div class="upgrader-container lawnMower-upgrader1">
<img
  src="./img/upgrades/lawmower-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h2 class="upgrader-heading">Lawn Mowing</h2>
  <p class="upgrader-info">Speed of Lawn Mowing x2!</p>
  <p class="upgrader-price lawnMower-upgrader1-price">$1000</p>
</div>
<div class="upgrader-buy lawnMower-upgrader1-buy">Buy</div>
</div>
<div class="upgrader-container babysitting-upgrader1">
<img
  src="./img/upgrades/babysitting-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h2 class="upgrader-heading">Babysitting</h2>
  <p class="upgrader-info">Speed of Babysitting x2!</p>
  <p class="upgrader-price babysitting-upgrader1-price">$1000</p>
</div>
<div class="upgrader-buy babysitting-upgrader1-buy">Buy</div>
</div>
<div class="upgrader-container photography-upgrader1">
<img
  src="./img/upgrades/photography-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h2 class="upgrader-heading">Photography</h2>
  <p class="upgrader-info">Speed of Photography x2!</p>
  <p class="upgrader-price photography-upgrader1-price">$1000</p>
</div>
<div class="upgrader-buy trainer-upgrader1-buy">Buy</div>
</div>
<div class="upgrader-container trainer-upgrader1">
<img
  src="./img/upgrades/personaltrainer-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h2 class="upgrader-heading">Trainer</h2>
  <p class="upgrader-info">Speed of Personal Trainer x2!</p>
  <p class="upgrader-price trainer-upgrader1-price">$1000</p>
</div>
<div class="upgrader-buy trainer-upgrader1-buy">Buy</div>
</div>
<div class="upgrader-container crypto-upgrader1">
<img
  src="./img/upgrades/crypto-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h2 class="upgrader-heading">Crypto Trader</h2>
  <p class="upgrader-info">Speed of Crypto Trader x2!</p>
  <p class="upgrader-price crypto-upgrader1-price">$1000</p>
</div>
<div class="upgrader-buy crypto-upgrader1-buy">Buy</div>
</div>

<div class="upgrader-container survey-upgrader2">
<img
  src="./img/upgrades/surveys-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h2 class="upgrader-heading">Surveys</h2>
  <p class="upgrader-info">Speed of Surveys x2!</p>
  <p class="upgrader-price survey-upgrader2-price">$2000</p>
</div>
<div class="upgrader-buy survey-upgrader2-buy">Buy</div>
</div>
<div class="upgrader-container tutoring-upgrader2">
<img
  src="./img/upgrades/tutoring-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h2 class="upgrader-heading">Tutoring</h2>
  <p class="upgrader-info">Speed of Tutoring x2!</p>
  <p class="upgrader-price tutoring-upgrader2-price">$2000</p>
</div>
<div class="upgrader-buy tutoring-upgrader2-buy">Buy</div>
</div>
<div class="upgrader-container dogWalking-upgrader2">
<img
  src="./img/upgrades/dogwalking-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h2 class="upgrader-heading">Dog Walking</h2>
  <p class="upgrader-info">Speed of Dog Walking x2!</p>
  <p class="upgrader-price dogWalking-upgrader2-price">$2000</p>
</div>
<div class="upgrader-buy dogWalking-upgrader2-buy">Buy</div>
</div>
<div class="upgrader-container lawnMower-upgrader2">
<img
  src="./img/upgrades/lawmower-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h2 class="upgrader-heading">Lawn Mowing</h2>
  <p class="upgrader-info">Speed of Lawn Mowing x2!</p>
  <p class="upgrader-price lawnMower-upgrader2-price">$2000</p>
</div>
<div class="upgrader-buy lawnMower-upgrader2-buy">Buy</div>
</div>
<div class="upgrader-container babysitting-upgrader2">
<img
  src="./img/upgrades/babysitting-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h2 class="upgrader-heading">Babysitting</h2>
  <p class="upgrader-info">Speed of Babysitting x2!</p>
  <p class="upgrader-price babysitting-upgrader2-price">$2000</p>
</div>
<div class="upgrader-buy babysitting-upgrader2-buy">Buy</div>
</div>
<div class="upgrader-container photography-upgrader2">
<img
  src="./img/upgrades/photography-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h2 class="upgrader-heading">Photography</h2>
  <p class="upgrader-info">Speed of Photography x2!</p>
  <p class="upgrader-price photography-upgrader2-price">$2000</p>
</div>
<div class="upgrader-buy trainer-upgrader2-buy">Buy</div>
</div>
<div class="upgrader-container trainer-upgrader2">
<img
  src="./img/upgrades/personaltrainer-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h2 class="upgrader-heading">Trainer</h2>
  <p class="upgrader-info">Speed of Personal Trainer x2!</p>
  <p class="upgrader-price trainer-upgrader2-price">$2000</p>
</div>
<div class="upgrader-buy trainer-upgrader2-buy">Buy</div>
</div>
<div class="upgrader-container crypto-upgrader2">
<img
  src="./img/upgrades/crypto-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h2 class="upgrader-heading">Crypto Trader</h2>
  <p class="upgrader-info">Speed of Crypto Trader x2!</p>
  <p class="upgrader-price crypto-upgrader2-price">$2000</p>
</div>
<div class="upgrader-buy crypto-upgrader2-buy">Buy</div>
</div>

<div class="upgrader-container survey-upgrader3">
<img
  src="./img/upgrades/surveys-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h3 class="upgrader-heading">Surveys</h3>
  <p class="upgrader-info">Speed of Surveys x2!</p>
  <p class="upgrader-price survey-upgrader3-price">$3000</p>
</div>
<div class="upgrader-buy survey-upgrader3-buy">Buy</div>
</div>
<div class="upgrader-container tutoring-upgrader3">
<img
  src="./img/upgrades/tutoring-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h3 class="upgrader-heading">Tutoring</h3>
  <p class="upgrader-info">Speed of Tutoring x2!</p>
  <p class="upgrader-price tutoring-upgrader3-price">$3000</p>
</div>
<div class="upgrader-buy tutoring-upgrader3-buy">Buy</div>
</div>
<div class="upgrader-container dogWalking-upgrader3">
<img
  src="./img/upgrades/dogwalking-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h3 class="upgrader-heading">Dog Walking</h3>
  <p class="upgrader-info">Speed of Dog Walking x2!</p>
  <p class="upgrader-price dogWalking-upgrader3-price">$3000</p>
</div>
<div class="upgrader-buy dogWalking-upgrader3-buy">Buy</div>
</div>
<div class="upgrader-container lawnMower-upgrader3">
<img
  src="./img/upgrades/lawmower-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h3 class="upgrader-heading">Lawn Mowing</h3>
  <p class="upgrader-info">Speed of Lawn Mowing x2!</p>
  <p class="upgrader-price lawnMower-upgrader3-price">$3000</p>
</div>
<div class="upgrader-buy lawnMower-upgrader3-buy">Buy</div>
</div>
<div class="upgrader-container babysitting-upgrader3">
<img
  src="./img/upgrades/babysitting-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h3 class="upgrader-heading">Babysitting</h3>
  <p class="upgrader-info">Speed of Babysitting x2!</p>
  <p class="upgrader-price babysitting-upgrader3-price">$3000</p>
</div>
<div class="upgrader-buy babysitting-upgrader3-buy">Buy</div>
</div>
<div class="upgrader-container photography-upgrader3">
<img
  src="./img/upgrades/photography-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h3 class="upgrader-heading">Photography</h3>
  <p class="upgrader-info">Speed of Photography x2!</p>
  <p class="upgrader-price photography-upgrader3-price">$3000</p>
</div>
<div class="upgrader-buy trainer-upgrader3-buy">Buy</div>
</div>
<div class="upgrader-container trainer-upgrader3">
<img
  src="./img/upgrades/personaltrainer-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h3 class="upgrader-heading">Trainer</h3>
  <p class="upgrader-info">Speed of Personal Trainer x2!</p>
  <p class="upgrader-price trainer-upgrader3-price">$3000</p>
</div>
<div class="upgrader-buy trainer-upgrader3-buy">Buy</div>
</div>
<div class="upgrader-container crypto-upgrader3">
<img
  src="./img/upgrades/crypto-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h3 class="upgrader-heading">Crypto Trader</h3>
  <p class="upgrader-info">Speed of Crypto Trader x2!</p>
  <p class="upgrader-price crypto-upgrader3-price">$3000</p>
</div>
<div class="upgrader-buy crypto-upgrader3-buy">Buy</div>
</div>

<div class="upgrader-container survey-upgrader4">
<img
  src="./img/upgrades/surveys-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h4 class="upgrader-heading">Surveys</h4>
  <p class="upgrader-info">Speed of Surveys x2!</p>
  <p class="upgrader-price survey-upgrader4-price">$4000</p>
</div>
<div class="upgrader-buy survey-upgrader4-buy">Buy</div>
</div>
<div class="upgrader-container tutoring-upgrader4">
<img
  src="./img/upgrades/tutoring-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h4 class="upgrader-heading">Tutoring</h4>
  <p class="upgrader-info">Speed of Tutoring x2!</p>
  <p class="upgrader-price tutoring-upgrader4-price">$4000</p>
</div>
<div class="upgrader-buy tutoring-upgrader4-buy">Buy</div>
</div>
<div class="upgrader-container dogWalking-upgrader4">
<img
  src="./img/upgrades/dogwalking-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h4 class="upgrader-heading">Dog Walking</h4>
  <p class="upgrader-info">Speed of Dog Walking x2!</p>
  <p class="upgrader-price dogWalking-upgrader4-price">$4000</p>
</div>
<div class="upgrader-buy dogWalking-upgrader4-buy">Buy</div>
</div>
<div class="upgrader-container lawnMower-upgrader4">
<img
  src="./img/upgrades/lawmower-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h4 class="upgrader-heading">Lawn Mowing</h4>
  <p class="upgrader-info">Speed of Lawn Mowing x2!</p>
  <p class="upgrader-price lawnMower-upgrader4-price">$4000</p>
</div>
<div class="upgrader-buy lawnMower-upgrader4-buy">Buy</div>
</div>
<div class="upgrader-container babysitting-upgrader4">
<img
  src="./img/upgrades/babysitting-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h4 class="upgrader-heading">Babysitting</h4>
  <p class="upgrader-info">Speed of Babysitting x2!</p>
  <p class="upgrader-price babysitting-upgrader4-price">$4000</p>
</div>
<div class="upgrader-buy babysitting-upgrader4-buy">Buy</div>
</div>
<div class="upgrader-container photography-upgrader4">
<img
  src="./img/upgrades/photography-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h4 class="upgrader-heading">Photography</h4>
  <p class="upgrader-info">Speed of Photography x2!</p>
  <p class="upgrader-price photography-upgrader4-price">$4000</p>
</div>
<div class="upgrader-buy trainer-upgrader4-buy">Buy</div>
</div>
<div class="upgrader-container trainer-upgrader4">
<img
  src="./img/upgrades/personaltrainer-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h4 class="upgrader-heading">Trainer</h4>
  <p class="upgrader-info">Speed of Personal Trainer x2!</p>
  <p class="upgrader-price trainer-upgrader4-price">$4000</p>
</div>
<div class="upgrader-buy trainer-upgrader4-buy">Buy</div>
</div>
<div class="upgrader-container crypto-upgrader4">
<img
  src="./img/upgrades/crypto-upgrader.svg"
  class="upgrader-img"
/>
<div class="upgrader-info-price">
  <h4 class="upgrader-heading">Crypto Trader</h4>
  <p class="upgrader-info">Speed of Crypto Trader x2!</p>
  <p class="upgrader-price crypto-upgrader4-price">$4000</p>
</div>
<div class="upgrader-buy crypto-upgrader4-buy">Buy</div>
</div>

`;

const upgradesOpenFunction = () => {
  upgradesContainer.innerHTML = "";
  managerContainer.innerHTML = "";
  upgradesContainer.innerHTML += upgradesHTML;

  sliderHeading.innerHTML = "upgrades";
  sliderInfoHeading.innerHTML = "You Gotta Spend Money To Make Money!";
  sliderInfoText.innerHTML =
    "Purchase these fine quality upgrades to give your businesses a boost.";
};

export default upgradesOpenFunction;
