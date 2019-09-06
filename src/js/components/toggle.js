console.log("loading!")

Array.prototype.slice
  .call(document.querySelectorAll(".simple-toggle"))
  .forEach(function (toggleButton) {
    toggleButton.addEventListener("click", function (event) {
      var toToggle = document.getElementById(toggleButton.getAttribute("aria-controls"));
      var displayStatus = toToggle.style.display;
      if(displayStatus=="none"){
        toToggle.style.display = "unset";
      }
      else{
        toToggle.style.display = "none";
      }
    }
    )
  }
  );