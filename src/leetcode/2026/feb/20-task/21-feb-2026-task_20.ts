/**
 Do not return anything, modify nums in-place instead.
 */

export function firstUniqChar(s: string): number {
  // This solution works faster with test case 4.
  let all = [...new Set([...s])];

  for (let i = 0; i < all.length; i++) {
    if (s.replaceAll(all[i], "").length == s.length - 1) {
      return s.search(all[i]);
    }
  }
  return -1;

  // Solution 1 is long - case 4 prcocess during 5.4 s
  // for (let i=0;i<s.length;i++){
  //   if(s.replaceAll(s.charAt(i),'').length==s.length-1){
  //     return i;
  //   }
  // }
  // return -1;
}
