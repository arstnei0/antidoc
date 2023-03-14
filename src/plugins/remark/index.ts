import remarkEmoji from "remark-emoji"
import remarkDirective from "remark-directive"
import remarkToc from "remark-toc"
import { RemarkPlugins } from "astro"
import { RemarkPlugin } from "@astrojs/markdown-remark"
import { directiveClass } from "./directive"
import { remarkCodeSnippet } from "./codeSnippet"

export const remarkPlugins = [
	[remarkEmoji as unknown as RemarkPlugin, {}],
	[remarkDirective, {}],
	[remarkToc, { tight: true }],
	[directiveClass, {}],
	[remarkCodeSnippet(), {}],
] satisfies RemarkPlugins
