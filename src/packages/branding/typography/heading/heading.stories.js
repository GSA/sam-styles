import DefaultHeading from "./templates/default.html";
import LightHeading from "./templates/light.html";
import LinkHeading from "./templates/link.html";

export default {
  title: "Branding/Typography/Heading",
};

export const Default = () => {
  return DefaultHeading;
};

export const Light = () => {
    return LightHeading;
};

export const Link = () => {
    return LinkHeading;
};