type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type ArrayType = { id: number } & Record<string, JSONValue>;

export function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  let tmpSet = new Set(arr1);
  let tmpMergedSet=new Set();
  const sortFunct = (x) => {
    x.id;
  };

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i].id === arr2[j].id) {
        // merge elements
        let obj1 = arr1[i];
        let obj2 = arr2[j];
        let mergedObj = arr2[j];
        for (let key1 in obj1) {
          if (!Object.hasOwn(obj2, key1)) {
            mergedObj[key1] = obj1[key1];
          }
        }
        tmpMergedSet.add(mergedObj);
      } else {
        tmpSet.add(arr2[j]);
      }
    }
  }

  let result = Array.from(tmpSet);

  result.sort((a, b) => {
    sortFunct(a) - sortFunct(b);
  });

  console.log("array is\n", result);

  return result;
}
