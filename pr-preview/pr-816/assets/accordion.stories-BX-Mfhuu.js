const a=`<div
  class="usa-accordion usa-accordion--bordered"
  aria-multiselectable="true"
  data-allow-multiple
>
  <h2 class="usa-accordion__heading">
    <button
      class="usa-accordion__button border-top-1px border-base-light"
      aria-expanded="true"
      aria-controls="m-a1"
    >
      Accordion Button
    </button>
  </h2>
  <div id="m-a1" class="usa-accordion__content">
    <p>
      Congress shall make no law respecting an establishment of religion, or
      prohibiting the free exercise thereof; or abridging the freedom of speech,
      or of the press; or the right of the people peaceably to assemble, and to
      petition the Government for a redress of grievances.
    </p>
  </div>

  <h2 class="usa-accordion__heading">
    <button
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a2"
    >
      Accordion Button
    </button>
  </h2>
  <div id="m-a2" class="usa-accordion__content" hidden>
    <p>
      Congress shall make no law respecting an establishment of religion, or
      prohibiting the free exercise thereof; or abridging the freedom of speech,
      or of the press; or the right of the people peaceably to assemble, and to
      petition the Government for a redress of grievances.
    </p>
  </div>

  <h2 class="usa-accordion__heading">
    <button
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a3"
    >
      Accordion Button
    </button>
  </h2>
  <div id="m-a3" class="usa-accordion__content" hidden>
    <p>
      Congress shall make no law respecting an establishment of religion, or
      prohibiting the free exercise thereof; or abridging the freedom of speech,
      or of the press; or the right of the people peaceably to assemble, and to
      petition the Government for a redress of grievances.
    </p>
  </div>

  <h2 class="usa-accordion__heading">
    <button
      class="usa-accordion__button"
      aria-expanded="true"
      aria-controls="m-a4"
    >
      Accordion Button
    </button>
  </h2>
  <div id="m-a4" class="usa-accordion__content">
    <p>
      Congress shall make no law respecting an establishment of religion, or
      prohibiting the free exercise thereof; or abridging the freedom of speech,
      or of the press; or the right of the people peaceably to assemble, and to
      petition the Government for a redress of grievances.
    </p>
  </div>

  <h2 class="usa-accordion__heading">
    <button
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="m-a5"
    >
      Accordion Button
    </button>
  </h2>
  <div id="m-a5" class="usa-accordion__content" hidden>
    <p>
      Congress shall make no law respecting an establishment of religion, or
      prohibiting the free exercise thereof; or abridging the freedom of speech,
      or of the press; or the right of the people peaceably to assemble, and to
      petition the Government for a redress of grievances.
    </p>
  </div>
</div>
`,t={title:"Components/Accordion",argTypes:{class:{type:"string"},expanded:{type:"boolean"}}},r=n=>`<div class="usa-accordion ${n.class}">

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

</div>`,o=()=>a,e=r.bind({});e.args={class:"usa-accordion--bordered"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return MultiSelectableAccordion;
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  return \`<div class="usa-accordion \${args.class}">

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

</div>\`;
}`,...e.parameters?.docs?.source}}};const s=["Multiselectable","Bordered"];export{e as Bordered,o as Multiselectable,s as __namedExportsOrder,t as default};
