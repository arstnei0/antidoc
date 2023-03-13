import { visit } from "unist-util-visit"
import { h } from "hastscript"
import type { Plugin } from "unified"
import type { Root } from "mdast"

export const directiveClass: Plugin<[], Root> = () => {
	return tree => {
		visit(tree, node => {
			if (
				node.type === "textDirective" ||
				node.type === "leafDirective" ||
				node.type === "containerDirective"
			) {
				const data = node.data || (node.data = {})

				data.hName = "div"
				data.hProperties = h("div", {
					...node.attributes,
					class: `directive-wrapper ${node.name}`,
					name: node.name,
				}).properties
			}
		})
	}
}
