import { defineConfig } from "vitest/config";

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default defineConfig({
    test: {
        include: ["dist/*.spec.js"],
        exclude: [],
        coverage: {
            provider: "istanbul",
            reporter: ["lcov", "text"],
        },
    },
});
