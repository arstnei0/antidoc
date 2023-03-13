import type { SidebarItem, Slug } from "~/sidebar"
import { throttle } from "@solid-primitives/scheduled"
import { leftSidebar } from "./LeftSidebar.css"
import { getDocsUrl } from "~/lib/docs"

const buttonSize = "1.8em"
const ToggleButton = (props: { onClick?: any; open: boolean }) => {
	return (
		<button
			class={leftSidebar.item.toggleButton}
			style={props.open ? `` : "transform: rotate(90deg);"}
			onClick={() => props.onClick?.()}
		>
			{/* prettier-ignore */}
			<svg xmlns="http://www.w3.org/2000/svg" width={buttonSize} height={buttonSize} viewBox="0 0 24 24"><path fill="currentColor" d="M7.15 21.1q-.375-.375-.375-.888q0-.512.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375q.512 0 .887.375l8.4 8.425q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325L8.9 21.125q-.35.35-.862.35q-.513 0-.888-.375Z"></path></svg>
		</button>
	)
}

const Self = (props: { item: SidebarItem; now: boolean; depth: number; currentPageSlug: Slug }) => {
	const isCurrent = createMemo(() => props.currentPageSlug === props.item.slug)
	const childrenEl = atom(null as unknown as HTMLDivElement)
	const height = atom(0)
	const hidden = atom(false)
	const hiding = atom(false)
	const appearing = atom(false)
	const isParent = createMemo(() => !!props.item.children)
	const url = createMemo(() => getDocsUrl(props.item.slug))

	let nextHidden = hidden()
	const toggle$ = throttle(() => {
		hidden(nextHidden)
		console.log(nextHidden)
		hiding(false)
		appearing(false)
	}, leftSidebar.transitionDuration)
	const toggle = () => {
		hiding(false)
		appearing(false)
		if (hidden()) appearing(true)
		else hiding(true)
		toggle$.clear()
		nextHidden = !nextHidden
		toggle$()
	}
	createEffect(() => {
		const el = childrenEl()
		if (!hidden()) if (el) height(el.offsetHeight)
	})

	return (
		<div class={leftSidebar.item.wrapper} style={`--depth: ${props.depth};`}>
			<div
				classList={{
					[leftSidebar.item.base]: true,
					[leftSidebar.item.parent]: isParent(),
					[leftSidebar.item.now]: props.now,
					[leftSidebar.item.current]: isCurrent(),
				}}
			>
				<div onClick={() => (location.href = url())} class={leftSidebar.item.left}>
					<h2>{props.item.title}</h2>
				</div>
				<Show when={props.item.children}>
					<ToggleButton open={hidden()} onClick={() => toggle()} />
				</Show>
			</div>
			<Show when={isParent()}>
				<div
					ref={el => childrenEl(el)}
					class={leftSidebar.item.children}
					classList={{
						[leftSidebar.item.hidden]: hidden(),
					}}
					style={{
						height: height() === 0 ? "auto" : `${height()}px`,
						...(hidden() ? { height: "0px" } : {}),
						...(appearing()
							? {
									height: `${height()}px`,
									overflow: "hidden",
							  }
							: hiding()
							? {
									height: `0px`,
									overflow: "hidden",
							  }
							: {}),
					}}
				>
					<For each={(props.item as any).children as SidebarItem[]}>
						{child => (
							<Self
								currentPageSlug={props.currentPageSlug}
								item={child}
								now={props.now}
								depth={props.depth + 1}
							/>
						)}
					</For>
				</div>
			</Show>
		</div>
	)
}

export default Self
