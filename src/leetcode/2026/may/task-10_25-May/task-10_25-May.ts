export function findMissingAndRepeatedValues(grid: number[][]): number[] {
  let simpleArray = grid.flat(1);

  let expectedSum = Array.from(
    { length: simpleArray.length },
    (_, v) => v + 1,
  ).reduce((accum, v) => accum + v, 0);

  let sumWithMissedValue = Array.from(new Set(simpleArray)).reduce(
    (accum, v) => accum + v,
    0,
  );

  let sumWithDuplicatedValue = simpleArray.reduce((accum, v) => accum + v, 0);

  let missedValue = expectedSum - sumWithMissedValue;

  let duplicatedValue = sumWithDuplicatedValue - sumWithMissedValue;

  return [duplicatedValue, missedValue];
}
