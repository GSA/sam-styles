console.log("loading!")

Array.prototype.slice
  .call(document.querySelectorAll(".simple-toggle"))
  .forEach(function (toggleButton) {
    toggleButton.addEventListener("click", function (event) {
      var toToggle = document.getElementById(toggleButton.getAttribute("aria-controls"));
      var caretIcon = toggleButton.children[0];
      toToggle.classList.toggle("display-none");
      caretIcon.classList.toggle("fa-caret-up");
      caretIcon.classList.toggle("fa-caret-down");
    });
  });