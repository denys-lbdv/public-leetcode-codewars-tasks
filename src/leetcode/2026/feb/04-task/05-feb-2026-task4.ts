function longestCommonPrefix(strs: string[]): string {
  let prefixesMap = new Map();

  // iterate throught the possible prefixes
  for (let i = strs[0].length; i > 0; i--) {
    let currentPrefix = strs[0].slice(0, i);
    let count = 0;

    // iterate all string
    for (let j = 0; j < strs.length; j++) {
      if (strs[j].startsWith(currentPrefix)) {
        count++;
      }
    }
    prefixesMap.set(currentPrefix, count);
  }

  // Find the prefix which appears more times than others prefixes
  let prefixResult = "";
  let maxCount = 0;
  prefixesMap.forEach((value, key) => {
    console.log(`${key} : ${value}`);
    if (value > maxCount) {
      prefixResult = key;
      maxCount = value;
    }
  });

if (maxCount != strs.length) {
      return "";
    } else {
      return prefixResult;
    }
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["a"]));
