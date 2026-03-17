const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    formMessage.textContent =
      "Votre demande a bien été préparée. Reliez ce formulaire à votre email ou à Formspree pour recevoir les messages.";
    form.reset();
  });
}