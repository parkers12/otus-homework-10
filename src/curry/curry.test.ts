import { hof, totalSum } from "./curry";

describe("Test function hof", () => {
    beforeEach(() => {
    });

    test("Get an array of live cells", () => {
        expect(hof(1)(2)(3)(4)(5)()).toBe(15);
    });

    test("Get an array of live cells", () => {
        expect(hof(2, 3, 4)(5, 6)()).toBe(20);
    });

    test("Get an array of live cells", () => {
        expect(hof(3, 4)(5, 6)(7)()).toBe(25);
    });

    test("Get an array of live cells", () => {
        expect(hof(4, 5)(6)(7, 8)()).toBe(30);
    });

    test("Get an array of live cells", () => {
        expect(hof(5)(6)(7)(8)(9)()).toBe(35);
    });
});

describe("Test function totalSum", () => {
    test("Get an array of live cells", () => {
        expect(totalSum(1,2,3,4,5)).toBe(15);
    });
});