import { LonelyInteger } from "./LonelyInteger";

describe("LonelyInteger", () => {
  test("test 1", () => {
    const arr = [1, 2, 3, 4, 3, 2, 1];

    expect(LonelyInteger(arr)).toEqual(4);
  });

  test("test 2", () => {
    const arr = [1, 2, 3, 4, 4, 2, 1];

    expect(LonelyInteger(arr)).toEqual(3);
  });

  test("test 3", () => {
    const arr = [1, 2, 3, 4, 4, 2, 3];

    expect(LonelyInteger(arr)).toEqual(1);
  });
});
