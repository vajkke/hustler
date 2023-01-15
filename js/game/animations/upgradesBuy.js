// containers
const surveyUpgrader1 = document.querySelector(".survey-upgrader1");
const tutoringUpgrader1 = document.querySelector(".tutoring-upgrader1");
const dogWalkingUpgrader1 = document.querySelector(".dogWalking-upgrader1");
const lawnMowerUpgrader1 = document.querySelector(".lawnMower-upgrader1");
const babysittingUpgrader1 = document.querySelector(".babysitting-upgrader1");
const photographyUpgrader1 = document.querySelector(".photography-upgrader1");
const trainerUpgrader1 = document.querySelector(".trainer-upgrader1");
const cryptoUpgrader1 = document.querySelector(".crypto-upgrader1");
const speedUpgrader1 = document.querySelector(".speed-upgrader1");
const profitUpgrader1 = document.querySelector(".profit-upgrader1");
const surveyUpgrader2 = document.querySelector(".survey-upgrader2");
const tutoringUpgrader2 = document.querySelector(".tutoring-upgrader2");
const dogWalkingUpgrader2 = document.querySelector(".dogWalking-upgrader2");
const lawnMowerUpgrader2 = document.querySelector(".lawnMower-upgrader2");
const babysittingUpgrader2 = document.querySelector(".babysitting-upgrader2");
const photographyUpgrader2 = document.querySelector(".photography-upgrader2");
const trainerUpgrader2 = document.querySelector(".trainer-upgrader2");
const cryptoUpgrader2 = document.querySelector(".crypto-upgrader2");
const speedUpgrader2 = document.querySelector(".speed-upgrader2");
const profitUpgrader2 = document.querySelector(".profit-upgrader2");

// buttons

const surveyUpgrader1Button = document.querySelector(".survey-upgrader1-buy");
const surveyUpgrader2Button = document.querySelector(".survey-upgrader2-buy");
const tutoringUpgrader1Button = document.querySelector(
  ".tutoring-upgrader1-buy"
);
const tutoringUpgrader2Button = document.querySelector(
  ".tutoring-upgrader2-buy"
);
const dogWalkingUpgrader1Button = document.querySelector(
  ".dogWalking-upgrader1-buy"
);
const dogWalkingUpgrader2Button = document.querySelector(
  ".dogWalking-upgrader2-buy"
);
const lawnMowerUpgrader1Button = document.querySelector(
  ".lawnMower-upgrader1-buy"
);
const lawnMowerUpgrader2Button = document.querySelector(
  ".lawnMower-upgrader2-buy"
);
const babysittingUpgrader1Button = document.querySelector(
  ".babysitting-upgrader1-buy"
);
const babysittingUpgrader2Button = document.querySelector(
  ".babysitting-upgrader2-buy"
);
const photographyUpgrader1Button = document.querySelector(
  ".photography-upgrader1-buy"
);
const photographyUpgrader2Button = document.querySelector(
  ".photography-upgrader2-buy"
);
const trainerUpgrader1Button = document.querySelector(".trainer-upgrader1-buy");
const trainerUpgrader2Button = document.querySelector(".trainer-upgrader2-buy");
const cryptoUpgrader1Button = document.querySelector(".crypto-upgrader1-buy");
const cryptoUpgrader2Button = document.querySelector(".crypto-upgrader2-buy");

const speedUpgrader1Button = document.querySelector(".speed-upgrader1-buy");
const speedUpgrader2Button = document.querySelector(".speed-upgrader2-buy");
const profitUpgrader1Button = document.querySelector(".profit-upgrader1-buy");
const profitUpgrader2Button = document.querySelector(".profit-upgrader2-buy");

// money
const totalMoneyDisplay = document.querySelector(".total-money--amount");
let totalMoney = +totalMoneyDisplay.innerHTML;

