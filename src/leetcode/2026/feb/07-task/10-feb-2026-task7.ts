function largestEven(s: string): string {
  while (s.endsWith("1")) {
    if (s.endsWith("1") && s.length == 1) {
      return "";
    }
    s = s.slice(0, s.length - 1);
  }
    return s;
}

console.log("result " + largestEven("1"));
console.log("result " + largestEven("12121"));
