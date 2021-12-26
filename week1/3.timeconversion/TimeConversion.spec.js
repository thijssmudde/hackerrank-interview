import { TimeConversion } from "./TimeConversion";

describe("TimeConversion", () => {
  test("test 1", () => {
    const result = TimeConversion("07:05:45PM");
    expect(result).toEqual("19:05:45");
  });

  test("test 2", () => {
    const result = TimeConversion("12:01:00PM");
    expect(result).toEqual("12:01:00");
  });

  test("test 3", () => {
    const result = TimeConversion("12:01:00AM");
    expect(result).toEqual("00:01:00");
  });
});
