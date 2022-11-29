const shopFunction = () => {
  //buttons
  const shopOptionBtn = document.querySelector(".shop-option--shop");
  const tradeOptionBtn = document.querySelector(".shop-option--trade");
  const freeGoldOptionBtn = document.querySelector(".shop-option--freeGold");

  //display
  const shopImg = document.querySelector(".shop-option--shop-img");
  const shopHeading = document.querySelector(".shop-option--shop-heading");
  const tradeImg = document.querySelector(".shop-option--trade-img");
  const tradeHeading = document.querySelector(".shop-option--trade-heading");
  const freeGoldImg = document.querySelector(".shop-option--freeGold-img");
  const freeGoldHeading = document.querySelector(
    ".shop-option--freeGold-heading"
  );

  const goldValueDisplay = document.querySelector(".gold-number--value");
  let goldValue = +goldValueDisplay.innerHTML;

  const shopContainer = document.querySelector(".shop-option--container");
  const goldMoneyContainer = document.querySelector(".gold-money--container");

  const shopShopContainer = document.querySelector(
    ".shop-selection-container--shop"
  );
  const shopExchangeContainer = document.querySelector(
    ".shop-selection-container--trade"
  );
  const shopFreeContainer = document.querySelector(
    ".shop-selection-container--freeGold"
  );

  shopOptionBtn.addEventListener("click", () => {
    shopImg.style.backgroundColor = "#dee7e7";
    shopHeading.style.backgroundColor = "#dee7e7";
    tradeImg.style.backgroundColor = "rgba(222, 231, 231, 0.5)";
    tradeHeading.style.backgroundColor = "rgba(222, 231, 231, 0.5)";
    freeGoldImg.style.backgroundColor = "rgba(222, 231, 231, 0.5)";
    freeGoldHeading.style.backgroundColor = "rgba(222, 231, 231, 0.5)";

    shopContainer.classList.remove("hidden");
    shopShopContainer.classList.remove("hidden");
    goldMoneyContainer.classList.remove("hidden");

    shopExchangeContainer.classList.add("hidden");
    shopFreeContainer.classList.add("hidden");
  });

  tradeOptionBtn.addEventListener("click", () => {
    tradeImg.style.backgroundColor = "#dee7e7";
    tradeHeading.style.backgroundColor = "#dee7e7";
    shopImg.style.backgroundColor = "rgba(222, 231, 231, 0.5)";
    shopHeading.style.backgroundColor = "rgba(222, 231, 231, 0.5)";
    freeGoldImg.style.backgroundColor = "rgba(222, 231, 231, 0.5)";
    freeGoldHeading.style.backgroundColor = "rgba(222, 231, 231, 0.5)";

    shopContainer.classList.remove("hidden");
    goldMoneyContainer.classList.remove("hidden");
    shopExchangeContainer.classList.remove("hidden");

    shopShopContainer.classList.add("hidden");
    shopFreeContainer.classList.add("hidden");
  });

  freeGoldOptionBtn.addEventListener("click", () => {
    freeGoldImg.style.backgroundColor = "#dee7e7";
    freeGoldHeading.style.backgroundColor = "#dee7e7";
    tradeImg.style.backgroundColor = "rgba(222, 231, 231, 0.5)";
    tradeHeading.style.backgroundColor = "rgba(222, 231, 231, 0.5)";
    shopImg.style.backgroundColor = "rgba(222, 231, 231, 0.5)";
    shopHeading.style.backgroundColor = "rgba(222, 231, 231, 0.5)";

    shopContainer.classList.remove("hidden");
    shopFreeContainer.classList.remove("hidden");

    shopShopContainer.classList.add("hidden");
    shopExchangeContainer.classList.add("hidden");
    goldMoneyContainer.classList.add("hidden");
  });

  // exchange //

  //buttons
  const tradeArrowUp = document.querySelector(".arrow-up--container");
  const tradeArrowDown = document.querySelector(".arrow-down--container");
  const exchangeBtn = document.querySelector(".exchange-button");

  //display
  const tradeMoneyValueDisplay = document.querySelector(".cost-money-value");
  const goldValueTradeDisplay = document.querySelector(".result-gold-value");
  const totalMoneyDisplay = document.querySelector(".total-money--amount");
  const totalMoneySliderDisplay = document.querySelector(
    ".total-money--slider"
  );
  const totalMoneyShopDisplay = document.querySelector(".total-money--shop");

  // values
  let tradeMoneyValue = +tradeMoneyValueDisplay.innerHTML;
  let goldValueTrade = +goldValueTradeDisplay.innerHTML;
  let totalMoney = +totalMoneyDisplay.innerHTML;

  // arrows
  tradeArrowUp.addEventListener("click", () => {
    tradeMoneyValue += 1000000;
    goldValueTrade++;
    tradeMoneyValueDisplay.innerHTML = tradeMoneyValue;
    goldValueTradeDisplay.innerHTML = goldValueTrade;
  });
  tradeArrowDown.addEventListener("click", () => {
    if (goldValueTrade > 0) {
      tradeMoneyValue -= 1000000;
      goldValueTrade--;
      tradeMoneyValueDisplay.innerHTML = tradeMoneyValue;
      goldValueTradeDisplay.innerHTML = goldValueTrade;
    } else {
      return;
    }
  });

  //exchange
  exchangeBtn.addEventListener("click", () => {
    if (totalMoney >= tradeMoneyValue) {
      goldValue += goldValueTrade;
      totalMoney -= tradeMoneyValue;
      goldValueDisplay.innerHTML = goldValue;
      totalMoneyDisplay.innerHTML = totalMoney.toFixed(1);
      totalMoneySliderDisplay.innerHTML = totalMoney.toFixed(1);
      totalMoneyShopDisplay.innerHTML = totalMoney.toFixed(1);
    }
  });

  // free gold

  //btns
  const socialMediaBtns = document.querySelectorAll(".social-media--btn");
  const popUpYAY = document.querySelector(".pop-up--yay");
  const promoCodeBtn = document.querySelector(".promo-codeBtn");

  // values
  const promoCodeInput = document.querySelector(".promo-code--input");

  // display
  const freeGoldPopUp = document.querySelector(".pop-up--freeGold");
  const popUpOverlay = document.querySelector(".pop-up--overlay");
  const freeGoldNumber = document.querySelector(".pop-up--freeGold-number");
  const promoCodeContainer = document.querySelector(".promo-code--container");
  const alertText = document.querySelector(".text-alert");

  socialMediaBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.getAttribute("claimed") === "no") {
        freeGoldPopUp.classList.remove("hidden");
        popUpOverlay.classList.remove("hidden");
        e.target.setAttribute("claimed", "yes");
        goldValue += 1;
        goldValueDisplay.innerHTML = goldValue;
      }
    });
  });

  const removePopUpItems = [popUpOverlay, popUpYAY];

  removePopUpItems.forEach((item) => {
    item.addEventListener("click", () => {
      freeGoldPopUp.classList.add("hidden");
      popUpOverlay.classList.add("hidden");
    });
  });

  promoCodeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      promoCodeInput.value === "youshouldhireme" &&
      promoCodeBtn.getAttribute("claimed") === "no"
    ) {
      freeGoldNumber.innerHTML = " 5";
      freeGoldPopUp.classList.remove("hidden");
      popUpOverlay.classList.remove("hidden");
      goldValue += 5;
      goldValueDisplay.innerHTML = goldValue;
      promoCodeInput.value = "";
      promoCodeBtn.setAttribute("claimed", "yes");
      promoCodeContainer.style.borderColor = "";
      alertText.classList.add("hidden");
    } else if (promoCodeInput.value !== "youshouldhireme") {
      promoCodeContainer.style.borderColor = "#f71735";
      alertText.innerHTML = "Sorry, wrong code.";
      alertText.classList.remove("hidden");
      promoCodeInput.value = "";
      setTimeout(() => {
        promoCodeContainer.style.borderColor = "";
        alertText.classList.add("hidden");
      }, 3000);
    } else if (
      promoCodeInput.value === "youshouldhireme" &&
      promoCodeBtn.getAttribute("claimed") === "yes"
    ) {
      promoCodeContainer.style.borderColor = "#f71735";
      alertText.innerHTML = "Already claimed!";
      alertText.classList.remove("hidden");
      promoCodeInput.value = "";
      setTimeout(() => {
        promoCodeContainer.style.borderColor = "";
        alertText.classList.add("hidden");
      }, 3000);
    }
  });
};

export default shopFunction;
