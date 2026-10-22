const alertElement = document.querySelector(".alert");

const do_alert = (title, content) => {
  document.querySelector("#alert-title").innerHTML = title;
  document.querySelector("#alert-body").innerHTML = content;

  alertElement.classList.remove("hidden");
};

const close_alert = () => {
  alertElement.classList.add("hidden");
};

alertElement.addEventListener("click", close_alert);
