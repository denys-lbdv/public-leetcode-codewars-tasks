/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
  let numsNonZero: number[] = [];

  for (let el of nums) {
    if (el !== 0) {
      numsNonZero.push(el);
    }
  }

  for (let i = 0; i < numsNonZero.length; i++) {
    nums[i] = numsNonZero[i];
  }
  nums.fill(0, numsNonZero.length, nums.length);
}

//   if (new Set(nums).has(0)) {
//     nums.sort((a, b) => {
//         return a - b;
//     });
//     console.log(nums)
//     while (nums[0] == 0 && new Set(nums).size != 1) {
//         let tmp = nums.shift();
//         nums.push(tmp);
//     }
// }
