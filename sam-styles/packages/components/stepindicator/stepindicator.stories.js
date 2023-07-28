import BorderedAccordion from "./templates/default.html";
import CenteredStep from "./templates/centered.html";
import CountersStep from "./templates/counters.html";
import NoLabelsStep from "./templates/noLabels.html";
import SmallStep from "./templates/small.html";


export default {
    title: "Components/StepIndicator",
  };

  export const Default = () => {
    return BorderedAccordion;
  };

  export const Centered = () => {
    return CenteredStep;
  };
  
  export const Counters = () => {
    return CountersStep;
  };

  export const NoLabels = () => {
    return NoLabelsStep;
  };

  export const Small = () => {
    return SmallStep;
  };