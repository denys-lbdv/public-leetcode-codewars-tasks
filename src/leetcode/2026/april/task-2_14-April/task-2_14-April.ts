export function reverseOnlyLetters(s: string): string {
  let result: string[] = [...s];
  let charsOnly: string[] = [...s.replaceAll(/[^a-zA-Z]/g, "")];
  for (let j = 0; j < s.length; j++) {
    if (
      (s.charCodeAt(j) > 64 && s.charCodeAt(j) < 91) ||
      (s.charCodeAt(j) > 96 && s.charCodeAt(j) < 123)
    ) {
      result[j] = charsOnly.pop();
    }
  }
  return result.join("");
}
