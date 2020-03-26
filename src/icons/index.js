import { sdsArrow } from "./sdsArrow";
import { sdsBars } from "./sdsBars";
import { sdsBell } from "./sdsBell";
import { sdsBook } from "./sdsBook";
import { sdsCalendar } from "./sdsCalendar";
import { sdsDownload } from "./sdsDownload";
import { sdsEnvelope } from "./sdsEnvelope";
import { sdsFileChartLine } from "./sdsFileChartLine";
import { sdsFilter } from "./sdsFilter";
import { sdsHome } from "./sdsHome";
import { sdsInvoice } from "./sdsInvoice";
import { sdsLink } from "./sdsLink";
import { sdsNewNote } from "./sdsNewNote";
import { sdsPaperPlane } from "./sdsPaperPlane";
import { sdsPrint } from "./sdsPrint";
import { sdsRulerPencil } from "./sdsRulerPencil";
import { sdsShare } from "./sdsShare";
import { sdsTrash } from "./sdsTrash";
import { sdsWorkspace } from "./sdsWorkspace";
import { sdsRequest } from "./sdsRequest";
import { sdsMessages } from "./sdsMessages";
import { sdsLogOut } from "./sdsLogOut";
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
import { sdsFederalBuilding } from "./sdsFederalBuilding";
import { sdsFlag } from "./sdsFlag";
import { sdsPhoto } from "./sdsPhoto";
import { sdsPenPaper } from "./sdsPenPaper";
import { sdsStar } from "./sdsStar";
import { sdsFolder} from "./sdsFolder";
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
import { sdsPhotoV2 } from "./sdsPhotoV2";
import { sdsDocument } from "./sdsDocument";
import { sdsDocumentAdd } from "./sdsDocumentAdd";
import { sdsDocumentSearch } from "./sdsDocumentSearch";
import { sdsAdd } from "./sdsAdd";
const prefix = "sds";

const _iconsCache = {
  sdsArrow: sdsArrow,
  sdsBars: sdsBars,
  sdsBell: sdsBell,
  sdsBook: sdsBook,
  sdsCalendar: sdsCalendar,
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
  sdsMessages: sdsMessages,
  sdsLogOut: sdsLogOut,
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
  sdsFlag: sdsFlag,
  sdsOpenDoors:sdsOpenDoors,
  sdsBuilding:sdsBuilding,
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
  sdsPhotoV2: sdsPhotoV2,
  sdsAdd: sdsAdd,
  sdsDocument: sdsDocument,
  sdsDocumentAdd: sdsDocumentAdd,
  sdsDocumentSearch: sdsDocumentSearch
};

export {
  _iconsCache as sds,
  prefix,
  sdsArrow,
  sdsBars,
  sdsBell,
  sdsBook,
  sdsCalendar,
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
  sdsMessages,
  sdsLogOut,
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
  sdsOpenDoors,
  sdsBuilding,
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
  sdsPhotoV2,
  sdsAdd,
  sdsDocument,
  sdsDocumentAdd,
  sdsDocumentSearch
};
