import * as esbuild from "esbuild";
import { dtsPlugin } from "esbuild-plugin-d.ts";
import * as fs from "fs/promises";

const isDev = process.argv.includes("--dev");

const config = {
	entryPoints: ["./src/mod.ts"],
	outdir: "./build",
	minify: false,
	target: "es2022",
	format: "esm",
	bundle: true,
	plugins: [dtsPlugin()],
}

if(isDev){
	const ctx = await esbuild.context(config);
	await ctx.watch();
} else {
	await fs.rm("./build", { recursive: true }).catch(() => {});
	await esbuild.build(config);
}