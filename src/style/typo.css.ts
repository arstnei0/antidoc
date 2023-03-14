import { globalStyle } from "@vanilla-extract/css"
import {
	borderRadius,
	c,
	combine,
	font,
	hoverEffect,
	hoverEffectContent,
	s,
	transformScale,
} from "./$.css"
import "./directive.css"

const a = "a"

globalStyle(a, {
	display: "inline-flex",
	alignItems: "center",
	gap: ".3em",
	textDecoration: "none",
	color: c.font.accent,
	padding: ".1em .5em",
	borderRadius,
})
globalStyle(`${a}:hover`, {
	backgroundColor: c.font.accent,
	color: c.bg.normal,
	...transformScale,
})

export const codeClass = ".astro-code"

globalStyle("p", {
	fontSize: s.font.size.primary,
})

// globalStyle(`.astro-code`, {
// 	padding: s.padding.medium,
// 	borderRadius,
// 	fontFamily: font.mono,
// 	overflowX: "scroll",
// })
// globalStyle(`.astro-code *`, {
// 	fontSize: s.font.size.secondary,
// 	tabSize: "1.7em",
// })

globalStyle(`h1, h2, h3, h4, h5, h6`, { fontWeight: s.font.weight.head })
globalStyle(`h1`, { fontSize: s.font.size.h1 })
// globalStyle(`h1`, { fontSize: s.font.size.h1 })
