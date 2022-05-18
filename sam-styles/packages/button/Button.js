export const createButton = ({ primary = false, type = "primary", hover = false, label, onClick }) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.addEventListener("click", onClick);

  const mode = primary ? "usa-button" : mode;
  const hoverclass = hover ? "usa-button--hover" : "";
  btn.className = ["usa-button", mode, hoverclass].join(" ");

  return btn;
};
