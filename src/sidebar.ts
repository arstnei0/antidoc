export const sidebar: SidebarItemInput[] = [
	{ id: "markdown", title: "Markdown", isParent: true, children: "auto" },
]

export type SidebarItemInput = {
	id: string
	title: string
} & ({ isParent: true; children: SidebarItem[] | "auto" } | { isParent: false })

export type SidebarItem = {
	id: string
	title: string
	url: string
} & ({ isParent: true; children: SidebarItem[] } | { isParent: false })
