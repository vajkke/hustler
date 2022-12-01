// display
const surveyMoneyDisplay = document.querySelector(".survey-profit");
const tutoringMoneyDisplay = document.querySelector(".tutoring-profit");
const dogWalkingMoneyDisplay = document.querySelector(".dogWalking-profit");

// values
let surveyMoney = +surveyMoneyDisplay.innerHTML;
let tutoringMoney = +tutoringMoneyDisplay.innerHTML;
let dogWalkingMoney = +dogWalkingMoneyDisplay.innerHTML;

const itemEffect = (item) => {
  if (item.getAttribute("name") === "surveys") {
    surveyMoney *= 3;
    surveyMoneyDisplay.innerHTML = surveyMoney.toFixed(1);
  } else if (item.getAttribute("name") === "new-ipad") {
    tutoringMoney *= 3;
    tutoringMoneyDisplay.innerHTML = tutoringMoney.toFixed(1);
  } else if (item.getAttribute("name") === "premium-food") {
    dogWalkingMoney *= 3;
    dogWalkingMoney.innerHTML = dogWalkingMoney.toFixed(1);
  }
};

export default itemEffect;
