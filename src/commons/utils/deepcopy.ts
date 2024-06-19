export const deepCopy = (objects) => {
  const copiedResult = objects.map((obj) => structuredClone(obj));

  return copiedResult;
};
