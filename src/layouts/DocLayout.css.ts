import { flex, globalStyle, style } from "style"
import { header } from "~/components/layout/header/Header.css"
import { leftSidebar } from "~/components/layout/sidebar/LeftSidebar.css"

export const docLayout = {
	wrapper: style({
		flex: "1 0 auto",
		display: "flex",
		width: "100%",
		height: "100%",
		top: 0,
	}),

	main: style({
		marginLeft: `2em`,
		marginTop: `calc(${header.height} + .1em)`,
	}),
}

globalStyle(`main`, {
	position: "absolute",
	top: 0,
})
