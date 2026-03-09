export function flatFunction(arr: any[], n: number) {
  if (n == 0) {
    return arr;
  } 
    let clearArr: any[] = [];
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        clearArr.push(...flatFunction(el, n-1));
      } else {
        clearArr.push(el);
      }
    });
    return clearArr;
  

  // Works locally but not works in LeetCode
  // if (n == 0) {
  //   return arr;
  // } else {
  //   let clearArr: [] = [];
  //   arr.forEach((el) => {
  //     if (Array.isArray(el)) {
  //       el.forEach((internalEl) => {
  //         clearArr.push(internalEl);
  //       });
  //     } else {
  //       clearArr.push(el);
  //     }
  //   });
  //   return flatFunction(clearArr, n - 1);
  // }
}
