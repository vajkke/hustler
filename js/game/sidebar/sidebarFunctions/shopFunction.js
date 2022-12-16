import data from "../../../items.json" assert { type: "json" };

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
  // let goldValue = +goldValueDisplay.innerHTML;
  let goldValue = 100;

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
  let defaultGoldValue =
    +goldValueTradeDisplay.getAttribute("goldDefaultValue");
  let totalMoney = +totalMoneyDisplay.innerHTML;

  // arrows
  tradeArrowUp.addEventListener("click", () => {
    tradeMoneyValue += 1000000;
    goldValueTrade += defaultGoldValue;
    tradeMoneyValueDisplay.innerHTML = tradeMoneyValue;
    goldValueTradeDisplay.innerHTML = goldValueTrade;
  });
  tradeArrowDown.addEventListener("click", () => {
    if (goldValueTrade > defaultGoldValue) {
      tradeMoneyValue -= 1000000;
      goldValueTrade -= defaultGoldValue;
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

  // free gold //

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
  const promoCodeHeading = document.querySelector(".promo-code--heading");

  socialMediaBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.getAttribute("claimed") === "no") {
        freeGoldNumber.innerHTML = " 1";
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
      promoCodeHeading.style.color = "#f71735";
      alertText.innerHTML = "Sorry, wrong code.";
      alertText.classList.remove("hidden");
      promoCodeInput.value = "";
      setTimeout(() => {
        promoCodeContainer.style.borderColor = "";
        alertText.classList.add("hidden");
        promoCodeHeading.style.color = "";
      }, 3000);
    } else if (
      promoCodeInput.value === "youshouldhireme" &&
      promoCodeBtn.getAttribute("claimed") === "yes"
    ) {
      promoCodeContainer.style.borderColor = "#f71735";
      promoCodeHeading.style.color = "#f71735";
      alertText.innerHTML = "Already claimed!";
      alertText.classList.remove("hidden");
      promoCodeInput.value = "";
      setTimeout(() => {
        promoCodeContainer.style.borderColor = "";
        alertText.classList.add("hidden");
        promoCodeHeading.style.color = "";
      }, 3000);
    }
  });

  // SHOP SHOP //

  // btns
  const allItems = document.querySelectorAll(".item-container");
  const closeItemPopUp = document.querySelector(".close-pop-up");
  const buyItemBtn = document.querySelector(".buy-itemBtn");

  //display
  const itemImgDisplay = document.querySelector(".item-img");
  const itemHeadingDisplay = document.querySelector(".item-heading");
  const itemInfoDisplay = document.querySelector(".item-info");
  const itemPriceDisplay = document.querySelector(".item-price");
  const itemPopUp = document.querySelector(".shop-pop-up--item");
  const itemPopUpOverlay = document.querySelector(".pop-up-item--overlay");
  const inventoryPopUpItem = document.querySelector(".inventory-pop-up--item");

  // transfering items
  const avatarInventoryContainer = document.querySelector(
    ".avatar-selection-container--inventory"
  );
  const inventoryItemsContainer = document.querySelector(
    ".inventory-items-container"
  );

  // value
  const itemPriceValueDisplay = document.querySelector(".item-price");
  let itemPriceValue = +itemPriceValueDisplay.innerHTML;
  let itemCount = 0;
  let itemChoosed;

  const items = data.items; //items array

  allItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      itemChoosed = item;
      itemPopUp.classList.remove("hidden");
      itemPopUpOverlay.classList.remove("hidden");
      items.forEach((item) => {
        if (item.image === e.target.getAttribute("src")) {
          itemImgDisplay.src = item.image;
          itemHeadingDisplay.innerHTML = item.heading;
          itemInfoDisplay.innerHTML = item.info;
          itemPriceDisplay.innerHTML = item.price;
          itemPriceValue = item.price;
        }
      });
    });
  });

  const closingOverlay = [closeItemPopUp, itemPopUpOverlay];

  closingOverlay.forEach((closingItem) => {
    closingItem.addEventListener("click", () => {
      itemImgDisplay.src = "";
      itemHeadingDisplay.innerHTML = "";
      itemInfoDisplay.innerHTML = "";
      itemPriceDisplay.innerHTML = "";
      itemPopUp.classList.add("hidden");
      itemPopUpOverlay.classList.add("hidden");
      inventoryPopUpItem.classList.add("hidden");
    });
  });

  buyItemBtn.addEventListener("click", (e) => {
    if (goldValue >= itemPriceValue) {
      itemCount++;
      avatarInventoryContainer.setAttribute("itemCount", itemCount);
      inventoryItemsContainer.appendChild(itemChoosed);
      goldValue -= itemPriceValue;
      goldValueDisplay.innerHTML = goldValue;
      itemPopUpOverlay.classList.add("hidden");
      itemPopUp.classList.add("hidden");
    }
  });
};

export default shopFunction;
