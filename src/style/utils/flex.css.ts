import { StyleRule, style } from "@vanilla-extract/css"

export const flexBare = { display: "flex" } satisfies StyleRule
export const flexBase = { ...flexBare, alignItems: "center" } satisfies StyleRule
export const flex = {
	bare: flexBare,
	base: flexBase,
	center: { ...flexBase, justifyContent: "center" },
	between: { ...flexBase, justifyContent: "space-between" },
} as const
