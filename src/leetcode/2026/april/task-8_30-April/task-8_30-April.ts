export function numberOfLines(widths: number[], s: string): number[] {
  let alphabet: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let widthsMapping = new Map();
  for (let i = 0; i < alphabet.length; i++) {
    widthsMapping.set(alphabet[i], widths[i]);
  }

  let total = 0;
  let lineCounts = 1;

  for (let el of s) {
    if (total + widthsMapping.get(el) <= 100) {
      total += widthsMapping.get(el);
    } else {
      lineCounts++;
      total = 0;
      total += widthsMapping.get(el);
    }
  }

  return [lineCounts, total];
}
