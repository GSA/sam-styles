module.exports = {
	title: "Autocomplete",
	status: "wip",
	context: {
		"results": 10
	},
	variants: [
		{
			"name": "default",
			"label": "Normal",
			"context": {
				"show": false,
			}
		},
		{
			"name": "Open",
			"label": "Open",
			"context": {
				"show": true,
				"resultSelected": true,
				"value": "Level 4"
			}
		},
		{
			"name": "Single",
			"label": "Single Selected",
			"context": {
				"value": "Level 1"
			}
		},
		{
			"name": "multiple",
			"label": "Multiple Selected"
		},
	]
};