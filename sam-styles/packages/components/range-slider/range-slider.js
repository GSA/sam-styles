export const createRangeSlider = ({ type, size, focusType, label, onClick }) => {
  const rangeSlider = document.createElement("input");
  rangeSlider.type = "range";

  const typeD = type == "shadow" || type == "white" || type == "danger" ? `sds-button--${type}` : type ? `usa-button--${type}` : "";
  const sizeD = size === "big" ? `usa-button--${size}` : size === "small" ? "sds-button--small" : "";
  const focus = focusType && focusType !== "focus" ? `usa-button--${focusType}` : focusType ? "usa-focus" : "";

  const typeInverse = type == "outline-inverse" ? "usa-button--outline usa-button--inverse" : "";
  // type="range" min="0" max="100" step="10"
  rangeSlider.value = "50";
  rangeSlider.ariaValuemin = "0";
  rangeSlider.ariaValuemax = "100";
  rangeSlider.ariaValuenow = "20";
  rangeSlider.role = "slider";
  rangeSlider.className = ["usa-range"].join(" ");

  return rangeSlider;
};
