function reversePrefix(s: string, k: number): string {
  let reversedPart = [...s.slice(0, k)].reverse().join("");

  return reversedPart + s.slice(k,s.length);
}

console.log(reversePrefix("abcd", 2));
