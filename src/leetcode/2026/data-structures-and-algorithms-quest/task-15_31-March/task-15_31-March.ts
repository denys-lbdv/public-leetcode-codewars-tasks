export class MyQueue {
  internalArray;
  constructor() {
    this.internalArray = new Array<number>();
  }

  push(x: number): void {
    this.internalArray.push(x);
  }

  pop(): number {
    return this.internalArray.shift();
  }

  peek(): number {
    return this.internalArray[0];
  }

  empty(): boolean {
    return !Boolean(this.internalArray.length);
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
