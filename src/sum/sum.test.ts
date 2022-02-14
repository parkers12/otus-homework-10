import sum from "./sum";

describe("Test function sum", () => {
    let alertMock: ReturnType<typeof jest.spyOn>;
    window.alert = (res) => res;
    beforeEach(() => {
      alertMock = jest.spyOn(window, "alert");
    });
    afterEach(() => {
      jest.resetAllMocks();
    });

    test("Get an array of live cells", () => {
        const res = sum().toString();
        window.alert(res);
        expect(alertMock).toHaveBeenCalledWith("0");
    });

    test("Get an array of live cells", () => {
        const s = sum();
        const res = s(1).toString();
        window.alert(res);
        expect(alertMock).toHaveBeenCalledWith("1");
    });

    test("Get an array of live cells", () => {
        const s = sum();
        const res = s(1)(2).toString();
    window.alert(res);
    expect(alertMock).toHaveBeenCalledWith("3");
    });

    test("Get an array of live cells", () => {
        const s = sum();
        const res = s(3)(4)(5).toString();
    window.alert(res);
    expect(alertMock).toHaveBeenCalledWith("12");
    });

    test("Get an array of live cells", () => {
        const s3 = sum(3);
        const res = s3(5).toString();
    window.alert(res);
    expect(alertMock).toHaveBeenCalledWith("8");
    });
    test("Get an array of live cells", () => {
        const s3 = sum(3);
        const res = s3(6).toString();
    window.alert(res);
    expect(alertMock).toHaveBeenCalledWith("9");
    });
});