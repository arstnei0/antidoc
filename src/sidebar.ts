export const sidebar: SidebarItem[] = [
	{ slug: "get-started", title: "Get Started" },
	{
		slug: "markdown",
		title: "Markdown",
		children: [
			{ slug: "markdown/features", title: "Markdown Features" },
			{
				slug: "markdown/code-blocks",
				title: "Code Blocks",
			},
		],
	},
]

import type { CollectionEntry } from "astro:content"

export type Slug = CollectionEntry<"docs">["slug"]
export type SidebarItem = { title: string } & (
	| { slug: string; children: SidebarItem[] }
	| { slug: Slug; children?: void }
)
