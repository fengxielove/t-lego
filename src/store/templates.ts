import { defineStore } from "pinia";
import { ref } from "vue";
import { TemplateProps } from "../types/TemplateTypes.ts";
import { faker } from "@faker-js/faker";

export const useTemplateStore = defineStore("templates", () => {
	const data = ref<TemplateProps[]>([]);
	const totalTemplates = ref(0);
	const works = ref<TemplateProps[]>([]);
	const totalWorks = ref(0);

	const getTemplateById = (id: string) => {
		return data.value.find((item) => item.id === id);
	};

	const fetchTemplates = (count = 5) => {
		data.value = data.value.concat(
			faker.helpers.multiple(createRandomTemplates, {
				count,
			})
		);
		totalTemplates.value = data.value.length;
		return data.value;
	};

	const fetchWorks = () => {};

	const fetchTemplate = () => {};

	const createRandomTemplates = (): TemplateProps => {
		return {
			id: faker.string.uuid(),
			title: faker.word.words(5),
			desc: faker.word.words(25),
			coverImg: faker.image.url({ width: 600, height: 849 }),
			uuid: faker.string.uuid(),
			isTemplate: true,
			isHot: true,
			isNew: true,
			author: faker.person.fullName(),
			copiedCount: faker.number.int(),
			status: 1,
			user: {
				gender: faker.person.gender(),
				nickName: faker.person.middleName(),
				picture: faker.image.avatar(),
				userName: faker.person.fullName(),
			},
		};
	};

	return {
		data,
		totalTemplates,
		works,
		totalWorks,
		getTemplateById,
		fetchTemplates,
		fetchWorks,
		fetchTemplate,
	};
});
