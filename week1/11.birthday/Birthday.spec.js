import { Birthday } from "./Birthday";

describe("Birthday", () => {
  test("test 1", () => {
    const s = [2, 2, 1, 3, 2];
    const d = 4;
    const m = 2;

    expect(Birthday(s, d, m)).toEqual(2);
  });
});
