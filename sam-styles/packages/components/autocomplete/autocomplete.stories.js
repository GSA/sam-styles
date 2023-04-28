export default {
    title: "Components/AutoComplete",
  };
  const Template = () => {
    return `<ul class="sds-autocomplete sds-list--no-bullets" role="listbox">
    <li role="option" class="sds-autocomplete__group">
      <div class="sds-autocomplete__item">FORMULA GRANTS</div>
      <ul class ="sds-list--no-bullets">
        <li class="sds-autocomplete__item">Formula Grants</li>
        <li class="sds-autocomplete__item">Formula Grants (Apportionments)</li>
        <li class="sds-autocomplete__item">Formula Grants (Cooperative Agreements)</li>
        <li class="sds-autocomplete__group">
          <div class="sds-autocomplete__item sds-autocomplete__item--disabled">Formula Grants (Health Incentive Grants) [disabled]</div>
          <ul ul class ="sds-list--no-bullets">
            <li class="sds-autocomplete__item sds-autocomplete__item--selected">Option 1 [selected]</li>
            <li class="sds-autocomplete__item">Option 2</li>
            <li class="sds-autocomplete__item sds-autocomplete__item--highlighted">Option 3 [highlighted]</li>
  
            <li class="sds-autocomplete__item">
              <span class="display-block text-semibold">Multiline Example</span>
              <span>Option 4</span>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li role="option" class="sds-autocomplete__group">
      <div class="sds-autocomplete__item sds-autocomplete__item--highlighted">PROJECT GRANTS [highlighted]</div>
      <ul ul class ="sds-list--no-bullets">
        <li class="sds-autocomplete__item">Cooperative Agreements</li>
        <li class="sds-autocomplete__item">Cooperative Agreements (Discretionary Grants)</li>
        <li class="sds-autocomplete__item">Project Grants</li>
        <li class="sds-autocomplete__item">Project Grants (Capacity Building and Complaint Processing, Training)</li>
        <li class="sds-autocomplete__item">Project Grants (Contracts)</li>
        <li class="sds-autocomplete__item">Project Grants (Cooperative Agreements or Contracts)</li>
        <li class="sds-autocomplete__item">Project Grants (Cooperative Agreements)</li>
        <li class="sds-autocomplete__item">Project Grants (Discretionary)</li>
      </ul>
    </li>
    <li role="option" class="sds-autocomplete__group">
      <div class="sds-autocomplete__item  sds-autocomplete__item--selected">DIRECT PAYMENTS FOR A SPECIFIED USE [selected]</div>
      <ul ul class ="sds-list--no-bullets">
        <li class="sds-autocomplete__item">Direct Payments for Specified Use</li>
        <li class="sds-autocomplete__item">Direct Payments for Specified Use (Cooperative Agreements)</li>
      </ul>
    </li>
    <li role="option" class="sds-autocomplete__group">
      <div class="sds-autocomplete__item">DIRECT PAYMENTS WITH UNRESTRICTED USE</div>
      <ul ul class ="sds-list--no-bullets">
        <li class="sds-autocomplete__item">Direct Payments with Unrestricted Use</li>
      </ul>
    </li>
    <li role="option" class="sds-autocomplete__group">
      <div class="sds-autocomplete__item">DIRECT LOANS</div>
      <ul ul class ="sds-list--no-bullets">
        <li class="sds-autocomplete__item">Direct Loans</li>
      </ul>
    </li>
    <li role="option" class="sds-autocomplete__group">
      <div class="sds-autocomplete__item">GUARANTEED/INSURED LOANS</div>
      <ul ul class ="sds-list--no-bullets">
        <li class="sds-autocomplete__item">Guaranteed/Insured Loans</li>
        <li class="sds-autocomplete__item">Guaranteed/Insured Loans (including Guaranty Participation Loans)</li>
        <li class="sds-autocomplete__item">Guaranteed/Insured Loans (including Immediate Participation Loans)</li>
        <li class="sds-autocomplete__item">Loan Guarantees/Grants</li>
      </ul>
    </li>
    <li role="option" class="sds-autocomplete__group">
      <div class="sds-autocomplete__item">INSURANCE</div>
      <ul ul class ="sds-list--no-bullets">  
        <li class="sds-autocomplete__item">Insurance</li>
        <li class="sds-autocomplete__item">Insurance (Guaranteed Surety Bonds)</li>
        <li class="sds-autocomplete__item">Insurance (Reimbursement)</li>
      </ul>
    </li>
    <li role="option" class="sds-autocomplete__group">
      <div class="sds-autocomplete__item">SALE, EXCHANGE, OR DONATION OF PROPERTY OR GOODS</div>
      <ul ul class ="sds-list--no-bullets">
        <li class="sds-autocomplete__item">Sale, Exchange, or Donation of Property and Goods</li>
      </ul>
    </li>
  </ul>
  `;
  };
  export const AutoComplete = Template.bind({});
  