type Fn = (n: number, i: number) => any;

export function filter(arr: number[], fn: Fn): number[] {
  // Option 1 more slovly works
  // let output: number[] = [];
  // arr.forEach((v, i) => {
  //   fn(v, i) ? output.push(v) : false;
  // });
  // return output;

  // Option 2
  const output: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      output.push(arr[i]);
    }
  }
  return output;
}
