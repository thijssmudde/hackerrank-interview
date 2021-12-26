const TwoArrays = (k, arr1, arr2) => {
  const A = arr1.sort((a, b) => a - b);
  const B = arr2.sort((a, b) => b - a);

  return A.map((a, i) => a + B[i] >= k).every((i) => i) ? "YES" : "NO";
};

export { TwoArrays };
