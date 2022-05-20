import DefaultCollection from "../collection/templates/default.html";
import MediaCollection from "../collection/templates/media.html";
import CalenderCollection from "../collection/templates/calender.html";
import CondensedCollection from "../collection/templates/condensed.html";

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
