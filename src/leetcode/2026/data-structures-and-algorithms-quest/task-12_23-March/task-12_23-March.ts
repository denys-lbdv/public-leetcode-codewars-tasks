import { resourceUsage } from "node:process";

export function largestRectangleArea(heights: number[]): number {
  let length = Array.from({ length: heights.length - 1 }, (_, i) => i + 1);
  let all: number[] = [...heights];

  for (let el of length) {
    for (let j = 0; j < heights.length; j++) {
      let slice = heights.slice(j, j + el + 1);
      let minValue = Math.min(...slice) * slice.length;

      all.push(minValue);
    }
  }

  return Math.max(...all);
}
