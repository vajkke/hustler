import shopOpenFunction from "../sidebarDisplay/shop.js";
import data from "../../../items.json" assert { type: "json" };

const avatarFunction = () => {
  // buttons
  const swagOption = document.querySelector(".swag");
  const inventoryOption = document.querySelector(".inventory");

  // display
  const noItemsContainer = document.querySelector(".no-items--container");
  const swagImg = document.querySelector(".swag-option-img");
  const swagHeading = document.querySelector(".swag-option--heading");
  const inventoryImg = document.querySelector(".inventory-option-img");
  const inventoryHeading = document.querySelector(".inventory-option--heading");
  const avatarSwagContainer = document.querySelector(
    ".avatar-selection-container--swag"
  );
  const avatarInventoryContainer = document.querySelector(
    ".avatar-selection-container--inventory"
  );

  // SWAG display
  const genderSelect = document.querySelector(".gender-select");
  const genderImg = document.querySelector(".gender");
  const genderContainer = document.querySelector(
    ".avatar-selection--container"
  );
  const avatarImg = document.querySelector(".avatar-seletion");
  const sidebarAvatarImg = document.querySelector(".avatar-img");

  let gender = 0; // 0 - man ; 1 - woman

  // CHANGNING OPTION
  swagOption.addEventListener("click", () => {
    inventoryImg.style.backgroundColor = "rgba(222, 231, 231, 0.5)";
    inventoryHeading.style.backgroundColor = "rgba(222, 231, 231, 0.5)";
    swagImg.style.backgroundColor = "#dee7e7";
    swagHeading.style.backgroundColor = "#dee7e7";

    avatarInventoryContainer.classList.add("hidden");
    avatarSwagContainer.classList.remove("hidden");
  });

  inventoryOption.addEventListener("click", () => {
    inventoryImg.style.backgroundColor = "#dee7e7";
    inventoryHeading.style.backgroundColor = "#dee7e7";
    swagImg.style.backgroundColor = "rgba(222, 231, 231, 0.5)";
    swagHeading.style.backgroundColor = "rgba(222, 231, 231, 0.5)";

    avatarSwagContainer.classList.add("hidden");
    avatarInventoryContainer.classList.remove("hidden");
  });

  // GENDER
  genderSelect.addEventListener("click", () => {
    if (gender === 0) {
      genderImg.src = "../../../../img/avatars/female-sign.svg";
      avatarImg.src = "../../../../img/avatars/avatarWoman-select.svg";
      sidebarAvatarImg.src = "../../../../img/avatars/avatarWoman.svg";
      genderContainer.style.borderColor = "#FFCD33";
      genderSelect.style.borderColor = "#FFCD33";
      gender = 1;
    } else if (gender === 1) {
      genderImg.src = "../../../../img/avatars/male-sign.svg";
      avatarImg.src = "../../../../img/avatars/avatarMan-select.svg";
      sidebarAvatarImg.src = "../../../../img/avatars/avatarMan.svg";
      genderContainer.style.borderColor = "";
      genderSelect.style.borderColor = "";
      gender = 0;
    }
  });

  // shortcut
  const addItems = document.querySelectorAll(".item-add");

  addItems.forEach((addItem) => {
    addItem.addEventListener("click", () => {
      inventoryImg.style.backgroundColor = "#dee7e7";
      inventoryHeading.style.backgroundColor = "#dee7e7";
      swagImg.style.backgroundColor = "rgba(222, 231, 231, 0.5)";
      swagHeading.style.backgroundColor = "rgba(222, 231, 231, 0.5)";

      avatarSwagContainer.classList.add("hidden");
      avatarInventoryContainer.classList.remove("hidden");
    });
  });

  // INVENTORY //

  // Inventory display
  const inventoryShopBtn = document.querySelector(".no-items--buy");
  const inventoryPopUpItem = document.querySelector(".inventory-pop-up--item");
  const inventoryItemClosePopUp = document.querySelector(
    ".inventory-close-pop-up"
  );

  // ITEM display
  const allItems = document.querySelectorAll(".item-container");
  const itemPopUpOverlay = document.querySelector(".pop-up-item--overlay");
  const inventoryItemImgDisplay = document.querySelector(".inventory-item-img");
  const inventoryItemHeadingDisplay = document.querySelector(
    ".inventory-item-heading"
  );
  const inventoryItemInfoDisplay = document.querySelector(
    ".inventory-item-info"
  );

  // show inventory based on items value
  if (avatarInventoryContainer.getAttribute("itemCount") === "0") {
    inventoryShopBtn.addEventListener("click", () => {
      shopOpenFunction();
    });
  } else if (avatarInventoryContainer.getAttribute("itemCount") !== "0") {
    noItemsContainer.classList.add("hidden");
  }

  const items = data.items; //items array from json

  let itemToEquip;

  allItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      itemToEquip = item;
      inventoryPopUpItem.classList.remove("hidden");
      itemPopUpOverlay.classList.remove("hidden");
      items.forEach((item) => {
        if (item.image === e.target.getAttribute("src")) {
          inventoryItemImgDisplay.src = item.image;
          inventoryItemHeadingDisplay.innerHTML = item.heading;
          inventoryItemInfoDisplay.innerHTML = item.info;
        }
      });
    });
  });

  // closing popup
  inventoryItemClosePopUp.addEventListener("click", () => {
    inventoryItemImgDisplay.src = "";
    inventoryItemHeadingDisplay.innerHTML = "";
    inventoryItemInfoDisplay.innerHTML = "";
    inventoryPopUpItem.classList.add("hidden");
    itemPopUpOverlay.classList.add("hidden");
  });

  // equiping items
  const equipBtn = document.querySelector(".use-itemBtn");

  const equipedItemsTopDisplay = document.querySelector(".item-used-top");
  const equipedItemsBottomDisplay = document.querySelector(".item-used-bottom");
  const equipedItem1 = document.querySelector(".item-used--1");
  const equipedItem2 = document.querySelector(".item-used--2");
  const equipedItem3 = document.querySelector(".item-used--3");
  const equipedItem4 = document.querySelector(".item-used--4");

  equipBtn.addEventListener("click", () => {
    if (equipedItem1.getAttribute("equiped") === "no") {
      equipedItem1.innerHTML = itemToEquip.innerHTML;
      equipedItem1.setAttribute("equiped", "yes");
      if (itemToEquip.classList.contains("item-container--average")) {
        equipedItem1.classList.add("item-container--average");
      } else if (itemToEquip.classList.contains("item-container--rare")) {
        equipedItem1.classList.add("item-container--rare");
      } else if (itemToEquip.classList.contains("item-container--gold")) {
        equipedItem1.classList.add("item-container--gold");
      }
    } else if (
      equipedItem1.getAttribute("equiped") === "yes" &&
      equipedItem2.getAttribute("equiped") === "no"
    ) {
      equipedItem2.innerHTML = itemToEquip.innerHTML;
      equipedItem2.setAttribute("equiped", "yes");
      if (itemToEquip.classList.contains("item-container--average")) {
        equipedItem2.classList.add("item-container--average");
      } else if (itemToEquip.classList.contains("item-container--rare")) {
        equipedItem2.classList.add("item-container--rare");
      } else if (itemToEquip.classList.contains("item-container--gold")) {
        equipedItem2.classList.add("item-container--gold");
      }
    } else if (
      equipedItem1.getAttribute("equiped") === "yes" &&
      equipedItem2.getAttribute("equiped") === "yes" &&
      equipedItem3.getAttribute("equiped") === "no"
    ) {
      equipedItem3.innerHTML = itemToEquip.innerHTML;
      equipedItem3.setAttribute("equiped", "yes");
      if (itemToEquip.classList.contains("item-container--average")) {
        equipedItem3.classList.add("item-container--average");
      } else if (itemToEquip.classList.contains("item-container--rare")) {
        equipedItem3.classList.add("item-container--rare");
      } else if (itemToEquip.classList.contains("item-container--gold")) {
        equipedItem3.classList.add("item-container--gold");
      }
    } else if (
      equipedItem1.getAttribute("equiped") === "yes" &&
      equipedItem2.getAttribute("equiped") === "yes" &&
      equipedItem3.getAttribute("equiped") === "yes" &&
      equipedItem4.getAttribute("equiped") === "no"
    ) {
      equipedItem4.innerHTML = itemToEquip.innerHTML;
      equipedItem4.setAttribute("equiped", "yes");
      if (itemToEquip.classList.contains("item-container--average")) {
        equipedItem4.classList.add("item-container--average");
      } else if (itemToEquip.classList.contains("item-container--rare")) {
        equipedItem4.classList.add("item-container--rare");
      } else if (itemToEquip.classList.contains("item-container--gold")) {
        equipedItem4.classList.add("item-container--gold");
      }
    }
  });
};

export default avatarFunction;
