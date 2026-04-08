export function repeatedSubstringPattern(s: string): boolean {
  if (s.length === 1) return false;
  let test = s;
  for (let i = 1; i <= Math.round(s.length / 2); i++) {
    let comb = test.slice(0, i);
    if (test.replaceAll(comb, "").length === 0) {
      return true;
    }
  }
  return false;
}
