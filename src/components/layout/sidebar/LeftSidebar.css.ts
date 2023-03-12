import {
	borderRadius,
	c,
	flex,
	globalStyle,
	keyframes,
	s,
	style,
	transition,
	transitionFn,
} from "style"
import { header } from "../header/Header.css"

const width = "17em"
const transitionDuration = 400
export const leftSidebar = {
	transitionDuration,
	width,
	wrapper: style({
		willChange: "width",
		position: "sticky",
		top: 0,
		minWidth: width,
		maxHeight: "100vh",
		minHeight: "100%",
		borderRight: `2px solid ${c.bg.lighter}`,
		overflow: "scroll",
	}),

	titleWrapper: style({
		...flex.base,
		height: header.height,
		marginBlock: ".1em",
		padding: ".3em .7em",
	}),

	title: style({
		margin: 0,
		flexGrow: "1",
		textAlign: "center",
	}),

	item: {
		wrapper: style({}),
		base: style({
			cursor: "pointer",
			backgroundColor: c.bg.normal,
			borderRadius: borderRadius,
			margin: ".1em .2em",
			height: "2.3em",
			...flex.between,
			willChange: "height",
			overflow: "visible",
			":hover": {
				backgroundColor: c.bg.light,
			},
		}),
		now: style({}),
		parent: style({}),
		children: style({
			marginLeft: "1em",
			overflow: "hidden",
			display: "block",
			transition: `height ${transitionDuration}ms ${transitionFn}`,
		}),
		hidden: style({
			overflow: "hidden",
			height: "0px",
		}),
		toggleButton: style({
			outlineColor: "transparent",
			border: "none",
			backgroundColor: "inherit",
			cursor: "pointer",
			color: c.font.primary,
			...flex.center,
			borderRadius,
			width: "5em",
			height: "100%",
			":hover": {
				backgroundColor: c.bg.lighter,
			},
		}),
	},
}

globalStyle(`${leftSidebar.wrapper} h2`, {
	fontWeight: 500,
	fontSize: s.font.size.primary,
	padding: ".2em .6em",
	margin: 0,
})
