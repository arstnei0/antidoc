import { JSX } from "solid"
import { header } from "./Header.css"
import { useWindowScrollPosition } from "@solid-primitives/scroll"
import { createEventListener } from "@solid-primitives/event-listener"

export default (props: { children: JSX.Element }) => {
	const currentY = atom(0)
	const previousY = atom(0)
	const fixed = atom(true)

	createEffect(() => {
		if (currentY() > previousY()) fixed(false)
		else fixed(true)
	})

	if (!import.meta.env.SSR)
		createEventListener(window, "scroll", e => {
			batch(() => {
				previousY(currentY())
				currentY(document.documentElement.scrollTop)
			})
		})

	return (
		<header class={header.wrapper} classList={{ [header.wrapperFixed]: fixed() }}>
			{props.children}
		</header>
	)
}
