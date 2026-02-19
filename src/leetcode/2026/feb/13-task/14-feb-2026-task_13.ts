export function majorityElement(nums: number[]): number {
  let frequency: number = Math.round(nums.length / 2);
  let countElements = new Map<number, number>();

  nums.forEach((el) => {
    if (countElements.has(el)) {
      countElements.set(el, countElements.get(el) + 1);
    } else {
      countElements.set(el, 1);
    }
  });

  // Sort map by value
  //   let sortedMapByValue = new Map(
  //     [...countElements.entries()].sort((a, b) => {
  //       return b[1] - a[1];
  //     }),
  //   );

  let result: number;
  //Option 1 how to iterate map

  // countElements.forEach((val, key) => {
  //   if (val >= frequency) {
  //     result = key;
  //   }
  // });

  // Option 2 how to iterate map

  // for (let [key, value] of countElements) {
  //   if (value >= frequency) {
  //     result = key;
  //   }
  // }

  // Option 3 how to iterate map it's fasters iteratore
  // let entry = countElements.entries();
  // while (true) {
  //   let current = entry.next();
  //   if (current.done) {
  //     break;
  //   }

  //   if (current.value[1] >= frequency) {
  //     result = current.value[0];
  //   }
  // }

  // Option 4 how to iterate map
  for (let entry of countElements.entries()) {
    if (entry[1] >= frequency) {
      result = entry[0];
    }
  }
  return result;
}
