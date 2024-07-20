export const throttle = (callback, delay) => {
  let inThrottle = false;

  return async (args) => {
    if (inThrottle) return;

    inThrottle = true;
    setTimeout(() => {
      callback(args);
      inThrottle = false;
    }, delay);
  };
};
