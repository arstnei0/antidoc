import { c, font, globalStyle, s, transition } from "./$.css"

globalStyle("body", {
	backgroundColor: c.bg.normal,
	color: c.font.primary,
	fontFamily: font.sans,
	fontSize: "1.15rem",
	margin: 0,
})

globalStyle("*", {
	transition,
})
