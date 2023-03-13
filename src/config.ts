import { Slug } from "./sidebar"

export const config = {
	siteUrl: "https://antidoc.pages.dev/",
	favicon: "/favicon.svg",
	title: "Antidoc",
	titleSeparator: " 🚀 ",
	links: { github: "https://github.com/zihan-ch/antidoc" },
	docs: { index: "get-started" as Slug },
} as const

export * from "./sidebar"
