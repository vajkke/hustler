import shopOpenFunction from "../sidebarDisplay/shop.js";

const avatarFunction = () => {
  // buttons
  const swagOption = document.querySelector(".swag");
  const inventoryOption = document.querySelector(".inventory");

  // display
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

  // Inventory display
  const inventoryShopBtn = document.querySelector(".no-items--buy");
  let itemCount = 0;

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

  genderSelect.addEventListener("click", () => {
    console.log("radi");
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

  if (avatarInventoryContainer.getAttribute("itemCount") === "0") {
    inventoryShopBtn.addEventListener("click", () => {
      shopOpenFunction();
    });
  }
};

export default avatarFunction;
