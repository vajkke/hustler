const upgradeNumbers = document.querySelectorAll(".upgrade-number");
const progressBar = document.querySelectorAll(".upgrade-progress-bar");

// upgrade prices
const surveyUpgradePriceDisplay = document.querySelector(
  ".survey-upgrade--price"
);
const tutoringUpgradePriceDisplay = document.querySelector(
  ".tutoring-upgrade--price"
);
const dogWalkingUpgradePriceDisplay = document.querySelector(
  ".dogWalking-upgrade--price"
);
const lawnMowerUpgradePriceDisplay = document.querySelector(
  ".lawnMower-upgrade--price"
);
const babysittingUpgradePriceDisplay = document.querySelector(
  ".babysitting-upgrade--price"
);
const photographyUpgradePriceDisplay = document.querySelector(
  ".photography-upgrade--price"
);
const trainerUpgradePriceDisplay = document.querySelector(
  ".trainer-upgrade--price"
);
const cryptoUpgradePriceDisplay = document.querySelector(
  ".crypto-upgrade--price"
);

const restartJobs = () => {
  upgradeNumbers.forEach((upgradeNumber) => (upgradeNumber.innerHTML = 0));
  progressBar.forEach((bar) => (bar.style.width = 0 + "%"));

  surveyUpgradePriceDisplay.innerHTML = 1;
  tutoringUpgradePriceDisplay.innerHTML = 50;
  dogWalkingUpgradePriceDisplay.innerHTML = 500;
  lawnMowerUpgradePriceDisplay.innerHTML = 1500;
  babysittingUpgradePriceDisplay.innerHTML = 8000;
  photographyUpgradePriceDisplay.innerHTML = 15000;
  trainerUpgradePriceDisplay.innerHTML = 35000;
  cryptoUpgradePriceDisplay.innerHTML = 75000;
};

export default restartJobs;
