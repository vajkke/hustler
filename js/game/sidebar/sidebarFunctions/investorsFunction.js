import gameReset from "../../gamereset/gameReset.js";
import investorsEffect from "./investorsEffect.js";

const investorsFunction = () => {
  //buttons
  const claimProfit = document.querySelector(".claim-profit");

  // display
  const totalMoneyDisplay = document.querySelector(".total-money--amount");
  const totalMoneySliderDisplay = document.querySelector(
    ".total-money--slider"
  );

  const currentProfitIncreaseDisplay = document.querySelector(
    ".profit-increase-value"
  );
  const totalProfitIncreaseDisplay = document.querySelector(
    ".total-profit-increase-value"
  );

  // values
  let totalMoney = +totalMoneyDisplay.innerHTML;
  let currentProfit = +currentProfitIncreaseDisplay.innerHTML;
  let totalProfitIncrease = +totalProfitIncreaseDisplay.innerHTML;

  let moneyStamp = 1000000;
  let defaultCurrentProfit = 0.1;

  const currentProfitFunction = () => {
    if (totalMoney >= moneyStamp) {
      currentProfit += defaultCurrentProfit;
      moneyStamp += 1000000;
      currentProfitIncreaseDisplay.innerHTML = currentProfit.toFixed(1);
    }
  };

  setInterval(
    currentProfitFunction,
    (currentProfitIncreaseDisplay.innerHTML = currentProfit.toFixed(1)),
    100
  );

  claimProfit.addEventListener("click", () => {
    if (currentProfit > 1) {
      totalProfitIncrease = currentProfit;
      totalProfitIncreaseDisplay.innerHTML = totalProfitIncrease.toFixed(1);
      currentProfit = 1;
      currentProfitIncreaseDisplay.innerHTML = currentProfit.toFixed(1);
      gameReset();
      investorsEffect(totalProfitIncrease);
    }
  });
};

export default investorsFunction;
