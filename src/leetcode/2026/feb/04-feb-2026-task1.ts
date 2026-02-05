function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    // console.log(sum);
    result.push(i);
    // console.log(result)
    if (sum == target) {
      //   console.log("if statement >> " + result);
      return result;
    }
  }
}

let nums = [2, 7, 11, 15];

console.log(twoSum(nums, 9));
