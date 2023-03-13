import { StyleRule, style } from "@vanilla-extract/css"
import { flex } from "./flex.css"

export * from "./flex.css"
export const combine = (...styles: StyleRule[]) =>
	styles.reduce((acc, curr) => ({ ...acc, ...curr }), {})
