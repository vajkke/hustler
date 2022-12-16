import shopOpenFunction from "../sidebarDisplay/shop.js";
import itemEffect from "./itemEffect.js";
import data from "../../../items.json" assert { type: "json" };
import disableItemsEffect from "../../gamereset/disableItemsEffects.js";

const avatarFunction = () => {
  const items = data.items; //items array from json

  // swag equiped items
  const equipedItemPopUp = document.querySelector(".equiped-pop-up--item");
  const equipedOverlayPopUp = document.querySelector(
    ".pop-up-equiped--overlay"
  );

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
    equipedItemPopUp.classList.add("hidden");
    equipedOverlayPopUp.classList.add("hidden");
  });

  inventoryOption.addEventListener("click", () => {
    inventoryImg.style.backgroundColor = "#dee7e7";
    inventoryHeading.style.backgroundColor = "#dee7e7";
    swagImg.style.backgroundColor = "rgba(222, 231, 231, 0.5)";
    swagHeading.style.backgroundColor = "rgba(222, 231, 231, 0.5)";

    avatarSwagContainer.classList.add("hidden");
    avatarInventoryContainer.classList.remove("hidden");
    equipedItemPopUp.classList.add("hidden");
    equipedOverlayPopUp.classList.add("hidden");
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
      equipedItemPopUp.classList.add("hidden");
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

  let itemToEquip;

  const equipedHeading = document.querySelector(".equipedHeading");
  const equipedItem1 = document.querySelector(".item-used--1");
  const equipedItem2 = document.querySelector(".item-used--2");
  const equipedItem3 = document.querySelector(".item-used--3");
  const equipedItem4 = document.querySelector(".item-used--4");

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
          if (itemToEquip.getAttribute("equiped") === "no") {
            equipBtn.classList.remove("hidden");
            equipedHeading.classList.add("hidden");
          } else if (
            itemToEquip.getAttribute("name") !==
              equipedItem1.getAttribute("name") &&
            itemToEquip.getAttribute("name") !==
              equipedItem2.getAttribute("name") &&
            itemToEquip.getAttribute("name") !==
              equipedItem3.getAttribute("name") &&
            itemToEquip.getAttribute("name") !==
              equipedItem4.getAttribute("name") &&
            itemToEquip.getAttribute("equiped") === "yes"
          ) {
            itemToEquip.setAttribute("equiped", "no");
            equipBtn.classList.remove("hidden");
            equipedHeading.classList.add("hidden");
          } else if (itemToEquip.getAttribute("equiped") === "yes") {
            equipBtn.classList.add("hidden");
            equipedHeading.classList.remove("hidden");
          }
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
  let equipItemName;

  const equipedItemClass = (equipedItem) => {
    if (itemToEquip.classList.contains("item-container--average")) {
      equipedItem.classList.add("item-container--average");
    } else if (itemToEquip.classList.contains("item-container--rare")) {
      equipedItem.classList.add("item-container--rare");
    } else if (itemToEquip.classList.contains("item-container--gold")) {
      equipedItem.classList.add("item-container--gold");
    }
  };

  const unequipedItemClass = (unequipedItem) => {
    if (unequipedItem.classList.contains("item-container--average")) {
      unequipedItem.classList.remove("item-container--average");
    } else if (unequipedItem.classList.contains("item-container--rare")) {
      unequipedItem.classList.remove("item-container--rare");
    } else if (unequipedItem.classList.contains("item-container--gold")) {
      unequipedItem.classList.remove("item-container--gold");
    }
  };

  const equiped = () => {
    itemToEquip.setAttribute("equiped", "yes");
    equipBtn.classList.add("hidden");
    equipedHeading.classList.remove("hidden");
  };

  const unequiped = () => {
    itemToEquip.setAttribute("equiped", "no");
    equipBtn.classList.remove("hidden");
    equipedHeading.classList.add("hidden");
  };

  equipBtn.addEventListener("click", () => {
    if (
      equipedItem1.getAttribute("filled") === "no" &&
      itemToEquip.getAttribute("equiped") === "no"
    ) {
      equiped();
      equipedItem1.innerHTML = itemToEquip.innerHTML;
      equipedItem1.setAttribute("filled", "yes");
      equipedItemClass(equipedItem1);
      equipItemName = itemToEquip.getAttribute("name");
      equipedItem1.setAttribute("name", equipItemName);
      itemEffect(equipedItem1);
    } else if (
      equipedItem1.getAttribute("filled") === "yes" &&
      equipedItem2.getAttribute("filled") === "no" &&
      itemToEquip.getAttribute("equiped") === "no"
    ) {
      equiped();
      equipedItem2.innerHTML = itemToEquip.innerHTML;
      equipedItem2.setAttribute("filled", "yes");
      equipedItemClass(equipedItem2);
      equipItemName = itemToEquip.getAttribute("name");
      equipedItem2.setAttribute("name", equipItemName);
      itemEffect(equipedItem2);
    } else if (
      equipedItem1.getAttribute("filled") === "yes" &&
      equipedItem2.getAttribute("filled") === "yes" &&
      equipedItem3.getAttribute("filled") === "no" &&
      itemToEquip.getAttribute("equiped") === "no"
    ) {
      equiped();
      equipedItem3.innerHTML = itemToEquip.innerHTML;
      equipedItem3.setAttribute("filled", "yes");
      equipedItemClass(equipedItem3);
      equipItemName = itemToEquip.getAttribute("name");
      equipedItem3.setAttribute("name", equipItemName);
      itemEffect(equipedItem3);
    } else if (
      equipedItem1.getAttribute("filled") === "yes" &&
      equipedItem2.getAttribute("filled") === "yes" &&
      equipedItem3.getAttribute("filled") === "yes" &&
      equipedItem4.getAttribute("filled") === "no" &&
      itemToEquip.getAttribute("equiped") === "no"
    ) {
      equiped();
      equipedItem4.innerHTML = itemToEquip.innerHTML;
      equipedItem4.setAttribute("filled", "yes");
      equipedItemClass(equipedItem4);
      equipItemName = itemToEquip.getAttribute("name");
      equipedItem4.setAttribute("name", equipItemName);
      itemEffect(equipedItem4);
    }
  });

  // SWAG ITEMS
  const equipedItemImg = document.querySelector(".equiped-item-img");
  const equipedItemHeading = document.querySelector(".equiped-item-heading");
  const equipedItemInfo = document.querySelector(".equiped-item-info");
  const unequipBtn = document.querySelector(".unequip-itemBtn");
  const closeEquipedPopUp = document.querySelector(".equiped-close-pop-up");

  const removePopUp = [equipedOverlayPopUp, closeEquipedPopUp];

  removePopUp.forEach((item) => {
    item.addEventListener("click", () => {
      equipedItemPopUp.classList.add("hidden");
      equipedOverlayPopUp.classList.add("hidden");
    });
  });

  const equipedItems = document.querySelectorAll(".item-used--container");

  equipedItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      itemToEquip = item;
      equipedItemPopUp.classList.remove("hidden");
      equipedOverlayPopUp.classList.remove("hidden");
      items.forEach((item) => {
        if (item.image === e.target.getAttribute("src")) {
          equipedItemImg.src = item.image;
          equipedItemHeading.innerHTML = item.heading;
          equipedItemInfo.innerHTML = item.info;
        }
      });
    });
  });

  unequipBtn.addEventListener("click", () => {
    disableItemsEffect(itemToEquip);
    itemToEquip.setAttribute("filled", "no");
    itemToEquip.setAttribute("name", "/");
    itemToEquip.innerHTML = `<span class="material-symbols-outlined item-add">add</span>`;
    unequipedItemClass(itemToEquip);
    equipedItemPopUp.classList.add("hidden");
    equipedOverlayPopUp.classList.add("hidden");
  });
};

export default avatarFunction;
