export function licenseKeyFormatting(s: string, k: number): string {
  s = s.replaceAll("-", "");
  let amountOfGroups = Math.floor(s.length / k);
  let ar: string[] = [];
  let i = s.length;
  while (i > s.length - amountOfGroups * k) {
    let val1 = s.slice(i - k, i);
    ar.unshift(val1);
    i = i - k;
  }

  if (s.length - amountOfGroups * k !== 0) {
    ar.unshift(s.slice(0, s.length - amountOfGroups * k));
  }
  return ar.join("-").toLocaleUpperCase();
}
