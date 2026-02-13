export function letterCombinations(digits: string): string[] {
  let result: string[] = [""];

  let map = new Map();
  map.set("2", "abc".split(""));
  map.set("3", "def".split(""));
  map.set("4", "ghi".split(""));
  map.set("5", "jkl".split(""));
  map.set("6", "mno".split(""));
  map.set("7", "pqrs".split(""));
  map.set("8", "tuv".split(""));
  map.set("9", "wxyz".split(""));

  if (digits.length == 1 && parseInt(digits) >= 2) {
    return Array.from(map.get(digits));
  }

  let transformed: string[][] = digits.split("").map((num) => {
    return map.get(num);
  });

  for (const letters of transformed) {
    const next: string[] = [];

    for (const prefix of result) {
      for (const ch of letters) {
        next.push(prefix + ch);
      }
    }
    result = next;
  }
  return result;
}
