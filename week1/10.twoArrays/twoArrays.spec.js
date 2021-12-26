import { TwoArrays } from "./TwoArrays";

describe("TwoArrays", () => {
  test("test 1", () => {
    const A = [0, 1];
    const B = [0, 2];
    const k = 1;

    expect(TwoArrays(k, A, B)).toEqual("YES");
  });

  test("test 2", () => {
    const A = [2, 1, 3];
    const B = [7, 8, 9];
    const k = 10;

    expect(TwoArrays(k, A, B)).toEqual("YES");
  });

  test("test 3", () => {
    const A = [1, 2, 2, 1];
    const B = [3, 3, 3, 4];
    const k = 5;

    expect(TwoArrays(k, A, B)).toEqual("NO");
  });
});
