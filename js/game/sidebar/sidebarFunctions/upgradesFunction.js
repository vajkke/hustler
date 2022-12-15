import upgradesEffects from "./upgradesEffect.js";

const upgradesFunction = () => {
  const totalMoneyDisplay = document.querySelector(".total-money--amount");
  const totalMoneySliderDisplay = document.querySelector(
    ".total-money--slider"
  );

  const buyUpgradeBtns = document.querySelectorAll(".upgrader-buy");
  const upgraderContainers = document.querySelectorAll(".upgrader-container");

  const upgradesContainer = document.querySelector(
    ".upgrades-option--container"
  );

  let upgraderPrice;
  let totalMoney = +totalMoneyDisplay.innerHTML;
  let targetContainer;

  buyUpgradeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      targetContainer = e.target.parentElement;
      upgraderPrice = +targetContainer.getAttribute("price");
      if (totalMoney >= upgraderPrice) {
        totalMoney -= upgraderPrice;
        totalMoneyDisplay.innerHTML = totalMoney;
        totalMoneySliderDisplay.innerHTML = totalMoney;
        upgradesEffects(targetContainer);
        targetContainer.classList.add("hidden");
        targetContainer = "";
      }
    });
  });
};

export default upgradesFunction;
