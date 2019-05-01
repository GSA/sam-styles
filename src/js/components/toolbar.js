const samToolbar = document.querySelector(".sam-toolbar");
if(samToolbar){
  const samToolbarContent = samToolbar.querySelector(".sam-toolbar__content");
  const samToolbarSibling = samToolbar.nextElementSibling;
  const samToolbarToggleBtn = samToolbar.querySelector(
    ".sam-toolbar__toogle-btn"
  );
  const samPageContent = document.querySelector(".sam-page__content");
  
  samToolbarToggleBtn.addEventListener("click", event => {
    if (!samToolbar.classList.contains("sam-toolbar--expanded")) {
      const startExpandedAnim = () => {
        samToolbarSibling.removeEventListener("transitionend", startExpandedAnim);
        samToolbar.classList.add("sam-toolbar--expanded");
      };
      requestAnimationFrame(() => {
        samToolbarSibling.addEventListener("transitionend", startExpandedAnim);
        samToolbarSibling.classList.add("sam-toolbar__anim--expanded");
        samPageContent.classList.add("sam-toolbar__anim--expanded");
        samToolbarContent.removeAttribute("hidden");
      });
    } else {
      const endExpandedAnim = () => {
        samToolbar.removeEventListener("transitionend", endExpandedAnim);
        samToolbarSibling.classList.remove("sam-toolbar__anim--expanded");
        samPageContent.classList.remove("sam-toolbar__anim--expanded");
        samToolbarContent.setAttribute("hidden", "");
      };
      requestAnimationFrame(() => {
        samToolbar.addEventListener("transitionend", endExpandedAnim);
        samToolbar.classList.remove("sam-toolbar--expanded");
      });
    }
    event.preventDefault();
  });
}
