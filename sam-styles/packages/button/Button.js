export const createButton = ({ type, size, focusType, label, onClick }) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.addEventListener("click", onClick);

  const typeD = type == "shadow" || type == "white" || type == "danger" ? `sds-button--${type}` : type ? `usa-button--${type}` : "";
  const sizeD = size === "big" ? `usa-button--${size}` : size === "small" ? "sds-button--small" : "";
  const focus = focusType && focusType !== "focus" ? `usa-button--${focusType}` : focusType ? "usa-focus" : "";

  const typeInverse = type == "outline-inverse" ? "usa-button--outline usa-button--inverse" : "";

  btn.className = ["usa-button", typeD, typeInverse, focus, sizeD].join(" ");

  return btn;
};
