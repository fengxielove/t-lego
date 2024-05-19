import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
	presets: [presetUno()],
	theme: {
		height: {
			navHeader: "64px",
			navFooter: "69px",
		},
	},
	rules: [
		[/^m-([\\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
		[
			"main-height",
			{
				height: "calc(100vh - 64px - 69px)",
			},
		],
	],
});
