import { globalStyle } from "@vanilla-extract/css"
import { borderRadius, c, combine, hoverEffect, hoverEffectContent, transformScale } from "./$.css"

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
