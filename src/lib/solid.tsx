export * from "solid-js"
import atom from "solid-use/atom"
export { atom }
export * from "solid-use/props"

export type CombineProps<Attr, Props> = Omit<Attr, keyof Props> & Props

import { Component, mergeProps } from "solid-js"
export const component =
	<
		PropsOut,
		DefaultProps extends keyof PropsOut,
		PropsIn = {
			[key in Exclude<keyof PropsOut, DefaultProps>]: PropsOut[key]
		} & {
			[key in DefaultProps]?: PropsOut[key]
		},
	>(
		defaultProps: { [key in DefaultProps]?: PropsOut[key] },
		Comp: Component<PropsOut>,
	): Component<PropsIn> =>
	(props: PropsIn) =>
		(
			// @ts-ignore
			<Comp {...mergeProps(props, defaultProps)} />
		)
