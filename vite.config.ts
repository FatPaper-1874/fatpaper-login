import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		port: 7002,
	},
	resolve: {
		alias: [
			{
				find: "@",
				replacement: path.resolve(path.dirname("./"), "src"),
			},
		],
	},
});
