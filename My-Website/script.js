const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupMessage = document.getElementById("popup-message");

const helloButton = document.getElementById("hello-button");
const secretButton = document.getElementById("secret-button");
const closeButton = document.getElementById("close-popup");

// Open the pop-up with custom content.
function openPopup(title, message) {
  popupTitle.textContent = title;
  popupMessage.textContent = message;
  popup.hidden = false;
  closeButton.focus();
}

// Close the pop-up.
function closePopup() {
  popup.hidden = true;
}

// Say hello button.
helloButton.addEventListener("click", function () {
  openPopup(
    "Heya! ♡",
    "Welcome to my first major project. I'm glad you're here."
  );
});

// Secret button.
secretButton.addEventListener("click", function () {
  openPopup(
    "A little message...",
    "Thank you for testing my page! ✦"
  );
});

// Close button.
closeButton.addEventListener("click", closePopup);

// Escape key closes the pop-up.
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !popup.hidden) {
    closePopup();
  }
});
const musicButton = document.getElementById("music-button");
const musicReveal = document.getElementById("music-reveal");

musicButton.addEventListener("click", function () {
  const isHidden = musicReveal.hidden;

  musicReveal.hidden = !isHidden;
  musicButton.textContent = isHidden
    ? "Hide my pick"
    : "Reveal my pick";

  musicButton.setAttribute(
    "aria-expanded",
    String(isHidden)
  );
});
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
  const isLight = document.body.classList.toggle("light-theme");

  themeToggle.textContent = isLight
    ? "☾ Dark mode"
    : "☼ Light mode";
});