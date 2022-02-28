import sum from "./sum";

describe("Test function sum", () => {
  test("Get an array of live cells", () => {
    const res = +sum();
    expect(res).toBe(0);
  });

  test("Get an array of live cells", () => {
    const s = sum();
    const res = +s(1);
    expect(res).toBe(1);
  });

  test("Get an array of live cells", () => {
    const s = sum();
    const res = +s(1)(2);
    expect(res).toBe(3);
  });

  test("Get an array of live cells", () => {
    const s = sum();
    const res = +s(3)(4)(5);
    expect(res).toBe(12);
  });

  test("Get an array of live cells", () => {
    const s3 = sum(3);
    const res = +s3(5);
    expect(res).toBe(8);
  });
  
  test("Get an array of live cells", () => {
    const s3 = sum(3);
    const res = +s3(6);
    expect(res).toBe(9);
  });
});