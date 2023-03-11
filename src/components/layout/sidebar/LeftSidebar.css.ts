import { borderRadius, c, style } from "style"

export const leftSidebar = {
	outer: style({
		display: "block",
	}),
	wrapper: style({
		// willChange: "width",
		position: "sticky",
		top: 0,
		left: 0,
		width: "300px",
		height: "100%",
		maxHeight: "100vh",
		// backgroundColor: c.bg.light,
		borderRight: `2px solid ${c.bg.lighter}`,
		borderRadius: `${borderRadius}`,
	}),

	item: style({}),
}
