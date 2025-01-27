import { defineConfig } from "vite";

// eslint-disable-next-line import/no-default-export, import/no-anonymous-default-export
export default defineConfig({
    build: {
        lib: {
            entry: ["src/add.spec.ts"],
            formats: ["es"],
        },
        outDir: "dist",
        rollupOptions: {
            input: ["src/add.spec.ts"],
        },
        sourcemap: true,
        ssr: true,
    },
});
