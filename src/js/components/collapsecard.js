
Array.prototype.slice
  .call(document.querySelectorAll(".sds-card--collapsible")).forEach(function(collapsecard) {
    console.log(collapsecard.childNodes);
    collapsecard.childNodes[1].addEventListener("click", function(event) {
        //if already collapsed then expand
        if (collapsecard.classList.contains("sds-card--collapsed")){
            collapsecard.classList.remove("sds-card--collapsed");
            collapsecard.childNodes[1].setAttribute("aria-expanded", "true");
        } else {
            collapsecard.classList.add("sds-card--collapsed");
            collapsecard.childNodes[1].setAttribute("aria-expanded", "false");
        }
  });

});