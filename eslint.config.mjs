import config from "@andreashuber69/eslint-config";
import tseslint from "typescript-eslint";


// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default tseslint.config(
    config,
    {
        ignores: ["dist/"],
    },
);
