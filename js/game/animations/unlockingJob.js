const totalMoneyDisplay = document.querySelector(".total-money--amount");
const totalMoneySlider = document.querySelector(".total-money--slider");
let totalMoney = +totalMoneyDisplay.innerHTML;

// containers
const tutoringUnlockContainer = document.querySelector(".unlock-tutoring--job");
const dogWalkingUnlockContainer = document.querySelector(
  ".unlock-dogWalking--job"
);
const lawnMowerUnlockContainer = document.querySelector(
  ".unlock-lawnMower--job"
);
const babysittingUnlockContainer = document.querySelector(
  ".unlock-babysitting--job"
);
const photographyUnlockContainer = document.querySelector(
  ".unlock-photography--job"
);
const trainerUnlockContainer = document.querySelector(".unlock-trainer--job");
const cryptoUnlockContainer = document.querySelector(".unlock-crypto--job");

// buttons
const unlockTutoringBtn = document.querySelector(".unlock-tutoring");
const unlockDogWalkingBtn = document.querySelector(".unlock-dogWalking");
const unlockLawnMowerBtn = document.querySelector(".unlock-lawnMower");
const unlockBabysittingBtn = document.querySelector(".unlock-babysitting");
const unlockPhotographyBtn = document.querySelector(".unlock-photography");
const unlockTrainerBtn = document.querySelector(".unlock-trainer");
const unlockCryptoBtn = document.querySelector(".unlock-crypto");

// prices to unlock
// display
const tutoringUnlockPriceDisplay = document.querySelector(
  ".unlock-tutoring--price"
);
const dogWalkingUnlockPriceDisplay = document.querySelector(
  ".unlock-dogWalking--price"
);
const lawnMowerUnlockPriceDisplay = document.querySelector(
  ".unlock-lawnMower--price"
);
const babysittingUnlockPriceDisplay = document.querySelector(
  ".unlock-babysitting--price"
);
const photographyUnlockPriceDisplay = document.querySelector(
  ".unlock-photography--price"
);
const trainerUnlockPriceDisplay = document.querySelector(
  ".unlock-trainer--price"
);
const cryptoUnlockPriceDisplay = document.querySelector(
  ".unlock-crypto--price"
);

// values
const tutoringPrice = +tutoringUnlockPriceDisplay.innerHTML;
const dogWalkingPrice = +dogWalkingUnlockPriceDisplay.innerHTML;
const lawnMowerPrice = +lawnMowerUnlockPriceDisplay.innerHTML;
const babysittingPrice = +babysittingUnlockPriceDisplay.innerHTML;
const photographyPrice = +photographyUnlockPriceDisplay.innerHTML;
const trainerPrice = +trainerUnlockPriceDisplay.innerHTML;
const cryptoPrice = +cryptoUnlockPriceDisplay.innerHTML;

const unlockingJobs = () => {
  unlockTutoringBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (totalMoney >= tutoringPrice) {
      tutoringUnlockContainer.classList.add("hidden");
      totalMoney -= tutoringPrice;
      totalMoneyDisplay.innerHTML = totalMoney;
      totalMoneySlider.innerHTML = totalMoney;
    }
  });

  unlockDogWalkingBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (totalMoney >= dogWalkingPrice) {
      dogWalkingUnlockContainer.classList.add("hidden");
      totalMoney -= dogWalkingPrice;
      totalMoneyDisplay.innerHTML = totalMoney;
      totalMoneySlider.innerHTML = totalMoney;
    }
  });

  unlockLawnMowerBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (totalMoney >= lawnMowerPrice) {
      lawnMowerUnlockContainer.classList.add("hidden");
      totalMoney -= lawnMowerPrice;
      totalMoneyDisplay.innerHTML = totalMoney;
      totalMoneySlider.innerHTML = totalMoney;
    }
  });

  unlockBabysittingBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (totalMoney >= babysittingPrice) {
      babysittingUnlockContainer.classList.add("hidden");
      totalMoney -= babysittingPrice;
      totalMoneyDisplay.innerHTML = totalMoney;
      totalMoneySlider.innerHTML = totalMoney;
    }
  });

  unlockPhotographyBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (totalMoney >= photographyPrice) {
      photographyUnlockContainer.classList.add("hidden");
      totalMoney -= photographyPrice;
      totalMoneyDisplay.innerHTML = totalMoney;
      totalMoneySlider.innerHTML = totalMoney;
    }
  });

  unlockTrainerBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (totalMoney >= trainerPrice) {
      trainerUnlockContainer.classList.add("hidden");
      totalMoney -= trainerPrice;
      totalMoneyDisplay.innerHTML = totalMoney;
      totalMoneySlider.innerHTML = totalMoney;
    }
  });

  unlockCryptoBtn.addEventListener("click", () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    if (totalMoney >= cryptoPrice) {
      cryptoUnlockContainer.classList.add("hidden");
      totalMoney -= cryptoPrice;
      totalMoneyDisplay.innerHTML = totalMoney;
      totalMoneySlider.innerHTML = totalMoney;
    }
  });
};

export default unlockingJobs;
