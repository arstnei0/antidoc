import { c, flex, font, globalStyle, s, transition } from "./$.css"

globalStyle("body, html", {
	height: "100%",
})

globalStyle("body", {
	backgroundColor: c.bg.normal,
	color: c.font.primary,
	fontFamily: font.sans,
	fontSize: "1.15rem",
	margin: 0,
	display: "flex",
	flexDirection: "column",
	position: "relative",
})

globalStyle("main", {
	...flex.bare,
	flexDirection: "column",
	minHeight: "100%",
	minWidth: "100%",
})

globalStyle("*", {
	transition,
	boxSizing: "border-box",
})

globalStyle(".center", { ...flex.center })
globalStyle(".text-center", { textAlign: "center" })

// Scrollbar
globalStyle("body", {
	scrollbarColor: "var(--sb-thumb-color) var(--sb-track-color)",
	vars: {
		"--sb-track-color": c.bg.light,
		"--sb-thumb-color": c.bg.lighterer,
		"--sb-thumb-color-hover": c.bg.lightest,
		"--sb-size": "9px",
	},
})
globalStyle("body::-webkit-scrollbar", {
	width: "var(--sb-size)",
})
globalStyle("body::-webkit-scrollbar-thumb", {
	background: "var(--sb-thumb-color)",
	borderRadius: "3px",
})
globalStyle("body::-webkit-scrollbar-thumb:hover", {
	background: "var(--sb-thumb-color-hover)",
})
globalStyle("body::-webkit-scrollbar-track", {
	background: "var(--sb-track-color)",
	borderRadius: "3px",
})
