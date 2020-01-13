console.log("feedback loading")

Array.prototype.slice
  .call(document.querySelectorAll(".simple-toggle"))
  .forEach(function(toggleButton) {
    toggleButton.addEventListener("click", function(event) {
      var toToggle = document.getElementById(toggleButton.getAttribute("aria-controls"));
      var arrowIcon = toggleButton.children[0];
      toToggle.classList.toggle("display-none");
      arrowIcon.classList.toggle("fa-arrow-up");
      arrowIcon.classList.toggle("fa-arrow-down");
    });
  });

console.log("feedback done")
