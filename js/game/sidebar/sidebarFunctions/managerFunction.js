import managerEffects from "./managerEffects.js";

const managerFunction = () => {
  const totalMoneyDisplay = document.querySelector(".total-money--amount");
  const totalMoneySliderDisplay = document.querySelector(
    ".total-money--slider"
  );

  const managerBuyBtns = document.querySelectorAll(".manager-buy");

  let managerPrice;
  let totalMoney = +totalMoneyDisplay.innerHTML;

  managerBuyBtns.forEach((managerBtn) => {
    managerBtn.addEventListener("click", (e) => {
      let managerContainer = e.target.parentElement;
      managerPrice = +managerContainer.getAttribute("price");

      if (totalMoney >= managerPrice) {
        totalMoneyDisplay.innerHTML = totalMoney;
        totalMoneySliderDisplay.innerHTML = totalMoney;
        managerEffects(managerContainer);
        totalMoney -= managerPrice;
        totalMoneyDisplay.innerHTML = totalMoney;
        totalMoneySliderDisplay.innerHTML = totalMoney;
        managerContainer.classList.add("hidden");
      }
    });
  });
};

export default managerFunction;
