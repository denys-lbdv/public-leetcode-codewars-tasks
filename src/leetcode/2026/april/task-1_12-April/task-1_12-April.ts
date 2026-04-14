export function minimumChairs(s: string): number {
  let result: number[] = new Array();
  let maxCount = 0;
  for (let el of Array.from(s)) {
    if (el === "E") {
      result.push(1);
    } else {
      result.shift();
    }
    if (result.length > maxCount) {
      maxCount++;
    }
  }

  return maxCount;
}
