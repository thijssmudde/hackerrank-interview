const FlippingBits = (number) => {
  // Make 32 bit integer firt
  const arr = Number(number).toString(2).split("");

  const temp = [
    ...Array(32)
      .fill(0)
      .slice(0, 32 - arr.length),
    ...arr,
  ];

  // flip here
  return temp
    .map((item) => (parseFloat(item) === 1 ? 0 : 1))
    .reverse()
    .reduce(
      (prev, cur, index) => prev + (cur === 1 ? Math.pow(2, index) : 0),
      0
    );
};

export { FlippingBits };
