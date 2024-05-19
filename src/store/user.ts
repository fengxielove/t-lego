import { defineStore } from "pinia";
import { reactive } from "vue";

export const useUserStore = defineStore("user", () => {
	const userInfo = reactive({
		name: "fengxie",
	});

	return {
		userInfo,
	};
});
