export class ArrayWrapper {
  constructor(protected internalArray: number[]) {}

  valueOf(): number {
    return this.internalArray.reduce((acc, current) => {
      return (acc += current);
    }, 0);
  }

  toString(): string {
    return `[${this.internalArray}]`;
  }
}
