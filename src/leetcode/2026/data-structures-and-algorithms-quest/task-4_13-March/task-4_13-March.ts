export function findErrorNums(nums: number[]): number[] {
  nums.sort((a, b) => a - b);
  let result: number[] = new Array();
  let goodArray = new Array(nums.length);
  let setUniq = new Set(nums);

  for (let i = 0; i < nums.length; i++) {
    goodArray[i] = i + 1;

    if (i < nums.length - 1 && nums[i + 1] - nums[i] === 0) {
      result[0] = nums[i];
    }
    
    if (!setUniq.has(goodArray[i])) {
      result[1] = goodArray[i];
    }
  }
  return result;
}
