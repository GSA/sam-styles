import SideNavDefault from "./templates/default.html";
import SideNavCompare from "./templates/compare.html";
import SideNavSubpanel from "./templates/subpanel.html";

export default {
  title: "Components/SideNav",
};

export const Default = () => {
  return SideNavDefault;
};

export const Compare = () => {
  return SideNavCompare;
};

export const Subpanel = () => {
  return SideNavSubpanel;
};
