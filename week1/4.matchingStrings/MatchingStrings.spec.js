import { MatchingStrings } from "./MatchingStrings";

describe("MatchingStrings", () => {
  test("test 1", () => {
    const strings = ["aba", "baba", "aba", "xzxb"];
    const queries = ["aba", "xzxb", "ab"];

    expect(MatchingStrings(strings, queries)).toEqual([2, 1, 0]);
  });

  test("test 2", () => {
    const strings = ["ab", "ab", "ab"];
    const queries = ["ab", "ab"];

    expect(MatchingStrings(strings, queries)).toEqual([3, 3]);
  });

  test("test 3", () => {
    const strings = ["aaa", "aaa", "aaa"];
    const queries = ["aaa", "aaa", "aaa"];

    expect(MatchingStrings(strings, queries)).toEqual([3, 3, 3]);
  });
});
