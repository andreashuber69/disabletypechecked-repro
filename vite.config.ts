import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// eslint-disable-next-line import/no-default-export, import/no-anonymous-default-export
export default defineConfig({
    build: {
        lib: {
            entry: ["src/index.ts"],
            formats: ["es"],
        },
        outDir: "dist",
        rollupOptions: {
            input: ["src/index.ts"],
        },
        sourcemap: true,
        ssr: true,
    },
    plugins: [dts({ rollupTypes: true })],
});
