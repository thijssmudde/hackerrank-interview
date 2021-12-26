import { MinMaxSum } from "./MinMaxSum";

describe("MinMaxSum", () => {
  test("test 1", () => {
    const result = MinMaxSum([1, 2, 3, 4, 5]);
    expect(result).toEqual([10, 14]);
  });

  test("test 2", () => {
    const result = MinMaxSum([5, 2, 3, 4, 5]);
    expect(result).toEqual([14, 17]);
  });

  test("test 3", () => {
    const result = MinMaxSum([1, 1, 1, 1, 2]);
    expect(result).toEqual([4, 5]);
  });
});
