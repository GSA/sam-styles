const e=`<strong>Bordered</strong>
<div class="sds-table__container">
  <table class="sds-table">
    <thead>
      <tr class="sds-table__row">
        <th scope="col">Name</th>
        <th scope="col">Date Last Saved</th>
        <th scope="col">Date Last Run</th>
        <th scope="col">Active</th>
      </tr>
    </thead>
    <tbody>
      <tr class="sds-table__row">
        <td>12345</td>
        <td>mm/dd/yyyy</td>
        <td>Lorem ipsum dolor sit amet</td>
        <td>consectetur adipiscing elit sed do eiusmod</td>
      </tr>
      <tr class="sds-table__row">
        <td>12346</td>
        <td>mm/dd/yyyy</td>
        <td>Lorem ipsum dolor sit amet</td>
        <td>consectetur adipiscing elit sed do eiusmod</td>
      </tr>
      <tr class="sds-table__row">
        <td>12347</td>
        <td>mm/dd/yyyy</td>
        <td>Lorem ipsum dolor sit amet</td>
        <td>consectetur adipiscing elit sed do eiusmod</td>
      </tr>
      <tr class="sds-table__row">
        <td>12348</td>
        <td>mm/dd/yyyy</td>
        <td>Lorem ipsum dolor sit amet</td>
        <td>consectetur adipiscing elit sed do eiusmod</td>
      </tr>
      <tr class="sds-table__row">
        <td>12349</td>
        <td>mm/dd/yyyy</td>
        <td>Lorem ipsum dolor sit amet</td>
        <td>consectetur adipiscing elit sed do eiusmod</td>
      </tr>
      <tr class="sds-table__row">
        <td>12350</td>
        <td>mm/dd/yyyy</td>
        <td>Lorem ipsum dolor sit amet</td>
        <td>consectetur adipiscing elit sed do eiusmod</td>
      </tr>
    </tbody>
  </table>
</div>
<hr />

<strong>
  Borderless
  <strong>
    <div class="sds-table__container sds-table__container--borderless">
      <table class="sds-table">
        <thead>
          <tr class="sds-table__row">
            <th scope="col">Name</th>
            <th scope="col">Date Last Saved</th>
            <th scope="col">Date Last Run</th>
            <th scope="col">Active</th>
          </tr>
        </thead>
        <tbody>
          <tr class="sds-table__row">
            <td>12345</td>
            <td>mm/dd/yyyy</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>consectetur adipiscing elit sed do eiusmod</td>
          </tr>
          <tr class="sds-table__row">
            <td>12346</td>
            <td>mm/dd/yyyy</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>consectetur adipiscing elit sed do eiusmod</td>
          </tr>
          <tr class="sds-table__row">
            <td>12347</td>
            <td>mm/dd/yyyy</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>consectetur adipiscing elit sed do eiusmod</td>
          </tr>
          <tr class="sds-table__row">
            <td>12348</td>
            <td>mm/dd/yyyy</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>consectetur adipiscing elit sed do eiusmod</td>
          </tr>
          <tr class="sds-table__row">
            <td>12349</td>
            <td>mm/dd/yyyy</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>consectetur adipiscing elit sed do eiusmod</td>
          </tr>
          <tr class="sds-table__row">
            <td>12350</td>
            <td>mm/dd/yyyy</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>consectetur adipiscing elit sed do eiusmod</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />

    <strong> Subsections </strong>
    <div class="sds-table__container">
      <table class="sds-table">
        <thead>
          <tr class="sds-table__row">
            <th scope="col">Name</th>
            <th scope="col">Date Last Saved</th>
            <th scope="col">Date Last Run</th>
            <th scope="col">Active</th>
          </tr>
        </thead>
        <tbody class="sds-table__subsection">
          <tr class="sds-table__row">
            <th colspan="4" scope="colgroup">Additional Classifications</th>
          </tr>
          <tr class="sds-table__row">
            <td>12345</td>
            <td>mm/dd/yyyy</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>consectetur adipiscing elit sed do eiusmod</td>
          </tr>
          <tr class="sds-table__row">
            <td>12346</td>
            <td>mm/dd/yyyy</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>consectetur adipiscing elit sed do eiusmod</td>
          </tr>
        </tbody>
        <tbody class="sds-table__subsection">
          <tr class="sds-table__row">
            <th colspan="4" scope="colgroup">Administration</th>
          </tr>
          <tr class="sds-table__row">
            <td>12347</td>
            <td>mm/dd/yyyy</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>consectetur adipiscing elit sed do eiusmod</td>
          </tr>
          <tr class="sds-table__row">
            <td>12348</td>
            <td>mm/dd/yyyy</td>
            <td>Lorem ipsum dolor sit amet</td>
            <td>consectetur adipiscing elit sed do eiusmod</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!--div class="table-example-container">
    <div class="width-mobile">
  <table class="usa-table usa-table--stacked">
    <caption>
      Bordered table
    </caption>
    <thead>
      <tr>
        <th scope="col">Document title</th>
        <th scope="col">Description</th>
        <th scope="col">Year</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th data-label="Document title" scope="row">
          Declaration of Independence
        </th>
        <td data-label="Description">
          Statement adopted by the Continental Congress declaring independence
          from the British Empire.
        </td>
        <td data-label="Year">1776</td>
      </tr>
      <tr>
        <th data-label="Document title" scope="row">Bill of Rights</th>
        <td data-label="Description">
          The first ten amendments of the U.S. Constitution guaranteeing rights
          and freedoms.
        </td>
        <td data-label="Year">1791</td>
      </tr>
      <tr>
        <th data-label="Document title" scope="row">
          Declaration of Sentiments
        </th>
        <td data-label="Description">
          A document written during the Seneca Falls Convention outlining the
          rights that American women should be entitled to as citizens.
        </td>
        <td data-label="Year">1848</td>
      </tr>
      <tr>
        <th data-label="Document title" scope="row">
          Emancipation Proclamation
        </th>
        <td data-label="Description">
          An executive order granting freedom to slaves in designated southern
          states.
        </td>
        <td data-label="Year">1863</td>
      </tr>
    </tbody>
  </table>
</div>

    <div class="width-mobile">
  <table class="usa-table usa-table--stacked usa-table--borderless">
    <caption>
      Stacked borderless table (when on a
      <span class="text-no-wrap">mobile-width</span>
      screen)
    </caption>
    <thead>
      <tr>
        <th scope="col">Document title</th>
        <th scope="col">Description</th>
        <th scope="col">Year</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th data-label="Document title" scope="row">
          Declaration of Independence
        </th>
        <td data-label="Description">
          Statement adopted by the Continental Congress declaring independence
          from the British Empire.
        </td>
        <td data-label="Year">1776</td>
      </tr>
      <tr>
        <th data-label="Document title" scope="row">Bill of Rights</th>
        <td data-label="Description">
          The first ten amendments of the U.S. Constitution guaranteeing rights
          and freedoms.
        </td>
        <td data-label="Year">1791</td>
      </tr>
      <tr>
        <th data-label="Document title" scope="row">
          Declaration of Sentiments
        </th>
        <td data-label="Description">
          A document written during the Seneca Falls Convention outlining the
          rights that American women should be entitled to as citizens.
        </td>
        <td data-label="Year">1848</td>
      </tr>
      <tr>
        <th data-label="Document title" scope="row">
          Emancipation Proclamation
        </th>
        <td data-label="Description">
          An executive order granting freedom to slaves in designated southern
          states.
        </td>
        <td data-label="Year">1863</td>
      </tr>
    </tbody>
  </table>
</div>

    <div class="width-mobile">
  <table class="usa-table usa-table--stacked-header">
    <caption>
      Stacked bordered table with headers (when on a mobile-width screen)
    </caption>
    <thead>
      <tr>
        <th scope="col">Document title</th>
        <th scope="col">Description</th>
        <th scope="col">Year</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th data-label="Document title" scope="row">
          Declaration of Independence
        </th>
        <td data-label="Description">
          Statement adopted by the Continental Congress declaring independence
          from the British Empire.
        </td>
        <td data-label="Year">1776</td>
      </tr>
      <tr>
        <th data-label="Document title" scope="row">Bill of Rights</th>
        <td data-label="Description">
          The first ten amendments of the U.S. Constitution guaranteeing rights
          and freedoms.
        </td>
        <td data-label="Year">1791</td>
      </tr>
      <tr>
        <th data-label="Document title" scope="row">
          Declaration of Sentiments
        </th>
        <td data-label="Description">
          A document written during the Seneca Falls Convention outlining the
          rights that American women should be entitled to as citizens.
        </td>
        <td data-label="Year">1848</td>
      </tr>
      <tr>
        <th data-label="Document title" scope="row">
          Emancipation Proclamation
        </th>
        <td data-label="Description">
          An executive order granting freedom to slaves in designated southern
          states.
        </td>
        <td data-label="Year">1863</td>
      </tr>
    </tbody>
  </table>
</div>

    <div class="width-mobile">
  <table class="usa-table usa-table--stacked-header usa-table--borderless">
    <caption>
      Stacked borderless table with headers (when on a mobile-width screen)
    </caption>
    <thead>
      <tr>
        <th scope="col">Document title</th>
        <th scope="col">Description</th>
        <th scope="col">Year</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th data-label="Document title" scope="row">
          Declaration of Independence
        </th>
        <td data-label="Description">
          Statement adopted by the Continental Congress declaring independence
          from the British Empire.
        </td>
        <td data-label="Year">1776</td>
      </tr>
      <tr>
        <th data-label="Document title" scope="row">Bill of Rights</th>
        <td data-label="Description">
          The first ten amendments of the U.S. Constitution guaranteeing rights
          and freedoms.
        </td>
        <td data-label="Year">1791</td>
      </tr>
      <tr>
        <th data-label="Document title" scope="row">
          Declaration of Sentiments
        </th>
        <td data-label="Description">
          A document written during the Seneca Falls Convention outlining the
          rights that American women should be entitled to as citizens.
        </td>
        <td data-label="Year">1848</td>
      </tr>
      <tr>
        <th data-label="Document title" scope="row">
          Emancipation Proclamation
        </th>
        <td data-label="Description">
          An executive order granting freedom to slaves in designated southern
          states.
        </td>
        <td data-label="Year">1863</td>
      </tr>
    </tbody>
  </table>
</div>
</div--></strong
  ></strong
>
`,d=`<div class="sds-tree-table--scrollable">
  <table class="usa-table sds-tree-table">
    <thead>
      <tr>
        <th scope="col"><span class="usa-sr-only">Expand/collapse</span></th>
        <th scope="col">Entity</th>
        <th scope="col">Status</th>
        <th scope="col">Expiration</th>
      </tr>
    </thead>
    <tbody>
      <!-- Level 1 expandable row -->
      <tr aria-level="1" aria-expanded="true" class="text-left">
        <td>
          <button class="usa-button usa-button--unstyled" aria-label="collapse">
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              class="usa-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g class="expanded"><path d="M19 13H5v-2h14v2z" /></g>
            </svg>
          </button>
        </td>
        <td>Parent Entity A</td>
        <td>Active</td>
        <td>12/31/2025</td>
      </tr>
      <!-- Level 2 child row -->
      <tr aria-level="2" class="text-left">
        <td>
          <div class="vertical-border"></div>
          <div class="horizontal-border"></div>
        </td>
        <td>Child Entity B</td>
        <td>Active</td>
        <td>06/30/2025</td>
      </tr>
      <!-- Level 2 selected row -->
      <tr aria-level="2" class="sds-tree-table__row--selected text-left">
        <td>
          <div class="vertical-border"></div>
          <div class="horizontal-border"></div>
        </td>
        <td>Child Entity C (selected)</td>
        <td>Inactive</td>
        <td>01/01/2024</td>
      </tr>
      <!-- Level 1 non-expandable row -->
      <tr aria-level="1" class="text-left">
        <td></td>
        <td>Standalone Entity D</td>
        <td>Active</td>
        <td>03/15/2026</td>
      </tr>
    </tbody>
  </table>
</div>
`,a={title:"Components"},t=()=>e,n=()=>d;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return Table;
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return TreeTable;
}`,...n.parameters?.docs?.source}}};const s=["Tables","TreeTables"];export{t as Tables,n as TreeTables,s as __namedExportsOrder,a as default};
