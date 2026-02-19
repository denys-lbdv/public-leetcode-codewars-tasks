export function findMissingElements(nums: number[]): number[] {
  const result: number[] = [];
  console.log("Init array:\n", nums);
  nums.sort((a, b) => a - b);
  console.log("Array after sorting:\n", nums);
  for (let i = 0; i < nums.length - 1; i++) {
    let diff: number = nums[i + 1] - nums[i];

    if (diff > 1) {
      for (
        let absentNum: number = nums[i] + 1;
        absentNum < nums[i + 1];
        absentNum++
      ) {
        result.push(absentNum);
      }
    }
  }
  return result;
}
