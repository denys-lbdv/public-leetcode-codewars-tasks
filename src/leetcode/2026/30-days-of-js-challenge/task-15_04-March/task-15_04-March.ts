type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

export function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  fn(...args)
  const intervaltId = setInterval(() => fn(...args), t)

  return () => {
    clearInterval(intervaltId);
  };
}
