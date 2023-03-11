import { StyleRule, c, combine } from "../$.css"

export const scale = `scale(1.1)` as const
export const transformScale = { transform: scale } satisfies StyleRule
export const hoverScale = { ":hover": transformScale } satisfies StyleRule

export const reverseBg = {
	backgroundColor: c.font.primary,
	color: c.font.primary,
} satisfies StyleRule
export const hoverReverseBg = {
	":hover": reverseBg,
} satisfies StyleRule

export const hoverEffect = combine(hoverScale, hoverReverseBg)
export const hoverEffectContent = hoverEffect[":hover"] as StyleRule
