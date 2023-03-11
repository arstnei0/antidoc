import { StyleRule } from "@vanilla-extract/css"

export * from "./flex.css"
export const combine = (...styles: StyleRule[]) =>
	styles.reduce((acc, curr) => ({ ...acc, ...curr }), {})
