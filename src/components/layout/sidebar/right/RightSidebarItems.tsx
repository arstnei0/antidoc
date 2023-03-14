import type { MarkdownHeading } from "astro"
import { onCleanup } from "solid-js"
import * as css from "./RightSidebar.css"
import RightSidebarItem from "./RightSidebarItem"

export default (props: { headings: MarkdownHeading[] }) => {
	const currentHeading = atom({ slug: props.headings[0].slug })
	let cleanup = () => {}

	// * Credit: Thanks to Astro Docs' team
	// * Source: https://github.com/withastro/docs/blob/main/src/components/RightSidebar/TableOfContents.tsx#LL66
	onMount(() => {
		const setCurrent: IntersectionObserverCallback = (entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					const { id } = entry.target
					currentHeading({
						slug: id,
					})
					break
				}
			}
		}

		const observerOptions: IntersectionObserverInit = {
			// Negative top margin accounts for `scroll-margin`.
			// Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
			rootMargin: "-100px 0% -66%",
			threshold: 1,
		}

		const headingsObserver = new IntersectionObserver(setCurrent, observerOptions)

		// Observe all the headings in the main page content.
		document
			.querySelectorAll("article :is(h1,h2,h3)")
			.forEach((h) => headingsObserver.observe(h))

		// Stop observing when the component is unmounted.
		cleanup = () => headingsObserver.disconnect()
	})

	onCleanup(() => cleanup())

	return (
		<nav class={css.wrapper}>
			<For each={props.headings}>
				{(heading) => (
					<RightSidebarItem
						heading={heading}
						current={heading.slug === currentHeading().slug}
					/>
				)}
			</For>
		</nav>
	)
}
