export function createCounter(n: number): () => number {
  let count = n - 1;
  return function () {
    count++;
    return count;
  };
}
