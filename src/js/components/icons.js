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
import { samAlarm } from "./../icons/alarm";
import { samCalendar } from "./../icons/calendar";
import { samDelete } from "./../icons/delete";
import { samFilter } from "./../icons/filter";
import { samGlossary } from "./../icons/glossary";
import { samHome } from "./../icons/home";
import { samMessage } from "./../icons/message";
import { samNewMessage } from "./../icons/newMessage";
import { samPrinter } from "./../icons/printer";
import { samReportData } from "./../icons/reportData";
import { samShare } from "./../icons/share";
import { samTools } from "./../icons/tools";
import { samWhatsNext } from "./../icons/whatsNext";
import { samWorkspace } from "./../icons/workspace";

config.familyPrefix = "icon";

const icons = [
  faSquare,
  faEdit,
  faComment,
  faTh,
  faSignOutAlt,
  samBars,
  samArrowLeft,
  samAlarm,
  samCalendar,
  samDelete,
  samFilter,
  samGlossary,
  samHome,
  samMessage,
  samNewMessage,
  samPrinter,
  samReportData,
  samShare,
  samTools,
  samWhatsNext,
  samWorkspace
];

library.add(...icons);

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch();
