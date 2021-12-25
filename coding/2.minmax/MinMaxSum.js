export const MinMaxSum = (array) => {
  // maintain 1 list containing all the small numbers
  // maintain another list containing all the large numbers

  const min = array
    .sort()
    .slice(0, 4)
    .reduce((acc, curr) => acc + curr, 0);
  const max = array
    .sort((a, b) => b - a)
    .slice(0, 4)
    .reduce((acc, curr) => acc + curr, 0);

  return [min, max];
};
