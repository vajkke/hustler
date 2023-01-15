const mobileNavBtn = document.querySelector(".mobile-nav");
const sidebar = document.querySelector(".sidebar");
const navOverlay = document.querySelector(".mobile-nav--overlay");
const mobileNavContainer = document.querySelector(".mobile-nav--container");

const closeMobileNav = document.querySelector(".mobile-nav--close");

const sidebarMobile = () => {
  mobileNavBtn.addEventListener("click", () => {
    sidebar.style.display = "flex";
    navOverlay.classList.remove("hidden");
    mobileNavBtn.classList.add("hidden");
    mobileNavContainer.style.backgroundColor = "transparent";
    closeMobileNav.classList.remove("hidden");
  });

  closeMobileNav.addEventListener("click", () => {
    sidebar.style.display = "none";
    navOverlay.classList.add("hidden");
    mobileNavBtn.classList.remove("hidden");
    mobileNavContainer.style.backgroundColor = "";
    closeMobileNav.classList.add("hidden");
  });
};

export default sidebarMobile;
