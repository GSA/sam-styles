import NextTemplate from "./templates/next.html";
import CancelTemplate from "./templates/cancel.html";
import PreviousTemplate from "./templates/previous.html";
import VarientsTemplate from "./templates/varients.html";

export default {
  title: "Components/Button/Pill",
};

export const Variants = () => {
  return VarientsTemplate;
};

export const Next = () => {
  return NextTemplate;
};

export const Cancel = () => {
  return CancelTemplate;
};

export const Previous = () => {
  return PreviousTemplate;
};

