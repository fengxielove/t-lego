import { defineStore } from "pinia";
import { ComponentData } from "../types/EditorTypes.ts";
import { faker } from "@faker-js/faker";
import { ref } from "vue";

const createComponentData = (): ComponentData => {
	return {
		props: {
			text: faker.word.verb(),
		},
		id: faker.string.uuid(),
		name: "l-text",
		isHidden: false,
		isLocked: true,
		layerName: faker.word.words(),
	};
};

export const useEditorStore = defineStore("editor", () => {
	const testComponents: ComponentData[] = faker.helpers.multiple(
		createComponentData,
		{
			count: 10,
		}
	);

	const components = ref(testComponents);

	return {
		components,
	};
});
