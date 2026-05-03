export function freqAlphabets(s: string): string {
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

  let decryptMapping = new Map<string, string>();

  for (let i = 0; i < alphabet.length; i++) {
    if (i + 1 < 10) {
      decryptMapping.set(`${i + 1}`, alphabet[i]);
    } else {
      decryptMapping.set(`${i + 1}#`, alphabet[i]);
    }
  }

  let output: string[] = new Array<string>();

  while (s.length !== 0) {
    if (s.endsWith("#")) {
      output.unshift(decryptMapping.get(s.slice(s.length - 3, s.length)));
      s = s.slice(0, s.length - 3);
    } else {
      output.unshift(decryptMapping.get(s.slice(s.length - 1, s.length)));
      s = s.slice(0, s.length - 1);
    }
  }

  return output.join("");
}
