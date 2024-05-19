import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import UnoCSS from "unocss/vite";

export default defineConfig({
	server: {
		port: 5566,
		open: true,
	},
	plugins: [
		vue(),
		Components({
			resolvers: [
				AntDesignVueResolver({
					importStyle: false, // css in js
				}),
			],
		}),
		UnoCSS(),
	],
});
