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
import { samBell } from "./../icons/bell";
import { samCalendar } from "./../icons/calendar";
import { samTrash } from "./../icons/trash";
import { samFilter } from "./../icons/filter";
import { samBook } from "./../icons/book";
import { samHome } from "./../icons/home";
import { samEnvelope } from "./../icons/envelope";
import { samNewNote } from "./../icons/newNote";
import { samPrinter } from "./../icons/printer";
import { samFileChartLine } from "./../icons/fileChartLine";
import { samShare } from "./../icons/share";
import { samRulerPencil } from "./../icons/rulerPencil";
import { samPrinter } from "./../icons/printer";
import { samUser } from "./../icons/user";
import { samLink } from "./../icons/link";
import { samDownload } from "./../icons/download";
import { samInvoice } from "./../icons/invoice";
import { samPaperPlane } from "./../icons/paperPlane";

config.familyPrefix = "icon";

const icons = [
  faSquare,
  faEdit,
  faComment,
  faTh,
  faSignOutAlt,
  samBars,
  samArrowLeft,
  samBell,
  samBook,
  samCalendar,
  samDownload,
  samEnvelope,
  samFileChartLine,
  samFilter,
  samHome,
  samInvoice,
  samLink,
  samNewNote,
  samPaperPlane,
  samPrinter,
  samRulePencil,
  samShare,
  samTrash,
  samUser
];

library.add(...icons);

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch();
