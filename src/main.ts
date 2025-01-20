import { readFileSync } from "node:fs";

const packageJson = JSON.parse(readFileSync("package.json", "utf8")) as unknown;

if (typeof packageJson === "object" && packageJson && "name" in packageJson) {
    console.log(packageJson.name);
}
