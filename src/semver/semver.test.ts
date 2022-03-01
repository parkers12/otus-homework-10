import { compareNumeric, semverSort } from "./semver";

describe("Test function compareNumeric", () => {
  test("Comparison 2.4 with 3.4", () => {
    expect(compareNumeric("2.4", "3.4")).toBe(-1);
  });

  test("Comparison 5.4 with 3.4", () => {
    expect(compareNumeric("5.4", "3.4")).toBe(1);
  });

  test("Comparison 5.4 with 5.4", () => {
    expect(compareNumeric("5.4", "5.4")).toBe(0);
  });
});

describe("Test function totalSum", () => {
  test("Get an array of live cells", () => {
    const arr = [
      "1.0.5",
      "2.5.0",
      "0.12.0",
      "1",
      "1.23.45",
      "1.4.50",
      "1.2.3.4.5.6.7",
    ];
    const arrRes = [
      "0.12.0",
      "1",
      "1.0.5",
      "1.2.3.4.5.6.7",
      "1.4.50",
      "1.23.45",
      "2.5.0",
    ];
    expect(semverSort(arr)).toStrictEqual(arrRes);
  });
});
