module.exports = {
	title: "Input Text",
  status: "wip",
  collated: true,
  context: {
    "input": "text",
    "placeholder": ""
  },
	variants: [
		{
			"name": "default",
      "label": "Normal",
      "context": {
        "label": "Text input",
        "id": "input-type-text",
        "value": "This is how text looks"
      }
    },
    {
      "name": "focus",
      "context": {
        "label": "Text input focused",
        "classes": "usa-focus",
        "id": "input-focus"
      }
    },
    {
      "name": "error",
      "context": {
        "label": "Text input error",
        "classes": "error",
        "id": "input-error",
        "error": "Helpful error message"
      }
    },
    {
      "name": "clear",
      "context": {
        "label": "Text input clear",
        "classes": "",
        "id": "input-clear",
        "value": "It has a clear button"
      }
    }     
	]
};