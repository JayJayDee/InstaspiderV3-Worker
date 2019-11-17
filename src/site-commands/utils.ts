export const little = (msec: number) =>
  new Promise((resolve) => setTimeout(resolve, msec));