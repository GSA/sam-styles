import BorderedAccordion from "./templates/bordered.html";
import MultiSelectableAccordion from "./templates/multiselectable.html"

export default {
    title: "Components/Accordion",
  };

  export const Bordered = () => {
    return BorderedAccordion;
  };

  export const Multiselectable = () => {
    return MultiSelectableAccordion;
  };
  