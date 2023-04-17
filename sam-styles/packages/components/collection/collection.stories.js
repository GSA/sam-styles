import DefaultCollection from "./templates/default.html";
import MediaCollection from "./templates/media.html";
import CalenderCollection from "./templates/calender.html";
import CondensedCollection from "./templates/condensed.html";

export default {
  title: "Components/Collection",
};

export const Default = () => {
  return DefaultCollection;
};

export const Media = () => {
  return MediaCollection;
};

export const Calender = () => {
  return CalenderCollection;
};

export const Condensed = () => {
  return CondensedCollection;
};
