export const s = {
	// Border Radius
	br: {
		normal: "8px",
		large: "16px",
	},

	// Spacing
	padding: {
		small: "5px 15px",
		medium: "9px 27px",
		large: "11px 32px",
	},
	margin: {
		small: ".2em 0px",
		medium: ".6em 0px",
		large: "1em 0px",
	},

	// Font Size
	font: {
		size: {
			secondary: ".95em",
			primary: "1.1em",
			important: "1.3em",
			attention: "1.5em",
			h1: "2.5rem",
		},
		weight: {
			normal: 400,
			important: 500,
			head: 700,
		},
	},
} as const
export const borderRadius = s.br.normal
