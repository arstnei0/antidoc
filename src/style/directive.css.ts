import { flex, globalStyle, style, s, borderRadius } from "style"

globalStyle(".directive-wrapper", {
	...flex.bare,
	flexDirection: "column",
	borderRadius,
	padding: s.padding.small,
	minWidth: "100%",
	margin: s.margin.medium,
})
globalStyle(".directive-wrapper:hover", {
	filter: "brightness(1.2)",
})
globalStyle(".directive-header-wrapper", {
	...flex.base,
})
globalStyle(".directive-header-icon", { ...flex.base })
const iconSize = "1.5em"
globalStyle(".directive-header-icon svg", { width: iconSize, height: iconSize })
globalStyle(".directive-header-name", {
	margin: 0,
	marginLeft: ".5em",
	fontWeight: s.font.weight.important,
	fontSize: "1.5em",
})
globalStyle(".directive-content>*", { padding: ".4em 0px" })
globalStyle(".directive-content>*", { margin: 0 })

globalStyle(".directive-wrapper.note", { backgroundColor: "#313131" })
globalStyle(".directive-wrapper.caution", { backgroundColor: "#4d3800" })
globalStyle(".directive-wrapper.danger", { backgroundColor: "#4b1113" })
globalStyle(".directive-wrapper.tip", { backgroundColor: "#003100" })
globalStyle(".directive-wrapper.info", { backgroundColor: "#193c47" })
