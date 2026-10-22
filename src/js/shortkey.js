window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    random();
  } else if (e.code === "Escape" || e.code === "Enter") {
    if (!window.document.querySelector(".alert").classList.contains("hidden")) {
      close_alert();
    }
  } else if (e.code === "KeyA") {
    // if (!window.document.querySelector(".alert").classList.contains("hidden")) {
    //   close_alert();
    // } else {
    //   do_alert("test title", "this is test content");
    // }
  }
});
