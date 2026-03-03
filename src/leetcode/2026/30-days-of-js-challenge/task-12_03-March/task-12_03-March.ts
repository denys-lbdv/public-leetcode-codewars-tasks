import { resolve } from "node:dns";

type P = Promise<number>;

export async function addTowPromises(promise1: P, promise2: P): P {
  // solution 2 is faster
  let result: number[] = await Promise.all([promise1, promise2]);
  let sum = result.reduce((accum, current) => accum + current, 0);

  return new Promise((resolve) => resolve(sum));

  // solution 1 is slover than solution 2

  // let p1, p2;
  // p1 = await promise1;
  // p2 = await promise2;

  // return new Promise((resolve) => resolve(p1 + p2));
}
