export const deepCopy = (arr) => {
  const copiedResult = arr.map((obj) => structuredClone(obj));

  return copiedResult;
};
