export type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

export function expectT(val: any): ToBeOrNotToBe {
  return {
    toBe(expect) {
      if (val === expect) return true;
      throw new Error("Not Equal");
    },
    notToBe(expect) {
      if( val !== expect) return true;
      throw new Error("Equal")
    },
  };
}
