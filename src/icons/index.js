import { sdsArrow } from "./sdsArrow";
import { sdsBars } from "./sdsBars";
import { sdsBell } from "./sdsBell";
import { sdsBook } from "./sdsBook";
import { sdsCalendar } from "./sdsCalendar";
import { sdsCalendarAdd } from "./sdsCalendarAdd";
import { sdsCalendarCheck } from "./sdsCalendarCheck";
import { sdsDownload } from "./sdsDownload";
import { sdsEnvelope } from "./sdsEnvelope";
import { sdsFileChartLine } from "./sdsFileChartLine";
import { sdsFilter } from "./sdsFilter";
import { sdsHome } from "./sdsHome";
import { sdsInvoice } from "./sdsInvoice";
import { sdsLink } from "./sdsLink";
import { sdsUnlink } from "./sdsUnlink";
import { sdsNewNote } from "./sdsNewNote";
import { sdsPaperPlane } from "./sdsPaperPlane";
import { sdsPrint } from "./sdsPrint";
import { sdsRulerPencil } from "./sdsRulerPencil";
import { sdsShare } from "./sdsShare";
import { sdsTrash } from "./sdsTrash";
import { sdsWorkspace } from "./sdsWorkspace";
import { sdsRequest } from "./sdsRequest";
import { sdsNotifications } from "./sdsNotifications";
import { sdsLogOut } from "./sdsLogOut";
import { sdsLogIn } from "./sdsLogIn";
import { sdsExclamation } from "./sdsExclamation";
import { sdsAlertWarning } from "./sdsAlertWarning";
import { sdsAlertInfo } from "./sdsAlertInfo";
import { sdsAlertError } from "./sdsAlertError";
import { sdsUsers } from "./sdsUsers";
import { sdsUser } from "./sdsUser";
import { sdsUserCircle } from "./sdsUserCircle";
import { sdsShip } from "./sdsShip";
import { sdsFile } from "./sdsFile";
import { sdsExclamationCircle } from "./sdsExclamationCircle";
import { sdsCheckCircle } from "./sdsCheckCircle";
import { sdsOpenDoors } from "./sdsOpenDoors";
import { sdsBuilding } from "./sdsBuilding";
import { sdsBuildingAlt } from "./sdsBuildingAlt";
import { sdsFederalBuilding } from "./sdsFederalBuilding";
import { sdsFlag } from "./sdsFlag";
import { sdsPhoto } from "./sdsPhoto";
import { sdsPenPaper } from "./sdsPenPaper";
import { sdsStar } from "./sdsStar";
import { sdsFolder} from "./sdsFolder";
import { sdsFolderAlt1} from "./sdsFolderAlt1";
import { sdsFolderAlt2} from "./sdsFolderAlt2";
import { sdsEllipsis } from "./sdsEllipsis";
import { sdsTag } from "./sdsTag";
import { sdsCircle } from "./sdsCircle";
import { sdsPentagon } from "./sdsPentagon";
import { sdsTriangle } from "./sdsTriangle";
import { sdsLeaf } from "./sdsLeaf";
import { sdsExclamationTriangle } from "./sdsExclamationTriangle";
import { sdsSearch } from "./sdsSearch";
import { sdsInformationCircle } from "./sdsInformationCircle";
import { sdsNewVersion } from "./sdsNewVersion";
import { sdsQuestionCircle } from "./sdsQuestionCircle";
import { sdsVideoSquare } from "./sdsVideoSquare";
import { sdsVideoCircle } from "./sdsVideoCircle";
import { sdsVideoPlay } from "./sdsVideoPlay";
import { sdsArrowDown } from "./sdsArrowDown";
import { sdsArrowUp } from "./sdsArrowUp";
import { sdsExit } from "./sdsExit";
import { sdsQuestion } from "./sdsQuestion";
import { sdsAngleRight } from "./sdsAngleRight";
import { sdsAngleLeft } from "./sdsAngleLeft";
import { sdsReset } from "./sdsReset";
import { sdsThumbUp } from "./sdsThumbUp";
import { sdsThumbDown } from "./sdsThumbDown";
import { sdsBookmark } from "./sdsBookmark";
import { sdsComment } from "./sdsComment";
import { sdsMobile } from "./sdsMobile";
import { sdsTablet } from "./sdsTablet";
import { sdsUpload } from "./sdsUpload";
import { sdsSearchCircle } from "./sdsSearchCircle";
import { sdsCheck } from "./sdsCheck";
import { sdsPhotoAlt } from "./sdsPhotoAlt";
import { sdsDocument } from "./sdsDocument";
import { sdsDocumentAdd } from "./sdsDocumentAdd";
import { sdsDocumentSearch } from "./sdsDocumentSearch";
import { sdsDocumentPdf } from "./sdsDocumentPdf";
import { sdsAdd } from "./sdsAdd";
import { sdsAngleCircle } from "./sdsAngleCircle";
import { sdsAddReq } from "./sdsAddReq";
import { sdsAttachment } from "./sdsAttachment";
import { sdsReceipt } from "./sdsReceipt";
const prefix = "sds";

