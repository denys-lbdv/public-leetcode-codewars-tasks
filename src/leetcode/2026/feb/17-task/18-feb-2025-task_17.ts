export function wordBreak(s: string, wordDict: string[]): boolean {

  // OWN solution which passed a lot of tests but not all in the leetcode

  // let joinedArray = wordDict.join("");
  // return (joinedArray.length <= s.length &&
  //   s.includes(joinedArray)) ||
  //   wordDict.some((el) => el.includes(s))
  //   ? true
  //   : false;

  // OWN solution which passed a lot of tests but not all in the leetcode

  // let tmp1=s;
  // let tmp2=s;
  // for (let i =0;  i<wordDict.length; i++) {
  //   tmp1 = tmp1.replaceAll(wordDict[i], "-");
  //   tmp2 = tmp2.replaceAll(wordDict[wordDict.length-i], "-");

  //   if (tmp1.replaceAll('-','').length == 0 || tmp2.replaceAll('-','').length == 0) {
  //     return true;
  //   }
  // }

  // return false;

  // Leet code suggested solution which pass all tests
    let words = new Set(wordDict);
    let queue = [0];
    let seen = new Set();
    while (queue.length !== 0) {
        let start = queue.shift();
        if (start == s.length) return true;
        for (let end = start + 1; end <= s.length; end++) {
            if (seen.has(end)) continue;
            if (words.has(s.substring(start, end))) {
                queue.push(end);
                seen.add(end);
            }
        }
    }
    return false;


}
