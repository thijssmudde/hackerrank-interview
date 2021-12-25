const MatchingStrings = (strings, queries) => {
  return queries.map(
    (query) => strings.filter((string) => string === query).length
  );
};

export { MatchingStrings };