const _iconsCache = {
  sdsArrow: sdsArrow,
  sdsBars: sdsBars,
  sdsBell: sdsBell,
  sdsBook: sdsBook,
  sdsCalendar: sdsCalendar,
  sdsCalendarAdd: sdsCalendarAdd,
  sdsCalendarCheck: sdsCalendarCheck,
  sdsDownload: sdsDownload,
  sdsEnvelope: sdsEnvelope,
  sdsFileChartLine: sdsFileChartLine,
  sdsFilter: sdsFilter,
  sdsHome: sdsHome,
  sdsInvoice: sdsInvoice,
  sdsLink: sdsLink,
  sdsNewNote: sdsNewNote,
  sdsPaperPlane: sdsPaperPlane,
  sdsPrint: sdsPrint,
  sdsRulerPencil: sdsRulerPencil,
  sdsShare: sdsShare,
  sdsTrash: sdsTrash,
  sdsUserCircle: sdsUserCircle,
  sdsWorkspace: sdsWorkspace,
  sdsRequest: sdsRequest,
  sdsNotifications: sdsNotifications,
  sdsLogOut: sdsLogOut,
  sdsLogIn: sdsLogIn,
  sdsExclamation: sdsExclamation,
  sdsAlertWarning: sdsAlertWarning,
  sdsAlertInfo: sdsAlertInfo,
  sdsAlertError: sdsAlertError,
  sdsUsers: sdsUsers,
  sdsUser: sdsUser,
  sdsShip: sdsShip,
  sdsFile: sdsFile,
  sdsExclamationCircle: sdsExclamationCircle,
  sdsCheckCircle: sdsCheckCircle,
  sdsStar: sdsStar,
  sdsFolder: sdsFolder,
  sdsFolderAlt1: sdsFolderAlt1,
  sdsFolderAlt2: sdsFolderAlt2,
  sdsFlag: sdsFlag,
  sdsOpenDoors:sdsOpenDoors,
  sdsBuilding:sdsBuilding,
  sdsBuildingAlt:sdsBuildingAlt,
  sdsFederalBuilding:sdsFederalBuilding,
  sdsPenPaper:sdsPenPaper,
  sdsEllipsis:sdsEllipsis,
  sdsTag:sdsTag,
  sdsPhoto:sdsPhoto,
  sdsCircle:sdsCircle,
  sdsPentagon:sdsPentagon,
  sdsTriangle:sdsTriangle,
  sdsLeaf:sdsLeaf,
  sdsExclamationTriangle:sdsExclamationTriangle,
  sdsSearch:sdsSearch,
  sdsInformationCircle:sdsInformationCircle,
  sdsNewVersion:sdsNewVersion,
  sdsQuestionCircle:sdsQuestionCircle,
  sdsVideoSquare:sdsVideoSquare,
  sdsVideoCircle:sdsVideoCircle,
  sdsVideoPlay:sdsVideoPlay,
  sdsArrowUp: sdsArrowUp,
  sdsArrowDown: sdsArrowDown,
  sdsExit: sdsExit,
  sdsQuestion: sdsQuestion,
  sdsAngleLeft: sdsAngleLeft,
  sdsAngleRight: sdsAngleRight,
  sdsReset: sdsReset,
  sdsThumbUp: sdsThumbUp,
  sdsThumbDown: sdsThumbDown,
  sdsBookmark: sdsBookmark,
  sdsComment: sdsComment,
  sdsMobile: sdsMobile,
  sdsTablet: sdsTablet,
  sdsUpload: sdsUpload,
  sdsSearchCircle: sdsSearchCircle,
  sdsCheck: sdsCheck,
  sdsPhotoAlt: sdsPhotoAlt,
  sdsAdd: sdsAdd,
  sdsDocument: sdsDocument,
  sdsDocumentAdd: sdsDocumentAdd,
  sdsDocumentSearch: sdsDocumentSearch,
  sdsDocumentPdf: sdsDocumentPdf,
  sdsAngleCircle: sdsAngleCircle,
  sdsAddReq: sdsAddReq,
  sdsAttachment: sdsAttachment,
  sdsUnlink: sdsUnlink,
  sdsReceipt: sdsReceipt
};

