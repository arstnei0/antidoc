import { borderRadius, c, flex, font, globalStyle, s, scale, style } from "style"

export var codeSnippet = style({
	borderRadius,
	position: "relative",
})

globalStyle(`${codeSnippet} *`, {
	fontFamily: font.mono,
	fontSize: `.98em`,
})

globalStyle(`${codeSnippet} ::selection`, {})

export const header = style({
	borderBottom: `1px solid ${c.bg.lighterer}`,
	padding: s.padding.medium,
	backgroundColor: c.bg.light,
	borderRadius: `${borderRadius} ${borderRadius} 0 0`,
})
globalStyle(`${codeSnippet}:hover ${header}`, {
	backgroundColor: `${c.font.primary} !important`,
	color: c.bg.normal,
})

export const headerTitle = style({
	width: "auto",
})

globalStyle(`${codeSnippet} pre`, {
	borderRadius: `0 0 ${borderRadius} ${borderRadius}`,
	padding: s.padding.medium,
	margin: "0",
	backgroundColor: `${c.code.bg} !important`,
})

globalStyle(`${codeSnippet} pre:hover`, {
	backgroundColor: `${c.bg.lighter} !important`,
})

globalStyle(`${codeSnippet} .line`, {
	position: "relative",
	minWidth: "100%",
	display: "inline-block",
	borderRadius: s.br.small,
	padding: "0 .3em",
})
const highlightedLineSelector = `${codeSnippet} .line:is(.ins, .del)`
globalStyle(highlightedLineSelector, {
	textDecoration: "none",
	borderRadius: s.br.small,
})
globalStyle(`${highlightedLineSelector}::before`, {
	position: "absolute",
	left: "-.8em",
})
globalStyle(`${codeSnippet} .line.ins`, { backgroundColor: c.code.ins.bg })
globalStyle(`${codeSnippet} .line.del`, { backgroundColor: c.code.del.bg })
globalStyle(`${codeSnippet} .line.ins::before`, {
	content: "+",
	color: c.code.ins.mark,
})
globalStyle(`${codeSnippet} .line.del::before`, {
	content: "-",
	color: c.code.del.mark,
})
globalStyle(`${codeSnippet} :is(ins, del, mark)`, {
	textDecoration: "none",
	borderRadius: s.br.small,
	padding: "0 .3em",
})
globalStyle(`${codeSnippet} ins`, { backgroundColor: c.code.ins.bg })
globalStyle(`${codeSnippet} del`, { backgroundColor: c.code.del.bg })
globalStyle(`${codeSnippet} mark`, { backgroundColor: c.bg.lightest })

globalStyle(`${codeSnippet} .line.mark`, {
	backgroundColor: c.bg.lightest,
})

export const copyCodeButton = style({
	border: "none",
	outlineColor: "transparent",
	...flex.center,
	width: "2.5em",
	height: "2.5em",
	borderRadius,
	cursor: "pointer",

	position: "absolute",
	right: ".4em",
	top: "2em",

	backgroundColor: c.bg.lighterer,
	color: c.font.primary,
	opacity: 0,
	transform: "translateX(3em)",

	":hover": {
		color: c.bg.lighterer,
		backgroundColor: c.font.primary,
		transform: `${scale} !important`,
	},
})

globalStyle(`${codeSnippet}:has(pre:hover) ${copyCodeButton}, ${copyCodeButton}:hover`, {
	opacity: 1,
	transform: "translateX(0em)",
})

// No title
globalStyle(`${codeSnippet}:not(.has-title) ${header}`, {
	display: "none",
})
globalStyle(`${codeSnippet}:not(.has-title) pre`, {
	borderRadius: `${borderRadius} !important`,
})
globalStyle(`${codeSnippet}:not(.has-title) ${copyCodeButton}`, {
	top: "0em",
})
