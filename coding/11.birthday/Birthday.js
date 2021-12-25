const sumOfArray = (arr) => {
  return arr.reduce((prev, cur) => prev + cur, 0);
};

const Birthday = (arr, d, m) => {
  return arr.reduce(
    (prev, _, index) =>
      sumOfArray([...arr.slice(index, index + m)]) === d ? prev + 1 : prev,
    0
  );
};

export { Birthday };
