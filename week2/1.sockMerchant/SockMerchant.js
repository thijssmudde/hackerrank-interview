const countPairs = (arr, n) =>
  Math.floor(arr.filter((item) => item === n).length / 2);

const SockMerchant = (n, arr) => {
  return arr.reduce(
    (prev, cur) =>
      prev[1].includes(cur)
        ? prev
        : [prev[0] + countPairs(arr, cur), [...prev[1], cur]],
    [0, []]
  )[0];
};

export { SockMerchant };
