import { Pangram } from "./Pangram";

describe("Pangram", () => {
  test("test 1", () => {
    const string = "We promptly judged antique ivory buckles for the prize";
    expect(Pangram(string)).toEqual("not pangram");
  });

  test("test 2", () => {
    const string = "The quick brown fox jumps over the lazy dog";
    expect(Pangram(string)).toEqual("pangram");
  });

  test("test 3", () => {
    const string =
      "We promptly judged antique ivory buckles for the next prize";
    expect(Pangram(string)).toEqual("pangram");
  });

  test("test 4", () => {
    const string = "We promptly judged antique ivory buckles for the prize";
    expect(Pangram(string)).toEqual("not pangram");
  });
});
