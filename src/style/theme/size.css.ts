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

	// Font Size
	font: {
		size: {
			secondary: "1em",
			primary: "1.1em",
			important: "1.3em",
			attention: "1.5em",
		},
		weight: {
			normal: 400,
			important: 500,
			head: 700,
		},
	},
} as const
export const borderRadius = s.br.normal
