import { useUserStore } from "./user.ts";
import { useTemplateStore } from "./templates.ts";
import { useEditorStore } from "./editor.ts";

export function useStore() {
	const userStore = useUserStore();
	const templateStore = useTemplateStore();
	const editorStore = useEditorStore();
	return {
		userStore,
		templateStore,
		editorStore,
	};
}
