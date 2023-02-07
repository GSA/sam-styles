import DefaultCard from "./templates/default.html";
import BorderedNoShadowCard from "./templates/borderedNoShadow.html";
import CollapsibleCard from "./templates/collapsibleCard.html";
import HeaderActionButtonCard from "./templates/headerActionButton.html";
import HeaderIconCenteredCard from "./templates/headerIconCentered.html";
import HeaderIconLeftCard from "./templates/headerIconLeft.html";
import HeaderIconStackedCard from "./templates/headerIconStacked.html";
import HeaderOneButtonCard from "./templates/headerOneButton.html";
import HeaderTwoButtonCard from "./templates/headerTwoButton.html";
import LinkHeaderCard from "./templates/linkHeader.html";
import NoHeaderCard from "./templates/noHeader.html";
import NoShadowNoBorderCard from "./templates/noShadowNoBorder.html";
import ListCard from "./templates/list.html";
import ShadowedNoBorderCard from "./templates/shadowedNoBorder.html";
import VerticalHeaderCard from "./templates/verticalHeader.html";


export default {
    title: "Components/Card",
  };

  export const Default = () => {
    return DefaultCard;
  };

  export const BorderedNoShadow = () => {
    return BorderedNoShadowCard;
  };

  export const ShadowedNoBorder = () => {
    return ShadowedNoBorderCard;
  };

  export const NoShadowOrBorder = () => {
    return NoShadowNoBorderCard;
  };

  export const NoHeader = () => {
    return NoHeaderCard;
  };

  export const LinkHeader = () => {
    return LinkHeaderCard;
  };

  export const HeaderIconLeft = () => {
    return HeaderIconLeftCard;
  };

  export const HeaderIconStacked = () => {
    return HeaderIconStackedCard;
  };

  export const HeaderIconCentered = () => {
    return HeaderIconCenteredCard;
  };

  export const HeaderWithOneButton = () => {
    return HeaderOneButtonCard;
  };

  export const HeaderWithTwoButtons = () => {
    return HeaderTwoButtonCard;
  };

  export const HeaderWithActionButton = () => {
    return HeaderActionButtonCard;
  };

  export const VerticalHeader = () => {
    return VerticalHeaderCard;
  };

  export const Collapsible = () => {
    return CollapsibleCard;
  };

  export const List = () => {
    return ListCard;
  };