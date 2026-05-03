export function repeatedNTimes(nums: number[]): number {
  let frequencyMap = new Map();

  let n = nums.length / 2;

  for (let el of nums) {
    if (frequencyMap.get(el)) {
      let currentAmount = frequencyMap.get(el);
      if (currentAmount + 1 === n) {
        return el;
      } else {
        frequencyMap.set(el, currentAmount + 1);
      }
    } else {
      frequencyMap.set(el, 1);
    }
  }
}
