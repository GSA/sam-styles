Array.prototype.slice
.call(document.querySelectorAll("[data-toggle]"))
.forEach(function (toggleElement) {
  toggleElement.addEventListener("click", function (event) {
    var toToggle = document.getElementById(toggleElement.getAttribute("data-target"));
    toToggle.classList.toggle(toggleElement.getAttribute("data-toggle"));
  });
});
