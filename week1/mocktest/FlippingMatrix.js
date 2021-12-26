const FlippingMatrix = (matrix) => {
  const quadrantLength = matrix.length / 2;

  let sum = 0;

  // @TODO don't use sum but array methods only
  matrix.slice(0, quadrantLength).map((_, rowIndex) =>
    matrix.slice(0, quadrantLength).map((_, colIndex) => {
      const p1 = matrix[rowIndex][2 * quadrantLength - colIndex - 1]; // top left
      const p2 = matrix[rowIndex][colIndex]; // top right
      const p3 = matrix[2 * quadrantLength - rowIndex - 1][colIndex]; // bottom left
      const p4 =
        matrix[2 * quadrantLength - rowIndex - 1][
          2 * quadrantLength - colIndex - 1
        ]; // bottom right

      sum += Math.max(p1, Math.max(p2, Math.max(p3, p4)));
    })
  );

  return sum;
};

export { FlippingMatrix };
