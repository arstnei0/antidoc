import {
	c,
	borderRadius,
	transition,
	globalStyle,
	style,
	s,
	recipe,
	RecipeVariants,
	StyleRule,
} from "style"

export const button = recipe({
	base: {
		all: "unset",
		cursor: "pointer",
		borderRadius,
		boxSizing: "border-box",
		transition,
		fontWeight: s.font.weight.important,
		":hover": {
			transform: "scale(1.1)",
		},
		":active": {
			transform: "scale(1.3)",
			filter: "brightness(.8)",
		},
		color: c.font.primary,
		display: "flex",
		alignItems: "center",
	},
	variants: {
		size: {
			medium: {
				padding: s.padding.medium,
				fontSize: s.font.size.important,
			},
			small: {
				padding: s.padding.small,
				fontSize: s.font.size.primary,
			},
			large: {
				padding: s.padding.large,
				fontSize: s.font.size.attention,
			},
		},
		type: {
			text: {
				":hover": {
					backgroundColor: c.bg.lighter,
				},
				":active": {
					backgroundColor: c.font.primary,
					color: c.bg.normal,
				},
			},
			outlined: {
				border: `3px solid ${c.font.primary}55`,
				":hover": {
					backgroundColor: c.font.primary,
					color: c.bg.normal,
				},
			},
			normal: {
				backgroundColor: c.bg.light,
				":hover": {
					backgroundColor: c.font.primary,
					color: c.bg.normal,
				},
			},
			contained: {
				backgroundColor: c.font.primary,
				color: c.bg.normal,
				":hover": {
					backgroundColor: c.bg.lighter,
					color: c.font.primary,
				},
				":active": {
					backgroundColor: c.bg.lightest,
				},
			},
		},
		round: {
			true: {
				padding: ".4em",
				borderRadius: "50%",
			},
			false: {},
		},
	},
	defaultVariants: {
		type: "normal",
		size: "medium",
		round: false,
	},
})
export type ButtonRecipe = NonNullable<RecipeVariants<typeof button>>

export const pointerWrapper = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
})
const arrowWidth = "25px"
const arrowStroke = "4px"

export const pointer = style({
	marginTop: "1px",
	width: arrowWidth,
	background: c.bg.normal,
	borderRadius: "2px",
	height: arrowStroke,
	position: "relative",
	transition: ".3s",
})

globalStyle(`${button}:not(:hover) ${pointer}`, {
	background: c.bg.light,
})

globalStyle(`${button} ${pointer}::before`, {
	content: "",
	boxSizing: "border-box",
	borderColor: c.font.primary,
	borderStyle: "solid",
	position: "absolute",
	borderWidth: `0 ${arrowStroke} ${arrowStroke} 0`,
	display: "inline-block",
	top: "-6px",
	right: "6px",
	transition: ".3s",
	padding: "6px",
	borderRadius: "2px",
	transform: "rotate(-45deg)",
})

globalStyle(`${button}:hover ${pointer}`, {
	transform: "scale(1.5)",
})

globalStyle(`${button}:hover ${pointer}::before`, {
	borderColor: c.bg.normal,
	right: "0",
})

const buttonA = {
	color: "inherit",
	backgroundColor: "inherit",
	padding: "none",
	margin: "inherit",
	gap: "inherit",
	borderRadius: "inherit",
	fontSize: "inherit",
} satisfies StyleRule
globalStyle(`${button} a`, buttonA)
globalStyle(`${button} a::before`, {
	display: "none",
})
globalStyle(`${button} a:hover`, buttonA)