export {
  _iconsCache as sds,
  prefix,
  sdsArrow,
  sdsBars,
  sdsBell,
  sdsBook,
  sdsCalendar,
  sdsCalendarAdd,
  sdsCalendarCheck,
  sdsDownload,
  sdsEnvelope,
  sdsFileChartLine,
  sdsFilter,
  sdsHome,
  sdsInvoice,
  sdsLink,
  sdsNewNote,
  sdsPaperPlane,
  sdsPrint,
  sdsRulerPencil,
  sdsShare,
  sdsTrash,
  sdsUserCircle,
  sdsWorkspace,
  sdsRequest,
  sdsNotifications,
  sdsLogOut,
  sdsLogIn,
  sdsExclamation,
  sdsAlertWarning,
  sdsAlertInfo,
  sdsAlertError,
  sdsUsers,
  sdsUser,
  sdsShip,
  sdsFile,
  sdsExclamationCircle,
  sdsCheckCircle,
  sdsStar,
  sdsFlag,
  sdsFolder,
  sdsFolderAlt1,
  sdsFolderAlt2,
  sdsOpenDoors,
  sdsBuilding,
  sdsBuildingAlt,
  sdsFederalBuilding,
  sdsPenPaper,
  sdsPhoto,
  sdsEllipsis,
  sdsTag,
  sdsCircle,
  sdsPentagon,
  sdsTriangle,
  sdsLeaf,
  sdsExclamationTriangle,
  sdsSearch,
  sdsInformationCircle,
  sdsNewVersion,
  sdsQuestionCircle,
  sdsVideoSquare,
  sdsVideoCircle,
  sdsVideoPlay,
  sdsArrowUp,
  sdsArrowDown,
  sdsExit,
  sdsQuestion,
  sdsAngleLeft,
  sdsAngleRight,
  sdsReset,
  sdsThumbUp,
  sdsThumbDown,
  sdsBookmark,
  sdsComment,
  sdsMobile,
  sdsTablet,
  sdsUpload,
  sdsSearchCircle,
  sdsCheck,
  sdsPhotoAlt,
  sdsAdd,
  sdsDocument,
  sdsDocumentAdd,
  sdsDocumentSearch,
  sdsAngleCircle,
  sdsAddReq,
  sdsAttachment,
  sdsUnlink,
  sdsDocumentPdf,
  sdsReceipt
};
