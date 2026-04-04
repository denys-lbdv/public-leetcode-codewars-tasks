export function detectCapitalUse(word: string): boolean {
  let upperCase: number = 0;
  let loweCase: number = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      upperCase++;
    } else {
      loweCase++;
    }
  }
  if (word.length === upperCase) {
    return true;
  }
  if (word[0] === word[0].toUpperCase() && word.length - 1 === loweCase) {
    return true;
  }
  if (word.length === loweCase) {
    return true;
  }
  return false;
}
