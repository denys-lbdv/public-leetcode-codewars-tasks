type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

export function chunk(arr: Obj[], size: number): Obj[][] {
  if (arr.length === 0) return [];
  if (size > arr.length) {
    return [arr];
  }

  const amoutOfChunks = Math.floor(arr.length / size);
  let result = [...new Array()];

  for (let i = 0; i < arr.length; i += size) {
    if (i === amoutOfChunks * size) {
      result.push(arr.slice(i));
      break;
    }
    result.push(arr.slice(i, i + size));
  }
  return result;
}
