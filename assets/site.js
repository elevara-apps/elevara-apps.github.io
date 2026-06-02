const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", () => {
    const button = form.querySelector("button[type='submit']");
    if (button) {
      button.textContent = "Sending...";
      button.setAttribute("aria-busy", "true");
    }
  });
}
