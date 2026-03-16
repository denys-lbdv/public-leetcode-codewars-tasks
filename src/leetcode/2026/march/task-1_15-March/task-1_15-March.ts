export function numDifferentIntegers(word: string): number {
  word = word.replaceAll(/[a-z]/g, " ");
  let array = word.split(" ").filter((v) => v.length > 0).map(v=>BigInt(v));
  let set = new Set(array);
  return set.size;  
}
