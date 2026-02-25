// Option 1

// class Counter {
//   init: number;
//   resetV: number;
//   constructor(init: number) {
//     this.init = init;
//     this.resetV = init;
//   }

//   increment(): number {
//     this.init++;
//     return this.init;
//   }
//   decrement(): number {
//     this.init--;
//     return this.init;
//   }
//   reset(): number {
//     this.init = this.resetV;
//     return this.init;
//   }
// }

// export function createCounter(init: any): Counter {
//   return new Counter(init);
// }

// Option 2

export type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

export function createCounter(init) {
  let n = init;
  return {
    increment: () => {
      return (n += 1);
    },
    decrement: () => {
      return (n -= 1);
    },
    reset: () => {
      return (n = init);
    },
  };
}
