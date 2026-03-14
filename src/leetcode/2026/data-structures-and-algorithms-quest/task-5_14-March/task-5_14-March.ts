export function smallerNumbersThanCurrent(nums: number[]): number[] {
  let result:number[]=new Array();
  for (let i=0; i<nums.length;i++){
    let count=0;
    nums.forEach((v)=>{if (nums[i]>v) count++});
    result[i]=count;
  }
  return result;
}
