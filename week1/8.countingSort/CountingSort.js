const CountingSort = (arr) => {
  return Array(100)
    .fill(0)
    .map((_, index) => arr.filter((_item) => _item === index).length);
};

export { CountingSort };
