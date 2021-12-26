import { DiagonalDifference } from "./DiagonalDifference";

describe("DiagonalDifference", () => {
  test("test 1", () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [9, 8, 9],
    ];

    expect(DiagonalDifference(arr)).toEqual(2);
  });

  test("test 2", () => {
    const arr = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ];

    expect(DiagonalDifference(arr)).toEqual(15);
  });

  test("test 3", () => {
    const arr = [[1, 1]];

    expect(DiagonalDifference(arr)).toEqual(0);
  });

  test("test 4", () => {
    const arr = [
      [10, 20, 30],
      [40, 50, 60],
      [70, 80, 90],
    ];

    expect(DiagonalDifference(arr)).toEqual(0);
  });

  test("test 5", () => {
    const arr = [
      [4, 6, 8, 10],
      [15, 16, 17, 18],
      [20, 21, 22, 23],
      [24, 25, 26, 27],
    ];

    expect(DiagonalDifference(arr)).toEqual(3);
  });

  test("test 5", () => {
    const arr = [
      [-10, 3, 0, 5, -4],
      [2, -1, 0, 2, -8],
      [9, -2, -5, 6, 0],
      [9, -7, 4, 8, -2],
      [3, 7, 8, -5, 0],
    ];

    expect(DiagonalDifference(arr)).toEqual(3);
  });
});
