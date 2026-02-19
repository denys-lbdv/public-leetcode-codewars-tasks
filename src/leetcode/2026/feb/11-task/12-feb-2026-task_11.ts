export function reverse(x: number): number {
  let reverted: number = parseInt(x.toString().split("").reverse().join(""));
  if (Math.abs(reverted) > Math.pow(2, 31)) {
    return 0;
  }
  return x > 0 ? reverted : -1 * reverted;
}
