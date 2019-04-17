import { config, library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faSquare,
  faEdit,
  faComment,
  faTh,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { samBars } from "./../icons/bars";
import { samArrowLeft } from "./../icons/arrowLeft";

config.familyPrefix = "icon";

const icons = [
  faSquare,
  faEdit,
  faComment,
  faTh,
  faSignOutAlt,
  samBars,
  samArrowLeft
];

library.add(...icons);

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch();
