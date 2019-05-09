const samToolbar = document.querySelector(".sds-toolbar");
if(samToolbar){
  const samToolbarContent = samToolbar.querySelector(".sds-toolbar__content");
  const samToolbarSibling = samToolbar.nextElementSibling;
  const samToolbarToggleBtn = samToolbar.querySelector(
    ".sds-toolbar__toogle-btn"
  );
  const samPageContent = document.querySelector(".sds-page__content");
  
  samToolbarToggleBtn.addEventListener("click", event => {
    if (!samToolbar.classList.contains("sds-toolbar--expanded")) {
      const startExpandedAnim = () => {
        samToolbarSibling.removeEventListener("transitionend", startExpandedAnim);
        samToolbar.classList.add("sds-toolbar--expanded");
      };
      requestAnimationFrame(() => {
        samToolbarSibling.addEventListener("transitionend", startExpandedAnim);
        samToolbarSibling.classList.add("sds-toolbar__anim--expanded");
        samPageContent.classList.add("sds-toolbar__anim--expanded");
        samToolbarContent.removeAttribute("hidden");
      });
    } else {
      const endExpandedAnim = () => {
        samToolbar.removeEventListener("transitionend", endExpandedAnim);
        samToolbarSibling.classList.remove("sds-toolbar__anim--expanded");
        samPageContent.classList.remove("sds-toolbar__anim--expanded");
        samToolbarContent.setAttribute("hidden", "");
      };
      requestAnimationFrame(() => {
        samToolbar.addEventListener("transitionend", endExpandedAnim);
        samToolbar.classList.remove("sds-toolbar--expanded");
      });
    }
    event.preventDefault();
  });
}
