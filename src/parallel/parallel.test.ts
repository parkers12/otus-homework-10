import Parallel from "./parallel";

describe("Test function Parallel", () => {
    const jobs: (() => Promise<number>)[] = [
        () => new Promise((resolve) => {
            setTimeout(resolve, 10, 1);
        }),
        () => new Promise((resolve) => {
            setTimeout(resolve, 40, 2);
        }),
        () => new Promise((resolve) => {
            setTimeout(resolve, 20, 3);
        }),
        () => new Promise((resolve) => {
            setTimeout(resolve, 90, 4);
        }),
        () => new Promise((resolve) => {
            setTimeout(resolve, 30, 5);
        })
    ];

    test("It's a function", async () => {
        const runner = new Parallel(2);
        expect(typeof runner.jobs).toBe("function");
    });

    test("Return array 2 streams", async () => {
        const runner = new Parallel(2);
        const result = await runner.jobs(...jobs);
        return expect(result).toStrictEqual([1, 3, 2, 5, 4]);
    });

    test("Return array 5 streams", async () => {
        const runner = new Parallel(5);
        const result = await runner.jobs(...jobs);
        expect(result).toStrictEqual([1, 3, 5, 2, 4]);
    });
});