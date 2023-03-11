/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client-image" />
/// <reference types="unplugin-icons/types/astro" />

declare module "*.svg" {
	const metadata: ImageMetadata
	export default metadata
}
