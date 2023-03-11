import { globalStyle, keyframes, style } from "@vanilla-extract/css"
import {
	borderRadius,
	c,
	combine,
	flex,
	hoverEffect,
	hoverScale,
	s,
	transformScale,
	transition,
	transitionFn,
} from "~/style/$.css"

export const header = {
	wrapper: style([
		flex.between,
		{
			padding: ".7em 1.7em",
			backgroundColor: c.bg.light,
			position: "sticky",
			top: 0,
			":hover": {
				boxShadow: `${c.bg.lighter}BB 0px 4px 12px;`,
			},
		},
	]),
	wrapperFixed: style({}),

	left: style([flex.center]),
	right: style([flex.center]),

	icon: style([hoverScale, { ":hover": { filter: "hue-rotate(90deg)" } }]),

	title: style({
		margin: "0px .3em",
		fontWeight: s.font.weight.head,
		position: "relative",
		overflow: "hidden",
		borderRadius,
		...hoverScale,
	}),

	titleLink: style([
		hoverScale,
		{
			display: "inline-block",
			borderRadius,
			padding: "0px .4em",
			color: c.font.primary,
			textDecoration: "none",
			":hover": {
				backgroundColor: "transparent",
				color: c.font.primary,
			},
		},
	]),

	item: style({}),
}

globalStyle(`${header.title}::before`, {
	content: "",
	position: "absolute",
	width: "300%",
	height: "300%",
	left: "-200%",
	borderRadius,
	background: `linear-gradient(to right, #ff1b6b, #45caff)`,
	zIndex: -10,
	opacity: 0,
	transition,
})
const slideIn = keyframes({
	"0%": {
		left: "0%",
	},
	"50%": {
		left: "-200%",
	},
	"100%": {
		left: "0%",
	},
})
globalStyle(`${header.title}:hover::before`, {
	opacity: 1,
	animation: `6s linear 0s ${slideIn} infinite`,
})

globalStyle(`${header.wrapper}:not(${header.wrapperFixed})`, {
	transform: "translateY(-100%)",
})
