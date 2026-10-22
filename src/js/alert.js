const alertElement = document.querySelector(".alert");
const alertTitleElement = document.querySelector("#alert-title");
const alertBodyElement = document.querySelector("#alert-body");

class dethzAlert extends EventTarget {
  static active = null;

  constructor(title = "", content = "", onClose = null) {
    super();
    this.title = title;
    this.content = content;
    if (typeof onClose === "function") {
      this.onClose(onClose);
    }
  }

  do(title, content) {
    if (title !== undefined) this.title = title;
    if (content !== undefined) this.content = content;

    if (alertTitleElement) alertTitleElement.innerHTML = this.title;
    if (alertBodyElement) alertBodyElement.innerHTML = this.content;

    alertElement.classList.remove("hidden");
    dethzAlert.active = this;
    return this;
  }

  show(title, content) {
    return this.do(title, content);
  }

  open(title, content) {
    return this.do(title, content);
  }

  close(trigger = "programmatic") {
    // If controller was asked to close while a specific instance is active
    if (this === controller && dethzAlert.active && dethzAlert.active !== this) {
      dethzAlert.active.close(trigger);
      return;
    }

    if (alertElement.classList.contains("hidden")) return;
    alertElement.classList.add("hidden");

    const detail = { trigger, alert: this };
    const event = new CustomEvent("close", { detail });

    this.dispatchEvent(event);

    // Forward to global controller if closing a separate instance
    if (this !== controller && typeof controller !== "undefined") {
      controller.dispatchEvent(new CustomEvent("close", { detail }));
    }

    alertElement.dispatchEvent(
      new CustomEvent("alert:close", { detail })
    );

    if (dethzAlert.active === this) {
      dethzAlert.active = null;
    }
  }

  onClose(handler) {
    if (typeof handler === "function") {
      this.addEventListener("close", (e) => handler(e.detail || e));
    }
    return this;
  }
}

const Alert = dethzAlert;
const controller = new dethzAlert();

const close_alert = (trigger = "button") => {
  if (dethzAlert.active) {
    dethzAlert.active.close(trigger);
  } else {
    controller.close(trigger);
  }
};

const do_alert = (title, content, onClose) => {
  return new dethzAlert(title, content, onClose).do();
};

if (alertElement) {
  // Dismiss when clicking overlay backdrop outside window
  alertElement.addEventListener("click", (e) => {
    if (e.target === alertElement) {
      close_alert("backdrop");
    }
  });

  // Dismiss on titlebar close button
  const titleCloseBtn = alertElement.querySelector(
    '.title-bar-controls button[aria-label="Close"]'
  );
  if (titleCloseBtn) {
    titleCloseBtn.addEventListener("click", () =>
      close_alert("titlebar-close")
    );
  }
}
