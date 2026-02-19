export function removeDuplicates(nums: number[]): number {
  // return new Set(nums).size;
  let unique = Array.from(new Set(nums));

  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i];
  }

  return unique.length;
}
