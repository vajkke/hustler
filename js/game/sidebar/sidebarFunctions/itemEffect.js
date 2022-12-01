// display
const surveyMoneyDisplay = document.querySelector(".survey-profit");
let surveyMoney = +surveyMoneyDisplay.innerHTML;

const itemEffect = (item) => {
  if (item.getAttribute("name") === "surveys") {
    surveyMoney *= 3;
    surveyMoneyDisplay.innerHTML = surveyMoney.toFixed(1);
  }
};

export default itemEffect;
