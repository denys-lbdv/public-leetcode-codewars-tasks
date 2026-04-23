export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  for (let e of s) {
    t = t.replace(e, "");
  }
  return t.length === 0 ? true : false;
}
