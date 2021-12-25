const Pangram = (s) => {
  const a = "abcdefghijklmnopqrstuvwqxyz";
  return a.split("").every((c) => s.toLowerCase().includes(c))
    ? "pangram"
    : "not pangram";
};

export { Pangram };
