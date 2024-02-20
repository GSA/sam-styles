//import BorderedAccordion from "./templates/bordered.html";
import MultiSelectableAccordion from "./templates/multiselectable.html";

export default {
    title: "Components/Accordion",
    argTypes: {
      class: {type: "string"},
      expanded: {type: "boolean"},
    },
  };

  const BorderedTemplate = (args) => {
    return `<div class="usa-accordion ${args.class}">

    <h2 class="usa-accordion__heading">
        <button class="usa-accordion__button  border-top-1px border-base-light " aria-expanded="false" aria-controls="b-a1">
            Accordion Button
        </button>
    </h2>
    <div id="b-a1" class="usa-accordion__content" hidden>
        <p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</p>
    </div>

    <h2 class="usa-accordion__heading">
        <button class="usa-accordion__button " aria-expanded="true" aria-controls="b-a2">
            Accordion Button
        </button>
    </h2>
    <div id="b-a2" class="usa-accordion__content">
        <p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</p>
    </div>

    <h2 class="usa-accordion__heading">
        <button class="usa-accordion__button " aria-expanded="false" aria-controls="b-a3">
            Accordion Button
        </button>
    </h2>
    <div id="b-a3" class="usa-accordion__content" hidden>
        <p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</p>
    </div>

    <h2 class="usa-accordion__heading">
        <button class="usa-accordion__button " aria-expanded="false" aria-controls="b-a4">
            Accordion Button
        </button>
    </h2>
    <div id="b-a4" class="usa-accordion__content" hidden>
        <p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</p>
    </div>

    <h2 class="usa-accordion__heading">
        <button class="usa-accordion__button " aria-expanded="false" aria-controls="b-a5">
            Accordion Button
        </button>
    </h2>
    <div id="b-a5" class="usa-accordion__content" hidden>
        <p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</p>
    </div>

</div>`;
  };

  export const Multiselectable = () => {
    return MultiSelectableAccordion;
  };
  
  export const Bordered = BorderedTemplate.bind({});
    Bordered.args = {
      class: "usa-accordion--bordered",
    };