import { defineConfig } from "astro/config"
import type { AstroIntegration } from "astro"
import solid from "@astrojs/solid-js"
import mdx from "@astrojs/mdx"
import civet from "vite-plugin-civet"
import autoImport from "astro-auto-import"
import vanillaExtract from "astro-vanilla-extract"
import autoImportVite from "unplugin-auto-import/vite"
import icons from "unplugin-icons/vite"
import { config } from "./src/config"

// Remark Plugins
import admonitions from "./plugins/admonitions"

export default defineConfig({
	markdown: {
		shikiConfig: { theme: "dracula" },
		remarkPlugins: [],
	},
	site: config.siteUrl,
	integrations: [
		autoImport({
			imports: [{}],
		}),
		solid(),
		mdx({
			remarkPlugins: [[admonitions, {}]],
		}) as AstroIntegration,
		vanillaExtract(),
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
