export function toggleLightBulbs(bulbs: number[]): number[] {
  let result: number[] = [];

  let calculatedCount = new Map<number, number>();

  bulbs.sort((a, b) => {
    return a - b;
  });

  bulbs.forEach((el) => {
    if (calculatedCount.has(el)) {
      calculatedCount.set(el, calculatedCount.get(el) + 1);
    } else {
      calculatedCount.set(el, 1);
    }
  });

  calculatedCount.forEach((v, k) => {
    if (v % 2 != 0) {
      result.push(k);
    }
  });

  return result;
}
