const valueElement = document.querySelector("#value-progress");

const doProgressAnimation = () => {
  if (valueElement.value < 100) {
    valueElement.value += 10;
  }
};

const toggleClass = () => {
  document.querySelector("#normal-btn-container").classList.toggle("hidden");
  document.querySelector("#loading-btn-container").classList.toggle("hidden");

  document.querySelector("#main-progress").classList.toggle("hidden");
  document.querySelector("#main-container").classList.toggle("hidden");
};

const randomAnimation = () => {
  toggleClass();

  valueElement.value = 0;

  let doProgress = setInterval(() => {
    doProgressAnimation();

    if (valueElement.value === 100) {
      clearInterval(doProgress);
    }
  }, 100);

  setTimeout(() => {
    toggleClass();
  }, 1200);
};
