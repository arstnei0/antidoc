import {
	borderRadius,
	c,
	flex,
	globalStyle,
	keyframes,
	s,
	style,
	transformScale,
	transition,
	transitionFn,
} from "style"
import { header } from "../../header/Header.css"

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
		fontSize: "1.5em",
	}),

	item: {
		wrapper: style({
			overflow: "visible",
		}),
		base: style({
			cursor: "pointer",
			backgroundColor: c.bg.normal,
			borderRadius: borderRadius,
			margin: ".15em .25em",
			height: "2.2em",
			...flex.between,
			willChange: "height",
			overflow: "visible",
			":hover": {
				backgroundColor: c.font.primary,
				color: c.bg.normal,
				transform: "scale(1.05)",
			},
		}),
		left: style({
			flexGrow: "1",
			// minWidth: "100%",
		}),
		now: style({}),
		parent: style({}),
		children: style({
			marginLeft: "1em",
			overflowY: "visible",
			overflowX: "visible",
			display: "block",
			transition: `height ${transitionDuration}ms ${transitionFn}`,
		}),
		hidden: style({
			overflowY: "hidden",
			height: "0px",
		}),
		toggleButton: style({
			outlineColor: "transparent",
			border: "none",
			backgroundColor: "inherit",
			cursor: "pointer",
			color: "inherit",
			...flex.center,
			borderRadius,
			width: "3.5em",
			height: "3.5em",
			":hover": {
				filter: "brightness(1.1)",
				transform: "scale(1.3)",
			},
			":active": { transform: "scale(1.4)" },
		}),
		toggleButtonOpen: style({
			transform: "rotate(90deg)",
			":hover": { transform: "rotate(90deg) scale(1.3)" },
			":active": { transform: "rotate(90deg) scale(1.4)" },
		}),
		current: style({
			color: c.font.accent,
			backgroundColor: c.bg.light,
		}),
	},
}

globalStyle(`${leftSidebar.wrapper} h2`, {
	fontWeight: 500,
	fontSize: s.font.size.primary,
	padding: ".2em .6em",
	margin: 0,
})
