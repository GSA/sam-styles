import Display from "./templates/displayPage.html";
import Full from "./templates/fullPage.html";
import Loading from "./templates/landingPage.html";
import Left from "./templates/leftAside.html";
import LoadingResults from "./templates/loadingResultsPage.html";
import SideBar from "./templates/pageSidebar.html";
import Right from "./templates/rightAside.html";
import Columns from "./templates/threeColumns.html";


export default {
    title: "Patterns/Pages",
  };

  export const DisplayPage = () => {
    return Display;
  };

  export const FullPage = () => {
    return Full;
  };

  export const LandingPage = () => {
    return Loading;
  };

  export const LeftAside = () => {
    return Left;
  };

  export const LoadingResultsPage = () => {
    return LoadingResults;
  };

  export const PageSideBar = () => {
    return SideBar;
  };

  export const RightAside = () => {
    return Right;
  };

  export const ThreeColumns = () => {
    return Columns;
  };

  