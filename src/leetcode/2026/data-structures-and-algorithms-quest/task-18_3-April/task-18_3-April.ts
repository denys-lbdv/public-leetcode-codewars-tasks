export function isPossible(target: number[]): boolean {
  // It's not my solution, just existing in leetcode solution

  // get the sum of al the values;
  let sum = target.reduce((a, b) => a + b);
  while (true) {
    // find the max value and index in target
    let idx = 0;
    let max = target[0];
    for (let i = 1; i < target.length; i++) {
      if (target[i] > max) {
        idx = i;
        max = target[i];
      }
    }

    // if the max is 1 return true;
    if (max === 1) return true;

    // recalculate the max and sum
    sum -= max;
    max -= sum;
    // if max is less than 1 we can not make all the values as 1 so return false
    if (max < 1) return false;
    sum += max;

    // update the value at the max index to the new value
    target[idx] = max;
  }
}
