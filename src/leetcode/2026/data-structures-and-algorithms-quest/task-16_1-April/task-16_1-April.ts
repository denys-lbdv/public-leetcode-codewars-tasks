export function lastStoneWeight(stones: number[]): number {
  let result: number = 0;
  while (stones.length !== 0) {
    if (stones.length === 1) {
      result = stones.shift();
      return result;
    }
    stones.sort((a, b) => b - a);
    let max1: number = stones.shift();
    let max2: number = stones.shift();

    if (max1 !== max2 && max1 !== undefined && max2 !== undefined) {
      stones.push(Math.abs(max2 - max1));
    }
  }
  return result;
}
