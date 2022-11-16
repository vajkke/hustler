const playBtn = document.querySelector(".play-option--container");
const optionsBtn = document.querySelector(".options-option--container");
const soundBtn = document.querySelector(".sound");

const soundIMG = document.querySelector(".sound-img");
const welcomeContainer = document.querySelector(".welcome-container");
const loader = document.querySelector(".loader");
const gameSection = document.querySelector(".game-section");

const soundBtnFunction = () => {
  soundBtn.addEventListener("click", () => {
    if (soundIMG.classList.contains("sound-on")) {
      soundIMG.classList.remove("sound-on");
      soundIMG.classList.add("sound-off");
      soundIMG.src = "../img/welcome/soundOff.svg";
    } else {
      soundIMG.classList.remove("sound-off");
      soundIMG.classList.add("sound-on");
      soundIMG.src = "../img/welcome/soundOn.svg";
    }
  });
};

const playBtnFunction = () => {
  playBtn.addEventListener("click", () => {
    welcomeContainer.classList.add("hidden");
    loader.classList.remove("hidden");
    setInterval(() => {
      loader.classList.add("hidden");
      gameSection.classList.remove("hidden");
    }, 4000);
  });
};

const welcomeFunction = () => {
  soundBtnFunction();
  playBtnFunction();
};

export default welcomeFunction;
