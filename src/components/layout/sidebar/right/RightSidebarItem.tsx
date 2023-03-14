import type { MarkdownHeading } from "astro"
import { Dynamic } from "solid-js/web"
import * as css from "./RightSidebar.css"

const headingTags = ["h1", "h2", "h3", "h4", "h5", "h6"] as const

export default (props: { heading: MarkdownHeading; current: boolean }) => {
	const headingTag = headingTags[props.heading.depth]

	return (
		<div
			class={css.heading}
			classList={{ [css.headingCurrent]: props.current }}
			style={{
				"--depth": `${props.heading.depth}`,
				"margin-left": `${props.heading.depth * 1.2}em`,
			}}
		>
			<a href={`#${props.heading.slug}`}>
				<Dynamic component={headingTag}>{props.heading.text}</Dynamic>
			</a>
		</div>
	)
}
