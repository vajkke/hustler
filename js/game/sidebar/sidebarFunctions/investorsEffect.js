// MONEY UPGRADE
const surveyMoneyDisplay = document.querySelector(".survey-profit");
const tutoringMoneyDisplay = document.querySelector(".tutoring-profit");
const dogWalkingMoneyDisplay = document.querySelector(".dogWalking-profit");
const lawnMowerMoneyDisplay = document.querySelector(".lawnMower-profit");
const babysittingMoneyDisplay = document.querySelector(".babysitting-profit");
const photographyMoneyDisplay = document.querySelector(".photography-profit");
const trainerMoneyDisplay = document.querySelector(".trainer-profit");
const cryptoMoneyDisplay = document.querySelector(".crypto-profit");

let surveyMoney = +surveyMoneyDisplay.innerHTML;
let tutoringMoney = +tutoringMoneyDisplay.innerHTML;
let dogWalkingMoney = +dogWalkingMoneyDisplay.innerHTML;
let lawnMowerMoney = +lawnMowerMoneyDisplay.innerHTML;
let babysittingMoney = +babysittingMoneyDisplay.innerHTML;
let photographyMoney = +photographyMoneyDisplay.innerHTML;
let trainerMoney = +trainerMoneyDisplay.innerHTML;
let cryptoMoney = +cryptoMoneyDisplay.innerHTML;

const allMoneyValues = [
  surveyMoney,
  tutoringMoney,
  dogWalkingMoney,
  lawnMowerMoney,
  babysittingMoney,
  photographyMoney,
  trainerMoney,
  cryptoMoney,
];

let investorsProfitValue;

const investorsEffect = (profitValue) => {
  // profit increase
  investorsProfitValue = profitValue;

  surveyMoney = +surveyMoneyDisplay.innerHTML;
  tutoringMoney = +tutoringMoneyDisplay.innerHTML;
  dogWalkingMoney = +dogWalkingMoneyDisplay.innerHTML;
  lawnMowerMoney = +lawnMowerMoneyDisplay.innerHTML;
  babysittingMoney = +babysittingMoneyDisplay.innerHTML;
  photographyMoney = +photographyMoneyDisplay.innerHTML;
  trainerMoney = +trainerMoneyDisplay.innerHTML;
  cryptoMoney = +cryptoMoneyDisplay.innerHTML;

  const allMoneyValues = [
    surveyMoney,
    tutoringMoney,
    dogWalkingMoney,
    lawnMowerMoney,
    babysittingMoney,
    photographyMoney,
    trainerMoney,
    cryptoMoney,
  ];

  const investorsEffectArray = allMoneyValues.map(
    (moneyValue) => (moneyValue += moneyValue * investorsProfitValue)
  );

  surveyMoneyDisplay.innerHTML = investorsEffectArray[0].toFixed(2);
  tutoringMoneyDisplay.innerHTML = investorsEffectArray[1].toFixed(1);
  dogWalkingMoneyDisplay.innerHTML = investorsEffectArray[2].toFixed(1);
  lawnMowerMoneyDisplay.innerHTML = investorsEffectArray[3].toFixed(1);
  babysittingMoneyDisplay.innerHTML = investorsEffectArray[4].toFixed(1);
  photographyMoneyDisplay.innerHTML = investorsEffectArray[5].toFixed(1);
  trainerMoneyDisplay.innerHTML = investorsEffectArray[6].toFixed(1);
  cryptoMoneyDisplay.innerHTML = investorsEffectArray[7].toFixed(1);
};

export default investorsEffect;
