export function minimumIndex(capacity: number[], itemSize: number): number {
  let uniqCapacity = new Set(capacity);

  while (uniqCapacity.size > 0) {
    let min = Math.min(...uniqCapacity);
    if (min < itemSize) {
      uniqCapacity.delete(min);
    } else {
      return capacity.indexOf(min);
      // return capacity.findIndex((v) => v === min);
    }
  }
  return -1;
}
