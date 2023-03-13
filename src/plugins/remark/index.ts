import remarkEmoji from "remark-emoji"
import remarkDirective from "remark-directive"
import { RemarkPlugins } from "astro"
import { RemarkPlugin } from "@astrojs/markdown-remark"
import { directiveClass } from "./directive"

export const remarkPlugins = [
	[remarkEmoji as RemarkPlugin, {}],
	[remarkDirective, {}],
	[directiveClass, {}],
] satisfies RemarkPlugins
