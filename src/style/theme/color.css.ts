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
		accent: "#A6E3E9",
	},
	primary: "#609966",
})

// Light theme
createGlobalTheme(".l", c, {
	bg: {
		normal: "#123456",
		light: "#1a1a1a",
		lighter: "#242424",
		lighterer: "#363636",
		lightest: "#696969",
	},
	font: {
		primary: "#EEEEEE",
		accent: "#A6E3E9",
	},
	primary: "#609966",
})
