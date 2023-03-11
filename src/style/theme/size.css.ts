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
			secondary: "1.1em",
			primary: "1.25em",
			important: "1.45em",
			attention: "1.65em",
		},
		weight: {
			normal: 400,
			important: 500,
			head: 700,
		},
	},
} as const
export const borderRadius = s.br.normal
