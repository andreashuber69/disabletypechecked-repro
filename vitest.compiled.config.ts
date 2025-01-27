import { defineConfig } from "vitest/config";

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default defineConfig({
    test: {
        coverage: {
            provider: "istanbul",
            include: ["dist/node/*.js"],
            reporter: ["lcov", "text"],
        },
    },
});
