// let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
// let output = [1, 1, 4, 2, 1, 1, 0, 0];
export function dailyTemperatures(temperatures: number[]): number[] {
  // Soluion 1: Time Limit Exceeded

  // let result: number[] = new Array();
  // for (let i = 0; i < temperatures.length; i++) {
  //   let j = i + 1;
  //   while (j <= temperatures.length) {
  //     if (temperatures[i] < temperatures[j] && j < temperatures.length) {
  //       result[i] = j - i;
  //       break;
  //     }

  //     if (j === temperatures.length) {
  //       result[i] = 0;
  //     }
  //     j++;
  //   }
  // }
  // return result;

  // // Soluion 2: Time Limit Exceeded

  // let result: number[] = new Array();
  // for (let i = 0; i < temperatures.length - 1; i++) {
  //   let found = temperatures
  //     .slice(i, temperatures.length)
  //     .findIndex((val) => val > temperatures[i]);
  //   result[i] = found !== -1 ? found : 0;
  // }
  // result[temperatures.length - 1] = 0;
  // return result;

  // Soluion 3: based on solutions on Leetcode
  // Stack to store indices of temperatures, answer array for result
  const stack: number[] = [];
  const answer: number[] = new Array(temperatures.length).fill(0);

  // Iterate through the temperatures array
  for (let i = 0; i < temperatures.length; i++) {
    // Check if the stack is not empty and current temperature is higher
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      // Calculate waiting days and update answer
      const index = stack.pop()!;
      answer[index] = i - index;
    }

    // Push current index onto the stack
    stack.push(i);
  }

  // Return the final array of waiting days
  return answer;
}
