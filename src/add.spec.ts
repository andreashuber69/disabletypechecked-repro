import { describe, expect, it } from "vitest";

import { add } from "./add.ts";

describe("calculate", () => {
    it("should return 0 when there are no values", () => {
        expect(add() === 0);
    });

    it("should add values", () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(1, -2)).toEqual(-1);
        expect(add(1, 2, 3, 4, 5)).toEqual(15);
    });
});
