import { globalStyle, keyframes, style } from "@vanilla-extract/css"
import { borderRadius, c, flex, hoverScale, s, scale, transition } from "~/style/$.css"

const height = "3.25em"
export const header = {
	height,
	wrapper: style([
		flex.between,
		{
			padding: ".45em 1.7em",
			backgroundColor: c.bg.light,
			position: "sticky",
			top: 0,
			height,
			zIndex: 100,
			":hover": { boxShadow: `${c.bg.lighter} 0px 4px 12px;` },
		},
	]),
	wrapperFixed: style({}),

	left: style([flex.center]),
	right: style([flex.center, { gap: ".3em" }]),

	icon: style([hoverScale, { ":hover": { filter: "hue-rotate(90deg)" } }]),

	title: style({
		margin: "0px .3em",
		fontWeight: s.font.weight.head,
		position: "relative",
		overflow: "hidden",
		borderRadius,
		fontSize: s.font.size.attention,
		":hover": {
			transform: scale,
		},
	}),

	titleLink: style([
		{
			display: "inline-block",
			borderRadius,
			padding: "0px .4em",
			color: c.font.primary,
			textDecoration: "none",
			":hover": {
				// backgroundColor: "transparent",
				transform: scale,
				color: c.font.primary,
				// display: "none",
			},
		},
	]),

	item: style({}),
}

globalStyle(`${header.item} a`, {})
globalStyle(`${header.item} a:hover`, {})
globalStyle(`${header.item} h2`, {
	fontWeight: s.font.weight.important,
	fontSize: s.font.size.important,
	padding: s.padding.small,
	borderRadius,
})
globalStyle(`${header.item} h2:hover`, {
	color: c.bg.normal,
	backgroundColor: c.font.secondary,
	transform: "none",
})

globalStyle(`${header.title}::before`, {
	content: "",
	position: "absolute",
	width: "300%",
	height: "300%",
	left: "-200%",
	borderRadius,
	background: `linear-gradient(to right, #ff1b6b, #45caff)`,
	zIndex: -100,
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

globalStyle(`${header.wrapper} a`, { color: c.font.primary })
globalStyle(`${header.wrapper} a:hover`, { color: c.bg.normal })

globalStyle(`${header.wrapper}:not(${header.wrapperFixed})`, {
	transform: "translate3d(0,calc(-100% - 2px),0)",
})
