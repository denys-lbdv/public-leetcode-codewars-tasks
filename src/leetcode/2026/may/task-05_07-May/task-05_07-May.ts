export function fairCandySwap(
  aliceSizes: number[],
  bobSizes: number[],
): number[] {
  let totalAlice = aliceSizes.reduce((prev, current) => (prev += current), 0);
  let totalBob = bobSizes.reduce((prev, current) => (prev += current), 0);

  let delta = (totalBob - totalAlice) / 2;

  const bobSet = new Set(bobSizes);

  for (const x of aliceSizes) {
    const y = x + delta;
    if (bobSet.has(y)) return [x, y];
  }
  return [];
}
