type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

export function once(fn: Function): OnceFn {
  let count = 0;

  return function (...args) {
    count++;
    if (count > 1) {
      return undefined;
    }
    return fn(...args);
  };
}
