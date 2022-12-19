import gameReset from "../../gamereset/gameReset.js";
import investorsEffect from "./investorsEffect.js";
import investorsAnimation from "../../animations/investorsAnimation.js";

const investorsFunction = () => {
  //buttons
  const claimProfit = document.querySelector(".claim-profit");

  // display
  const totalMoneyDisplay = document.querySelector(".total-money--amount");
  const totalMoneySliderDisplay = document.querySelector(
    ".total-money--slider"
  );

  const moneyStampDisplay = document.querySelector(".profit-claim-container");

  const currentProfitIncreaseDisplay = document.querySelector(
    ".profit-increase-value"
  );
  const totalProfitIncreaseDisplay = document.querySelector(
    ".total-profit-increase-value"
  );

  // values
  let totalMoney = +totalMoneyDisplay.innerHTML;
  let currentProfit = +currentProfitIncreaseDisplay.getAttribute("profit");
  let totalProfitIncrease = +totalProfitIncreaseDisplay.innerHTML;

  let moneyStamp = +moneyStampDisplay.getAttribute("moneystamp");
  let defaultMoneyStamp = 1000000;
  let defaultCurrentProfit = 0.1;

  const currentProfitFunction = () => {
    if (totalMoney >= moneyStamp) {
      currentProfit += defaultCurrentProfit;
      moneyStamp += defaultMoneyStamp;
      currentProfitIncreaseDisplay.innerHTML = currentProfit.toFixed(1);
    }
  };

  setInterval(currentProfitFunction, 10);

  claimProfit.addEventListener("click", () => {
    if (currentProfit > 1) {
      totalProfitIncrease += currentProfit;
      totalProfitIncreaseDisplay.innerHTML =
        totalProfitIncrease < 100
          ? totalProfitIncrease.toFixed(1)
          : totalProfitIncrease.toFixed(0);
      investorsAnimation(currentProfit);
      currentProfit = +currentProfitIncreaseDisplay.getAttribute("profit");
      currentProfitIncreaseDisplay.innerHTML = currentProfit.toFixed(1);
      gameReset();
      investorsEffect(totalProfitIncrease / 100);
    }
  });
};

export default investorsFunction;
