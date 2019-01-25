module.exports = {
	title: "Form control",
  status: "wip",
  order: 4,
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
        "id": "input-type-text"
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
      "name": "optional",
      "context": {
        "label": "Text input optional",
        "id": "input-type-optional",
        "optional": true
      }
    },
    {
      "name": "help",
      "context": {
        "label": "Text input with help",
        "id": "input-type-help",
        "help": true
      }
    }     
	]
};