function romanToInt(s: string): number {
  let result = s
    .replace(/IV/g, " 4 ")
    .replace(/IX/g, " 9 ")
    .replace(/XL/g, " 40 ")
    .replace(/XC/g, " 90 ")
    .replace(/CD/g, " 400 ")
    .replace(/CM/g, " 900 ")
    .replace(/III/g, " 3 ")
    .replace(/II/g, " 2 ")
    .replace(/I/g, " 1 ")
    .replace(/V/g, " 5 ")
    .replace(/X/g, " 10 ")
    .replace(/L/g, " 50 ")
    .replace(/C/g, " 100 ")
    .replace(/D/g, " 500 ")
    .replace(/M/g, " 1000 ");

    console.log('result '+result)

  let array = result.trim().split(" ");

  console.log("array " + array);

  let total: number = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i]!=='') {
      total += parseInt(array[i]);
    }
  }

  console.log("total " + total);
  return total as number;
}

console.log(romanToInt("XIV"));
console.log(romanToInt("IIIIII"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
