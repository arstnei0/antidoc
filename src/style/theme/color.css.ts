import { createGlobalTheme, createTheme } from "@vanilla-extract/css"

// Dark theme
export const c = createGlobalTheme(".d", {
	bg: {
		normal: "#121212",
		light: "#1a1a1a",
		lighter: "#242424",
		lighterer: "#363636",
		lightest: "#696969",
	},
	font: {
		primary: "#EEEEEE",
		secondary: "#E0E0E0",
		accent: "#A6E3E9",
	},
	primary: "#609966",
	code: {
		ins: { bg: "#60996666", mark: "#9DC08B" },
		del: { bg: "#CD0404", mark: "#F48484" },
		bg: "#1a1a1a",
	},
})

// Light theme
createGlobalTheme(".l", c, {
	bg: {
		normal: "#FFFFFF",
		light: "#F8F8F8",
		lighter: "#EEEEEE",
		lighterer: "#E6E6E6",
		lightest: "#DDDDDD",
	},
	font: {
		primary: "#272727",
		secondary: "#292929",
		accent: "#7286D3",
	},
	primary: "#609966",
	code: {
		ins: { bg: "#60996666", mark: "#609966" },
		del: { bg: "#F55050", mark: "#F48484" },
		bg: "#1a1a1a",
	},
})
