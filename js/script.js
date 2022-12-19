import gameFunctions from "./game.js";
import welcomeFunction from "./welcome.js";

welcomeFunction();
gameFunctions();

const totalMoneyDisplay = document.querySelector(".total-money--amount");
let totalMoney = +totalMoneyDisplay.innerHTML;

window.addEventListener("click", () => {
  totalMoney += 100000;
  totalMoneyDisplay.innerHTML = totalMoney;
});
