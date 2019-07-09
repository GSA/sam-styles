import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
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
import { samFileChartLine } from "./../icons/fileChartLine";
import { samShare } from "./../icons/share";
import { samRulerPencil } from "./../icons/rulerPencil";
import { samPrint } from "./../icons/print";
import { samUser } from "./../icons/user";
import { samLink } from "./../icons/link";
import { samDownload } from "./../icons/download";
import { samInvoice } from "./../icons/invoice";
import { samPaperPlane } from "./../icons/paperPlane";
import { samExclamation } from "./../icons/exclamation";


const icons = [
  fas,
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
  samPrint,
  samRulerPencil,
  samShare,
  samTrash,
  samUser,
  samExclamation
];

library.add(...icons);

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch();