const upgradersBuy = () => {
  const totalMoneyFunction = () => {
    totalMoney = +totalMoneyDisplay.innerHTML;
    canOrCantBuy();
  };
  setInterval(totalMoneyFunction, 100);

  const buttonEffect = (btn) => {
    btn.addEventListener("click", () => {
      btn.style.cssText = `background-color: #dee7e7; color: #8c7aa9; transition:300ms`;
    });
  };

  const buttonStyle = (btn) => {
    btn.innerHTML = "Buy";
    btn.style.cssText = `background-color: #8c7aa9; color: #dee7e7`;
  };

  const canOrCantBuy = () => {
    if (totalMoney > +surveyUpgrader1.getAttribute("price")) {
      buttonStyle(surveyUpgrader1Button);
      buttonEffect(surveyUpgrader1Button);
    }
    if (totalMoney > +tutoringUpgrader1.getAttribute("price")) {
      buttonStyle(tutoringUpgrader1Button);
      buttonEffect(tutoringUpgrader1Button);
    }
    if (totalMoney > +dogWalkingUpgrader1.getAttribute("price")) {
      buttonStyle(dogWalkingUpgrader1Button);
      buttonEffect(dogWalkingUpgrader1Button);
    }
    if (totalMoney > +lawnMowerUpgrader1.getAttribute("price")) {
      buttonStyle(lawnMowerUpgrader1Button);
      buttonEffect(lawnMowerUpgrader1Button);
    }
    if (totalMoney > +babysittingUpgrader1.getAttribute("price")) {
      buttonStyle(babysittingUpgrader1Button);
      buttonEffect(babysittingUpgrader1Button);
    }
    if (totalMoney > +photographyUpgrader1.getAttribute("price")) {
      buttonStyle(photographyUpgrader1Button);
      buttonEffect(photographyUpgrader1Button);
    }
    if (totalMoney > +trainerUpgrader1.getAttribute("price")) {
      buttonStyle(trainerUpgrader1Button);
      buttonEffect(trainerUpgrader1Button);
    }
    if (totalMoney > +cryptoUpgrader1.getAttribute("price")) {
      buttonStyle(cryptoUpgrader1Button);
      buttonEffect(cryptoUpgrader1Button);
    }
    if (totalMoney > +speedUpgrader1.getAttribute("price")) {
      buttonStyle(speedUpgrader1Button);
      buttonEffect(speedUpgrader1Button);
    }
    if (totalMoney > +profitUpgrader1.getAttribute("price")) {
      buttonStyle(profitUpgrader1Button);
      buttonEffect(profitUpgrader1Button);
    }

    //

    if (totalMoney > +surveyUpgrader2.getAttribute("price")) {
      buttonStyle(surveyUpgrader2Button);
      buttonEffect(surveyUpgrader2Button);
    }
    if (totalMoney > +tutoringUpgrader2.getAttribute("price")) {
      buttonStyle(tutoringUpgrader2Button);
      buttonEffect(tutoringUpgrader2Button);
    }
    if (totalMoney > +dogWalkingUpgrader2.getAttribute("price")) {
      buttonStyle(dogWalkingUpgrader2Button);
      buttonEffect(dogWalkingUpgrader2Button);
    }
    if (totalMoney > +lawnMowerUpgrader2.getAttribute("price")) {
      buttonStyle(lawnMowerUpgrader2Button);
      buttonEffect(lawnMowerUpgrader2Button);
    }
    if (totalMoney > +babysittingUpgrader2.getAttribute("price")) {
      buttonStyle(babysittingUpgrader2Button);
      buttonEffect(babysittingUpgrader2Button);
    }
    if (totalMoney > +photographyUpgrader2.getAttribute("price")) {
      buttonStyle(photographyUpgrader2Button);
      buttonEffect(photographyUpgrader2Button);
    }
    if (totalMoney > +trainerUpgrader2.getAttribute("price")) {
      buttonStyle(trainerUpgrader2Button);
      buttonEffect(trainerUpgrader2Button);
    }
    if (totalMoney > +cryptoUpgrader2.getAttribute("price")) {
      buttonStyle(cryptoUpgrader2Button);
      buttonEffect(cryptoUpgrader2Button);
    }
    if (totalMoney > +speedUpgrader2.getAttribute("price")) {
      buttonStyle(speedUpgrader2Button);
      buttonEffect(speedUpgrader2Button);
    }
    if (totalMoney > +profitUpgrader2.getAttribute("price")) {
      buttonStyle(profitUpgrader2Button);
      buttonEffect(profitUpgrader2Button);
    }
  };
};

export default upgradersBuy;
