type Fn = (...params: number[]) => number;

export function memoize(fn: Fn): Fn {
  let count = 0;
  let callMap = new Map();
  return function (...args) {
    let a,
      b = [...args];

    if (callMap.has(`${a},${b}`)) {
      return callMap.get(`${a},${b}`);
    } else {
      let result = fn(...args);
      callMap.set(`${a},${b}`, result);
      return result;
    }
  };
}
