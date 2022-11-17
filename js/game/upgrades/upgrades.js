const upgrade1xBtn = document.querySelector(".upgrade1x");
const upgrade10xBtn = document.querySelector(".upgrade10x");
const upgrade25xBtn = document.querySelector(".upgrade25x");
const upgrade50xBtn = document.querySelector(".upgrade50x");
const upgradeMaxBtn = document.querySelector(".upgradeMax");

const upgradesFunction = () => {
  upgrade1xBtn.addEventListener("click", () => {
    upgrade1xBtn.classList.add("hidden");
    upgrade10xBtn.classList.remove("hidden");
  });

  upgrade10xBtn.addEventListener("click", () => {
    upgrade10xBtn.classList.add("hidden");
    upgrade25xBtn.classList.remove("hidden");
  });

  upgrade25xBtn.addEventListener("click", () => {
    upgrade25xBtn.classList.add("hidden");
    upgrade50xBtn.classList.remove("hidden");
  });

  upgrade50xBtn.addEventListener("click", () => {
    upgrade50xBtn.classList.add("hidden");
    upgradeMaxBtn.classList.remove("hidden");
  });

  upgradeMaxBtn.addEventListener("click", () => {
    upgradeMaxBtn.classList.add("hidden");
    upgrade1xBtn.classList.remove("hidden");
  });
};

export default upgradesFunction;
