export function rotateString(s: string, goal: string): boolean {
  let i = 0;
  let arr: string[] = Array.from(s);
  while (i < s.length) {
    let tmp = arr.shift();
    arr.push(tmp);
    if (arr.join("") === goal) {
      return true;
    }
    i++;
  }
  return false;
}
