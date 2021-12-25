const TimeConversion = (s) => {
  const isAM = s.slice(8) === "AM";
  const hours = s.slice(0, 2);
  const minutes = s.slice(3, 5);
  const seconds = s.slice(6, 8);

  return isAM
    ? `${hours === "12" ? "00" : hours}:${minutes}:${seconds}`
    : `${hours === "12" ? "12" : parseInt(hours) + 12}:${minutes}:${seconds}`;
};

export { TimeConversion };
