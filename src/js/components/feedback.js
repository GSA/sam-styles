// Array.prototype.slice
//   .call(document.querySelectorAll(".simple-toggle"))
//   .forEach(function(toggleButton) {
//     toggleButton.addEventListener("click", function(event) {
//       var toToggle = document.getElementById(toggleButton.getAttribute("aria-controls"));
//       var caretIcon = toggleButton.children[0];
//       toToggle.classList.toggle("display-none");
//       caretIcon.classList.toggle("fa-arrow-up");
//       caretIcon.classList.toggle("fa-arrow-down");
//     });
//   });

function toggle_visibility(feedback) {
   var e = document.getElementById(feedback);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}
