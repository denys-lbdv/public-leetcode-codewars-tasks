function reverseByType(s: string): string {
  let letterPositions: number[] = [];
  let lettersArray: string[] = [];
  let symbolsArray: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s.codePointAt(i) >= 97 && s.codePointAt(i) <= 122) {
      letterPositions.push(i);
      lettersArray.push(s.charAt(i));
    } else {
      symbolsArray.push(s.charAt(i));
    }
  }

  lettersArray.reverse();
  symbolsArray.reverse();

  let resultSring: string = "";
  for (let i = 0; i < s.length; i++) {
    if (letterPositions.includes(i)) {
      resultSring += lettersArray.shift();
    } else {
      resultSring += symbolsArray.shift();
    }
  }
  return resultSring;
}

console.log(reverseByType("abcd"));
console.log(reverseByType(")ebc#da@f("));
console.log(reverseByType("!@#$%^&*()"));
console.log(")(*&^%$#@!");
