// containers
const surveyManager = document.querySelector(".survey-manager-container");
const tutoringManager = document.querySelector(".tutoring-manager-container");
const dogWalkingManager = document.querySelector(
  ".dogWalking-manager-container"
);
const lawnMowerManager = document.querySelector(".lawnMower-manager-container");
const babysittingManager = document.querySelector(
  ".babysitting-manager-container"
);
const photographyManager = document.querySelector(
  ".photography-manager-container"
);

const trainerManager = document.querySelector(".trainer-manager-container");
const cryptoManager = document.querySelector(".crypto-manager-container");

// buttons
const surveyManagerBtn = document.querySelector(".survey-manager-buy");
const tutoringManagerBtn = document.querySelector(".tutoring-manager-buy");
const dogWalkingManagerBtn = document.querySelector(".dogWalking-manager-buy");
const lawnMowerManagerBtn = document.querySelector(".lawnMower-manager-buy");
const babysittingManagerBtn = document.querySelector(
  ".babysitting-manager-buy"
);
const photographyManagerBtn = document.querySelector(
  ".photography-manager-buy"
);

const trainerManagerBtn = document.querySelector(".trainer-manager-buy");
const cryptoManagerBtn = document.querySelector(".crypto-manager-buy");

// money
const totalMoneyDisplay = document.querySelector(".total-money--amount");
let totalMoney = +totalMoneyDisplay.innerHTML;

const managersBuy = () => {
  const totalMoneyFunction = () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    canOrCantBuy();
  };
  setInterval(totalMoneyFunction, 100);

  const buttonEffect = (btn) => {
    btn.addEventListener("click", () => {
      btn.style.cssText = `background: transparent; color: #fcab10; transition:300ms`;
    });
  };

  const buttonStyle = (btn) => {
    btn.style.cssText = `background-color: #fcab10; border: 3px solid #fcab10; text-decoration: none;`;
  };

  const canOrCantBuy = () => {
    if (totalMoney > +surveyManager.getAttribute("price")) {
      buttonStyle(surveyManagerBtn);
      buttonEffect(surveyManagerBtn);
    }
    if (totalMoney > +tutoringManager.getAttribute("price")) {
      buttonStyle(tutoringManagerBtn);
      buttonEffect(tutoringManagerBtn);
    }
    if (totalMoney > +dogWalkingManager.getAttribute("price")) {
      buttonStyle(dogWalkingManagerBtn);
      buttonEffect(dogWalkingManagerBtn);
    }
    if (totalMoney > +lawnMowerManager.getAttribute("price")) {
      buttonStyle(lawnMowerManagerBtn);
      buttonEffect(lawnMowerManagerBtn);
    }
    if (totalMoney > +babysittingManager.getAttribute("price")) {
      buttonStyle(babysittingManagerBtn);
      buttonEffect(babysittingManagerBtn);
    }
    if (totalMoney > +photographyManager.getAttribute("price")) {
      buttonStyle(photographyManagerBtn);
      buttonEffect(photographyManagerBtn);
    }
    if (totalMoney > +trainerManager.getAttribute("price")) {
      buttonStyle(trainerManagerBtn);
      buttonEffect(trainerManagerBtn);
    }
    if (totalMoney > +cryptoManager.getAttribute("price")) {
      buttonStyle(cryptoManagerBtn);
      buttonEffect(cryptoManagerBtn);
    }
  };
};

export default managersBuy;
