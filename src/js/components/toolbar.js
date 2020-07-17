const samToolbar = document.querySelector(".sds-toolbar");
if (samToolbar) {
  const samToolbarContent = samToolbar.querySelector(".sds-toolbar__content");
  const samToolbarSibling = samToolbar.nextElementSibling;
  const samToolbarToggleBtn = samToolbar.querySelector(
    ".sds-toolbar__toogle-btn"
  );
  const samPageContent = document.querySelector(".sds-page__content");

  samToolbarToggleBtn.addEventListener("click", (event) => {
    if (!samToolbar.classList.contains("sds-toolbar--expanded")) {
      const startExpandedAnim = () => {
        samToolbarSibling.removeEventListener(
          "transitionend",
          startExpandedAnim
        );
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

const samMobileToolbar = document.querySelector(".sds-toolbar-mobile__select");
if (samMobileToolbar) {
  const samMobileToolbarToggleBtn = samMobileToolbar.querySelectorAll(
    ".sds-toolbar-mobile__select-button"
  );
  console.log(samMobileToolbarToggleBtn);
  samMobileToolbarToggleBtn.forEach(function (targetmobile) {
    targetmobile.addEventListener(
      "click",
      (event) => {
        let target = event.currentTarget.getAttribute("data-show_target");
        document.getElementById(target).toggleAttribute("hidden");
      },
      true
    );
  });
  
  const samMobileRetunToolbarToggleBtn = document.querySelectorAll(
    ".sds-toolbar-mobile__header-button"
  );
  
  console.log("FAA",samMobileRetunToolbarToggleBtn);
  samMobileRetunToolbarToggleBtn.forEach(function (targetmobile) {
    targetmobile.addEventListener(
      "click",
      (event) => {
        //let target = event.currentTarget.getAttribute("data-show_target");
  console.log("fooo", event.currentTarget);
        document.getElementById(event.currentTarget).toggleAttribute("hidden");
      },
      true
    );
  });
}
