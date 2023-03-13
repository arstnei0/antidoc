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
