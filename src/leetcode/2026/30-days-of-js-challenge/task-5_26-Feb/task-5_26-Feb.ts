export function map(
  arr: number[],
  fn: (n: number, i: number) => number,
): number[] {
  // Solution 1

  // let output: number[] = [];
  // arr.forEach((e, i) => {
  //   output.push(fn(e, i));
  // });

  // return output;

  // Solution 2
  arr.forEach((e, i) => {
    arr[i] = fn(e, i);
  });
  return arr;
}
