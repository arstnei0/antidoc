// Astro Integrations
import solid from "@astrojs/solid-js"
import mdx from "@astrojs/mdx"
import autoImport from "astro-auto-import"
import vanillaExtract from "astro-vanilla-extract"
import compress from "astro-compress"

// Vite Plugins
import civet from "vite-plugin-civet"
import autoImportVite from "unplugin-auto-import/vite"
import icons from "unplugin-icons/vite"

// Remark and Rehype Plugins
import { remarkPlugins } from "./src/plugins/remark"
import { rehypePlugins } from "./src/plugins/rehype"
import { codeSnippetAutoImport } from "./src/plugins/remark/codeSnippet"

// Config
import { config } from "./src/config"

import { defineConfig } from "astro/config"
import type { AstroIntegration } from "astro"

export default defineConfig({
	markdown: {
		shikiConfig: { theme: "material-ocean" },
		remarkPlugins,
		rehypePlugins,
	},
	site: config.siteUrl,
	integrations: [
		autoImport({ imports: [codeSnippetAutoImport] }),
		solid(),
		mdx({}) as AstroIntegration,
		vanillaExtract(),
		compress(),
	],
	experimental: { assets: true },
	vite: {
		plugins: [
			civet(),
			autoImportVite({
				imports: [
					{
						solid: [
							"atom",
							"createEffect",
							"createMemo",
							"onMount",
							"Show",
							"For",
							"mergeProps",
							"splitProps",
							"batch",
						],
					},
				],
				dts: "./src/auto-import.generated.d.ts",
			}),
			icons({ compiler: "astro", autoInstall: true }),
		],
		resolve: { alias: { style: "/src/style/theme/$.css", solid: "/src/lib/solid" } },
	},
})
