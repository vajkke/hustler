const investorsOverlay = document.querySelector(".investors-overlay");
const rainingMoneyLeft = document.querySelector(".raining-money-left");
const rainingMoneyRight = document.querySelector(".raining-money-right");
const restartContainer = document.querySelector(".restart-container");
const addedProfit = document.querySelector(".added-profit-amount");
const sliderContainer = document.querySelector(".slider");
const sliderOverlay = document.querySelector(".overlay");

const investorsAnimation = (profit) => {
  addedProfit.innerHTML = profit;
  investorsOverlay.classList.remove("hidden");
  rainingMoneyLeft.classList.remove("hidden");
  rainingMoneyRight.classList.remove("hidden");
  restartContainer.classList.remove("hidden");
  setTimeout(() => {
    investorsOverlay.classList.add("hidden");
    rainingMoneyLeft.classList.add("hidden");
    rainingMoneyRight.classList.add("hidden");
    restartContainer.classList.add("hidden");
    sliderContainer.classList.add("hidden");
    sliderOverlay.classList.add("hidden");
  }, 3000);
};

export default investorsAnimation;
