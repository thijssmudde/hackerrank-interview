import { SockMerchant } from "./SockMerchant";

describe("SockMerchant", () => {
  test("test 1", () => {
    const arr = [1, 2, 1, 2, 1, 3, 2];
    expect(SockMerchant(7, arr)).toEqual(2);
  });
});
