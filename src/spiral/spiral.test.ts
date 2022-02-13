import spiral from "./spiral";

describe("Test function spiral", () => {
    test("Row 4 Col 5", () => {
        const arr = [
            [0,  1,  2,  3,  4],
            [5,  6,  7,  8,  9],
            [10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19]
        ];
        const arrRes =
        [0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11];
        expect(spiral(arr)).toBe(arrRes);
    });

    test("Row 2 Col 5", () => {
        const arr = [
            [0,  1,  2,  3,  4],
            [5,  6,  7,  8,  9]
        ];
        const arrRes = [0, 1, 2, 3, 4, 9, 8, 7, 6, 5];
        expect(spiral(arr)).toBe(arrRes);
    });

    test("Row 7 Col 2", () => {
        const arr = [
            [0,  1],
            [5,  6],
            [10, 11],
            [15, 16],
            [0,  14],
            [5,  6],
            [10, 11]
        ];
        const arrRes = [0, 1, 6, 11, 16, 14, 6, 11, 10, 5, 0, 15, 10, 5];
        expect(spiral(arr)).toBe(arrRes);
    });
});