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
  const goldValueDisplay = document.querySelector(".result-gold-value");
  const totalMoneyDisplay = document.querySelector(".total-money--amount");

  // values
  let tradeMoneyValue = +tradeMoneyValueDisplay.innerHTML;
  let goldValue = +goldValueDisplay.innerHTML;
  let totalMoney = +totalMoneyDisplay.innerHTML;

  // arrows
  tradeArrowUp.addEventListener("click", () => {
    tradeMoneyValue += 1000000;
    goldValue++;
    tradeMoneyValueDisplay.innerHTML = tradeMoneyValue;
    goldValueDisplay.innerHTML = goldValue;
  });
  tradeArrowDown.addEventListener("click", () => {
    if (goldValue > 0) {
      tradeMoneyValue -= 1000000;
      goldValue--;
      tradeMoneyValueDisplay.innerHTML = tradeMoneyValue;
      goldValueDisplay.innerHTML = goldValue;
    } else {
      return;
    }
  });

  //exchange
  exchangeBtn.addEventListener("click", () => {
    if (totalMoney >= tradeMoneyValue) {
      console.log("imas dovoljno kesa");
    }
  });
};

export default shopFunction;
