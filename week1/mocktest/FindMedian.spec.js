import { FindMedian } from "./FindMedian";

describe("FindMedian", () => {
  test("test 1", () => {
    const arr = [0, 1, 2, 4, 6, 5, 3];
    expect(FindMedian(arr)).toEqual(3);
  });

  // test("test 2", () => {
  //   expect(FindMedian(arr)).toEqual(3);
  // });
});

// [0][0] > [1][0] ? [1][0] : [0][1];
