export function intersection(nums: number[][]): number[] {
  let output: number[] = new Array();
  for (let el of nums[0]) {
    let count = 0;
    for (let arr of nums) {
      if (arr.includes(el)) {
        count++;
      }
      if (count === nums.length) {
        output.push(el);
      }
    }
  }

  if (output.length !== 0) {
    output.sort((a, b) => a - b);
  }
  return output;
}
