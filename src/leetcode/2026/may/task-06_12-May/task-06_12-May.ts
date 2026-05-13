export function uncommonFromSentences(s1: string, s2: string): string[] {
  let s1Words: string[] = s1.split(" ");
  let s2Words: string[] = s2.split(" ");
  for (let word of s1Words) {
    if (s2Words.includes(word)) {
      s1Words = s1Words.filter((v) => v !== word);
      s2Words = s2Words.filter((v) => v !== word);
    }
  }

  let map1 = new Map<string, number>();
  let map2 = new Map<string, number>();

  for (let word of s1Words) {
    if (map1.has(word)) {
      map1.set(word, map1.get(word) + 1);
    } else {
      map1.set(word, 1);
    }
  }

  for (let [k, v] of map1.entries()) {
    if (v !== 1) {
      map1.delete(k);
    }
  }

  for (let word of s2Words) {
    if (map2.has(word)) {
      map2.set(word, map2.get(word) + 1);
    } else {
      map2.set(word, 1);
    }
  }

  for (let [k, v] of map2.entries()) {
    if (v !== 1) {
      map2.delete(k);
    }
  }

  return [...map1.keys(), ...map2.keys()];
}
