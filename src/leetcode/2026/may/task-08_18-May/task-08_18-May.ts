export function findKthPositive(arr: number[], k: number): number {
  let uniqSet = new Set(new Array(arr.length + k + 1).fill(1).map((v, i) => i));

  for (let i of arr) {
    if (uniqSet.has(i)) {
      uniqSet.delete(i);
    }
  }

  let output = [...uniqSet];

  let size = output.length;

  return output[k];
}
