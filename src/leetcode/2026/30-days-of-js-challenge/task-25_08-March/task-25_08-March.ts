type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type ArrayType = { id: number } & Record<string, JSONValue>;

export function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const sortFunct = (x) => {
    return x.id;
  };

  let tmpMap = new Map();
  let combinedArr = arr1.concat(arr2);

  combinedArr.forEach((el) => {
    if (!tmpMap.get(el.id)) {
      tmpMap.set(el.id, el);
    } else {
      let oldFromArr1 = tmpMap.get(el.id);
      for (let key in el) {
        oldFromArr1[key] = el[key];
      }

      tmpMap.set(el.id, oldFromArr1);
    }
  });

  let result = Array.from(tmpMap.values());

  result.sort((a, b) => {
    return sortFunct(a) - sortFunct(b);
  });

  return result;
}
