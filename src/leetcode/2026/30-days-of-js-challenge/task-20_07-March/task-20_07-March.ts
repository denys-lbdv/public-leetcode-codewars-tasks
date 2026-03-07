import { json } from "node:stream/consumers";

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];
export function isEmpty(obj: Obj): boolean {
  if (obj instanceof Object) {
    return Object.keys(obj).length >= 1 ? false : true;
  }

    return Array.isArray(obj);
}
