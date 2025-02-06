import { defineConfig } from "vitest/config";

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default defineConfig({
    test: {
        coverage: {
            exclude: [],
            provider: "istanbul",
            reporter: ["lcov", "text"],
        },
    },
});
