type Fn = (...params: any[]) => Promise<any>;

export function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    const originalPromise = fn(...args);

    const timeoutPromise = new Promise((resolve, regect) => {
      setTimeout(() => {
        regect("Time Limit Exceeded");
      }, t);
    });

    return Promise.race([originalPromise, timeoutPromise]);
  };
}
