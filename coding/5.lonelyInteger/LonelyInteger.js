const LonelyInteger = (arr) => {
  return arr.filter(
    (item) => arr.filter((fItem) => item === fItem).length === 1
  )[0];
};

export { LonelyInteger };
