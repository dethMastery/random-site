window.addEventListener("keydown", async (e) => {
  if (e.code === "Space") {
    random();
  } else if (e.code === "Escape" || e.code === "Enter") {
    if (!window.document.querySelector(".alert").classList.contains("hidden")) {
      controller.close("keyboard");
    } else {
      if (e.code === "Enter") {
        random();
      }
    }
  } else if (e.code === "KeyR") {
    new dethzAlert("Reset", "รายการถูก Reset แล้ว!").do().onClose(reset());
  } else if (e.code === "KeyA") {
    // if (!window.document.querySelector(".alert").classList.contains("hidden")) {
    //   close_alert();
    // } else {
    //   do_alert("test title", "this is test content");
    // }
  }
});
