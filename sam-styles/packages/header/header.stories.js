import DefaultHeader from "./templates/default.html"
import SamHeader from "./templates/sam.html"

export default {
    title: "Components/Header",
  };

  export const Default = () => {
    return DefaultHeader;
  };

  export const Sam = () => {
    return SamHeader;
  };