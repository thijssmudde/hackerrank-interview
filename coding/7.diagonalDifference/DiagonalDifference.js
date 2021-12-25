const DiagonalDifference = (arr) => {
  const res = arr
    .map((_arr, index) => [_arr[index], _arr[_arr.length - 1 - index]])
    .reduce(
      (prev, cur) => {
        return [prev[0] + cur[0], prev[1] + cur[1]];
      },
      [0, 0]
    )
    .reduce((prev, cur) => cur - prev, 0);
  return Math.abs(res);
};

export { DiagonalDifference };
