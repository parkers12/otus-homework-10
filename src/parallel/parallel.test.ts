import Parallel from "./parallel";

jest.useFakeTimers();

describe("Test function Parallel", () => {
    test("Return array", async () => {
        jest.setTimeout(70000);
        const runner = new Parallel(2);
        const arg1 = () => new Promise((resolve) => {
            setTimeout(resolve, 1000, 1);
        });
        const arg2 = () => new Promise((resolve) => {
            setTimeout(resolve, 4000, 2);
        });
        const arg3 = () => new Promise((resolve) => {
            setTimeout(resolve, 2000, 3);
        });
        const arg4 = () => new Promise((resolve) => {
            setTimeout(resolve, 9000, 4);
        });
        const arg5 = () => new Promise((resolve) => {
            setTimeout(resolve, 3000, 5);
        })

        expect(typeof runner.jobs).toBe("function");
          return expect(runner.jobs(arg1, arg2, arg3, arg4, arg5))
            .resolves.toBe([1, 3, 2, 5, 4]);
    });
});