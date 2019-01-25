module.exports = {
	title: "Input Label",
  status: "wip",
  order: 1,
  collated: true,
	variants: [
		{
			"name": "default",
      "label": "Normal",
      "context": {
        "label": "Input label",
        "id": ""
      }
    },
    {
      "name": "Optional",
      "context": {
        "label": "Input label with optional",
        "id": "",
        "optional": true
      }
    }    
	]
};