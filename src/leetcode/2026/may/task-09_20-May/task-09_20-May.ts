export function makeFancyString(s: string): string {
  for (let i = 0; i < s.length - 2; i++) {
    if (s.charAt(i) === s.charAt(i + 1) && s.charAt(i) === s.charAt(i + 2)) {
      s = s.replaceAll(s.charAt(i).repeat(3), s.charAt(i).repeat(2));
      i--;
    }
  }
  return s;
}
