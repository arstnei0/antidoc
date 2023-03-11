import { defineConfig } from "astro/config"
import type { AstroIntegration } from "astro"
import solid from "@astrojs/solid-js"
import mdx from "@astrojs/mdx"
import civet from "vite-plugin-civet"
import autoImport from "astro-auto-import"
import vanillaExtract from "astro-vanilla-extract"
import autoImportVite from "unplugin-auto-import/vite"

export default defineConfig({
	integrations: [
		autoImport({
			imports: [{}],
		}),
		solid(),
		mdx() as AstroIntegration,
		vanillaExtract(),
	],
	experimental: {
		assets: true,
	},
	vite: {
		plugins: [
			civet(),
			autoImportVite({
				imports: [
					{
						solid: ["atom"],
					},
				],
				dts: "./src/auto-import.generated.d.ts",
			}),
		],
		resolve: { alias: { style: "/src/style/theme/$.css", solid: "/src/lib/solid" } },
	},
})
