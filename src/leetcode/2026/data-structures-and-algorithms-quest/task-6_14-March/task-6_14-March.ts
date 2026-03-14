export function findDisappearedNumbers(nums: number[]): number[] {
  let result: number[] = new Array();
  let expectedArray: number[] = Array.from(
    { length: nums.length },
    (_, index) => index + 1,
  );

  let setFromArray = new Set(nums);

  expectedArray.forEach((v) => (!setFromArray.has(v) ? result.push(v) : false));
  
  return result;
}
