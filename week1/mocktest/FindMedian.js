const FindMedian = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  const middleIndex = Math.ceil(sorted.length - 1) / 2;
  return sorted[middleIndex];
};

export { FindMedian };
