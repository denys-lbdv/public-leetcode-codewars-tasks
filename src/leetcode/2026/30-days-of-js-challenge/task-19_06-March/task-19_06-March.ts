type Fn<T> = () => Promise<T>;

export function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const results: T[] = new Array(functions.length);
    let count = 0;
    functions.forEach((fn, i) => {
      fn()
        .then((val) => {
          results[i] = val;
          count++;
          if (count === functions.length) {
            resolve(results);
          }
        })
        .catch((reason) => reject(reason));
    });
  });
}
