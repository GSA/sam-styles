console.log("loading!")

Array.prototype.slice
  .call(document.querySelectorAll(".simple-toggle"))
  .forEach(function(toggleButton) {
    toggleButton.addEventListener("click", function(event) {
      var toToggle = document.getElementById(toggleButton.getAttribute("aria-controls"));
      var caretIcon = toggleButton.children[0];
      toToggle.classList.toggle("display-none");
      caretIcon.classList.toggle("fa-caret-up");
      caretIcon.classList.toggle("fa-caret-down");
    });
  });

//hide header alert once all alerts have been closed

var closebtns = document.getElementsByClassName("sds-alert--header__close");
var i;
var alertCounter = 0;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function(event) {
    this.parentElement.style.display = 'none';
    alertCounter++;
    if (alertCounter === closebtns.length) {
      let header = document.getElementById("sds-alert--header")
      header.style.display = 'none';
    }
  });
}

function toggle_visibility(id) {
   var e = document.getElementById("feedback");
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}
