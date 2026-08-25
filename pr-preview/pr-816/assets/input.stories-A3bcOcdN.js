import{r as e}from"./preload-helper-Dl2UHooj.js";var t,n,r,i;e((()=>{t={title:`Form Elements/Input`,argTypes:{label:{type:`string`},classTypes:{control:{type:`select`},options:[``,`usa-focus`,`usa-input--error`,`usa-input--success`]}}},n=e=>` 
  <form class="usa-form">
    <label class="usa-label" for="input-type-text">Text input label</label>
    <input class="usa-input" id="input-type-text" name="input-type-text" type="text">

    <label class="usa-label" for="input-focus">Text input focused</label>
    <input class="usa-input usa-focus" id="input-focus" name="input-focus" type="text">

    <div class="usa-form-group usa-form-group--error">
        <label class="usa-label usa-label--error" for="input-error">Text input error</label>
        <span class="usa-error-message" id="input-error-message" role="alert">Helpful error message</span>
        <input class="usa-input usa-input--error" id="input-error" name="input-error" type="text" aria-describedby="input-error-message">
    </div>

    <label class="usa-label" for="input-success">Text input success</label>
    <div class="usa-label--description">Description</div>
    <input class="usa-input usa-input--success" id="input-success" name="input-success" type="text">

    <label class="usa-label usa-label--disabled" for="input-disabled">Text input disabled</label>
    <input class="usa-input usa-input--disabled" id="input-disabled" name="input-disabled" type="text">

    <label class="usa-label" for="input-type-textarea">Text area label</label>

    <textarea class="usa-textarea" id="input-type-textarea" name="input-type-textarea"></textarea>
</form>
`,r=n.bind({}),r.args={label:`Text input label`},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  return \` 
  <form class="usa-form">
    <label class="usa-label" for="input-type-text">Text input label</label>
    <input class="usa-input" id="input-type-text" name="input-type-text" type="text">

    <label class="usa-label" for="input-focus">Text input focused</label>
    <input class="usa-input usa-focus" id="input-focus" name="input-focus" type="text">

    <div class="usa-form-group usa-form-group--error">
        <label class="usa-label usa-label--error" for="input-error">Text input error</label>
        <span class="usa-error-message" id="input-error-message" role="alert">Helpful error message</span>
        <input class="usa-input usa-input--error" id="input-error" name="input-error" type="text" aria-describedby="input-error-message">
    </div>

    <label class="usa-label" for="input-success">Text input success</label>
    <div class="usa-label--description">Description</div>
    <input class="usa-input usa-input--success" id="input-success" name="input-success" type="text">

    <label class="usa-label usa-label--disabled" for="input-disabled">Text input disabled</label>
    <input class="usa-input usa-input--disabled" id="input-disabled" name="input-disabled" type="text">

    <label class="usa-label" for="input-type-textarea">Text area label</label>

    <textarea class="usa-textarea" id="input-type-textarea" name="input-type-textarea"></textarea>
</form>
\`;
}`,...r.parameters?.docs?.source}}},i=[`Input`]}))();export{r as Input,i as __namedExportsOrder,t as default};