import { RehypePlugins } from "astro"
import { rehypeHeadingIds } from "@astrojs/markdown-remark"
import rehypeSlug from "rehype-slug"
import { rehypeDirective } from "./directive"

export const rehypePlugins = [
	[rehypeHeadingIds, {}],
	[rehypeSlug, {}],
	[rehypeDirective, {}],
] as RehypePlugins
