import { FlippingMatrix } from "./FlippingMatrix";

describe("FlippingMatrix", () => {
  test("test 1", () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    expect(FlippingMatrix(arr)).toEqual(4);
  });

  test("test 2", () => {
    const arr = [
      [112, 42, 83, 119],
      [56, 125, 56, 49],
      [15, 78, 101, 43],
      [62, 98, 114, 108],
    ];

    expect(FlippingMatrix(arr)).toEqual(414);
  });
});

// [0][0] > [1][0] ? [1][0] : [0][1];
