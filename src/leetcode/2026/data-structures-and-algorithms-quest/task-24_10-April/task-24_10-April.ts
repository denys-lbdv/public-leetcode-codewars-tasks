export function repeatedStringMatch(a: string, b: string): number {
  if (!a.repeat(b.length).includes(b)) return -1;
  //
  let count = 0;
  let tmp: string = "";
  while (true) {
    if (tmp.includes(b)) {
      break;
    }
    tmp += a;
    count++;
  }
  return count;
}
