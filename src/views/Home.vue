<template>
	<div class="content-container">
		<a-row :gutter="16">
			<template-list :list="testData"></template-list>
		</a-row>
		<a-row type="flex" justify="center">
			<a-button
				v-if="!isLastPage"
				type="primary"
				size="large"
				:loading="isLoading"
				@click="loadMorePage"
				>加载更多</a-button
			>
		</a-row>
	</div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import TemplateList from "../components/TemplateList.vue";
import { TemplateProps } from "../types/TemplateTypes.ts";
import { useStore } from "../store";
const { templateStore } = useStore();

const loadMorePage = () => {};
let isLastPage = ref(false);
let isLoading = ref(true);

const testData = computed<TemplateProps[]>(() => templateStore.data);

onMounted(() => {
	templateStore.fetchTemplates(5);
});
</script>
<style scoped>
.content-container {
	background: #fff;
	padding: 0 24px 24px 30px;
	max-width: 1200px;
	margin: 20px auto;
	width: 100%;
	overflow: auto;
}
</style>
