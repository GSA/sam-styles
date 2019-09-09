console.log("loading!")

Array.prototype.slice
  .call(document.querySelectorAll(".simple-toggle"))
  .forEach(function (toggleButton) {
    toggleButton.addEventListener("click", function (event) {
      var toToggle = document.getElementById(toggleButton.getAttribute("aria-controls"));
      var displayStatus = toToggle.style.display;
      var caretIcon = toggleButton.children[0];
      if(displayStatus=="none"){
        toToggle.style.display = "unset";
        caretIcon.classList.toggle("fa-caret-up");
      }
      else{
        toToggle.style.display = "none";
        caretIcon.classList.toggle("fa-caret-down");
      }
    }
    )
  }
  );