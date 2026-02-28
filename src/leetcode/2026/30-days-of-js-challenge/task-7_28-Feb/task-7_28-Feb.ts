type Fn = (accum: number, curr: number) => number;

export function reduce(nums: number[], fn: Fn, init: number): number {
  if (nums.length === 0) return init;
  let accum = init;
  for (let e of nums) {
    accum = fn(accum, e);
  }
  return accum;
}
