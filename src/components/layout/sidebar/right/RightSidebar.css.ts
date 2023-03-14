import { c, calc, globalStyle, style } from "style"

export const wrapper = style({
	position: "sticky",
	top: 0,
	maxHeight: "80vh",
	fontSize: ".65em",
	borderLeft: `1.5px solid ${c.bg.lighter}`,
	padding: `1.6em 0`,
	overflowY: "scroll",
	overflowX: "visible",
})

export const heading = style({
	margin: `.1em .3em`,
})
export const headingCurrent = style({
	color: c.font.accent,
})

globalStyle(`${wrapper} a`, { color: "inherit" })
globalStyle(`${wrapper} a:hover`, { color: c.bg.normal, backgroundColor: c.font.primary })

globalStyle(`${wrapper} :is(h1, h2, h3, h4, h5, h6)`, {
	fontWeight: "500",
	margin: 0,
})
globalStyle(`${wrapper}:has(${heading}:hover) ${heading}`, { opacity: 0.8 })
globalStyle(`${heading}:hover`, { opacity: "1 !important" })
