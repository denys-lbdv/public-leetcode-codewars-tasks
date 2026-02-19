export function mirrorDistance(n: number): number {
  return Math.abs(n - parseInt(new String(n).split("").reverse().join("")));
}
