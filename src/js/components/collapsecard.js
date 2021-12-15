
Array.prototype.slice
  .call(document.querySelectorAll(".sds-card--collapsible")).forEach(function(collapsecard) {
    const header = collapsecard.querySelector('.usa-card__header');
    header.addEventListener("click", function() {
      console.log(collapsecard, 'hello', header);
      //if already collapsed then expand
      if (collapsecard.classList.contains("sds-card--collapsed")){
        collapsecard.classList.remove("sds-card--collapsed");
        header.setAttribute("aria-expanded", "true");
      } else {
        collapsecard.classList.add("sds-card--collapsed");
        header.setAttribute("aria-expanded", "false");
      }
    })
});