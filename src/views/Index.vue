<template>
	<div>
		<a-layout :style="{ background: 'white' }">
			<a-layout-header>
				<router-link to="/">慕课乐高</router-link>
			</a-layout-header>
			<a-layout-content class="main-height overflow-auto">
				<router-view></router-view>
			</a-layout-content>
			<a-layout-footer> © fengxie 版权所有 </a-layout-footer>
		</a-layout>
	</div>
</template>
<script setup lang="ts"></script>
<style scoped></style>
