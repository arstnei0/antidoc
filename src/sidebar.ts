export const sidebar = [
	{ id: "markdown", title: "Markdown", isParent: true, children: "auto" },
] satisfies SidebarItem[]

export type SidebarItem = {
	id: string
	title: string
} & ({ isParent: true; children: SidebarItem[] | "auto" } | { isParent: false })
