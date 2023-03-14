import { flex, globalStyle, style } from "style"
import { header } from "~/components/layout/header/Header.css"

export const docLayout = {
	wrapper: style({
		flex: "1 0 auto",
		display: "flex",
		width: "100%",
		height: "100%",
		top: 0,
	}),

	right: {
		wrapper: style({
			...flex.bare,
			flexWrap: "wrap",
			marginTop: `calc(${header.height} + .1em)`,
			width: "100%",
			marginLeft: `2em`,
		}),
		first: style({
			maxWidth: "75%",
			width: "100%",
			flex: "1 0",
		}),
		second: style({
			flex: "0 0 25%",
			width: "100%",
		}),
	},

	main: style({}),
}

globalStyle(`main`, {
	position: "absolute",
	top: 0,
})
