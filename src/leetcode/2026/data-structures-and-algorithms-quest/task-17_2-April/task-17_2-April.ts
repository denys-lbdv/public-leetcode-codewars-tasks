//    let nums1 = [1, 7, 11];
//     let nums2 = [2, 4, 6];
//     let k = 3;
//     let output = [
//       [1, 2],
//       [1, 4],
//       [1, 6],
//     ];

export function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number,
): number[][] {
  // solution 2

  //   let allValues = new Array();
  //   let result: number[][] = new Array();
  //   for (let elFromNums1 of nums1) {
  //     for (let elFromNums2 of nums2) {
  //       allValues.push([elFromNums1, elFromNums2]);
  //     }
  //   }

  //   for (let i = 0; i < k; i++) {
  //     let min = 1000000;
  //     for (let el of allValues) {
  //       if (el[0] + el[1] < min) {
  //         min = el[0] + el[1];
  //         result[i] = el;
  //       }
  //     }
  //     allValues.splice(allValues.indexOf(result[i]), 1);
  //   }

  //   return result;

  // solution 1

  // let result: number[][] = new Array();
  // while (result.length !== k) {
  //   let minFromNum1 = Math.min(...nums1);
  //   let minFromNum2 = Math.min(...nums2);
  //   if (minFromNum1 < minFromNum2) {
  //     for (let elFromNum2 of nums2) {
  //       result.push([minFromNum1, elFromNum2]);
  //     }
  //   } else if (minFromNum1 === minFromNum2) {
  //     result.push([minFromNum1, minFromNum2]);
  //     nums2 = nums2.splice(nums2.indexOf(minFromNum2), 1);
  //   } else {
  //     for (let elFromNum1 of nums1) {
  //       result.push([elFromNum1, minFromNum2]);
  //     }
  //   }
  // }
  // return result;

  // solution 3 based on Leetcode editorial

  let n = nums1.length;
  let m = nums2.length;

  let ans: number[][] = new Array();

  let visited = new Set<string>();

  let minHeap: number[][] = new Array();
  minHeap.push([nums1[0] + nums2[0], 0, 0]);
  visited.add(`0,0`);

  while (ans.length < k && minHeap.length > 0) {
    let sum, i, j;
    [sum, i, j] = minHeap.shift();
    ans.push([nums1[i], nums2[j]]);

    if (i + 1 < n && !visited.has(`${i + 1},${j}`)) {
      minHeap.push([nums1[i + 1] + nums2[j], i + 1, j]);
      visited.add(`${i + 1},${j}`);
    }

    if (j + 1 < m && visited.has(`${i},${j + 1}`) !== true) {
      minHeap.push([nums1[i] + nums2[j + 1], i, j + 1]);
      visited.add(`${i},${j + 1}`);
    }

    minHeap.sort((a, b) => a[0] - b[0]);
  }

  // ans.forEach((a) => console.log(`${a}\n`));
  return ans;
}
