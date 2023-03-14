import { debounce } from "@solid-primitives/scheduled"
import { copyCodeButton } from "./CodeSnippet.css"

const buttonSize = "1.5em"

export default (props: { code: string }) => {
	const success = atom(false)
	const clearSuccess = debounce(() => success(false), 2000)

	return (
		<button
			class={copyCodeButton}
			onClick={() => {
				const code = props.code
				navigator.clipboard.writeText(code)
				success(true)
				clearSuccess()
			}}
		>
			<Show
				when={success()}
				fallback={
					/* prettier-ignore */
					<svg xmlns="http://www.w3.org/2000/svg" width={buttonSize} height={buttonSize} viewBox="0 0 512 512"><path fill="currentColor" d="M408 480H184a72 72 0 0 1-72-72V184a72 72 0 0 1 72-72h224a72 72 0 0 1 72 72v224a72 72 0 0 1-72 72Z"></path><path fill="currentColor" d="M160 80h235.88A72.12 72.12 0 0 0 328 32H104a72 72 0 0 0-72 72v224a72.12 72.12 0 0 0 48 67.88V160a80 80 0 0 1 80-80Z"></path></svg>
				}
			>
				{/* prettier-ignore */}
				<svg xmlns="http://www.w3.org/2000/svg" width={buttonSize} height={buttonSize} viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z"></path></svg>
			</Show>
		</button>
	)
}
