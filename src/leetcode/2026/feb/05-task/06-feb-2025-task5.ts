function isBalanced(num: string): boolean {
  let sumOdd = 0;
  let sumEven = 0;
  for (let i = 0; i < num.length; i++) {
    if (i % 2 === 0) {
      sumOdd += parseInt(num[i]);
    } else {
      sumEven += parseInt(num[i]);
    }
  }
  return sumOdd == sumEven ? true : false;
}

console.log(isBalanced("1234"));
console.log(isBalanced("24123"));
