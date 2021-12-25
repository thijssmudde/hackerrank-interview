import { FlippingBits } from "./FlippingBits";

describe("FlippingBits", () => {
  test("test 1", () => {
    const number = 1;

    expect(FlippingBits(number)).toEqual(4294967294);
  });

  test("test 2", () => {
    const number = 0;

    expect(FlippingBits(number)).toEqual(4294967295);
  });

  test("test 3", () => {
    const number = 2147483647;

    expect(FlippingBits(number)).toEqual(2147483648);
  });

  // test("test 3", () => {
  //   const arr = [1, 2, 3, 4, 4, 2, 3];

  //   expect(FlippingBits(arr)).toEqual(1);
  // });
});
