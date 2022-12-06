import upgradesEffects from "./upgradesEffect.js";

const upgradesFunction = () => {
  const totalMoneyDisplay = document.querySelector(".total-money--amount");
  const totalMoneySliderDisplay = document.querySelector(
    ".total-money--slider"
  );

  const buyUpgradeBtns = document.querySelectorAll(".upgrader-buy");
  const upgraderContainers = document.querySelectorAll(".upgrader-container");

  let upgraderPrice;
  let totalMoney = +totalMoneyDisplay.innerHTML;

  buyUpgradeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let targetContainer = e.target.parentElement;
      upgraderPrice = +targetContainer.getAttribute("price");
      console.log(targetContainer.classList.contains("survey-upgrader1"));
      if (totalMoney >= upgraderPrice) {
        totalMoney -= upgraderPrice;
        totalMoneyDisplay.innerHTML = totalMoney;
        totalMoneySliderDisplay.innerHTML = totalMoney;
        upgradesEffects(targetContainer);
        targetContainer.remove();
      }
    });
  });
};

export default upgradesFunction;
