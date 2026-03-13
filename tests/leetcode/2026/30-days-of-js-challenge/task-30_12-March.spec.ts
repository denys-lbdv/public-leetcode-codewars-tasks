import { EventEmitter } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-30_12-March/task-30_12-March";
import test, { expect } from "@playwright/test";

test.describe("Event Emitter", async () => {
  test("Event Emitter case 1", async () => {
    const emitter = new EventEmitter();
    emitter.emit("firstEvent"); // [], no callback are subscribed yet
    emitter.subscribe("firstEvent", function cb1() {
      return 5;
    });
    emitter.subscribe("firstEvent", function cb2() {
      return 6;
    });
    expect(emitter.emit("firstEvent")).toEqual([5, 6]); // [5, 6], returns the output of cb1 and cb2
  });
  test("Event Emitter case 2", async () => {
    const emitter = new EventEmitter();
    emitter.subscribe("firstEvent", function cb1(...args) {
      return args.join(",");
    });
    expect(emitter.emit("firstEvent", [1, 2, 3])).toEqual(["1,2,3"]); // ["1,2,3"]
    expect(emitter.emit("firstEvent", [3, 4, 6])).toEqual(["3,4,6"]); // ["3,4,6"]
  });

  test("Event Emitter case 3", async () => {
    const emitter = new EventEmitter();
    const sub1 = emitter.subscribe("firstEvent", (x) => x + 1);
    const sub2 = emitter.subscribe("firstEvent", (x) => x + 2);
    expect(sub1.unsubscribe()).toBe(undefined); // undefined
    expect(emitter.emit("firstEvent", [5])).toEqual([7]); // [7]
  });

  test("Event Emitter case 4", async () => {
    const emitter = new EventEmitter();
    const sub1 = emitter.subscribe("firstEvent", (x) => x + 1);
    const sub2 = emitter.subscribe("firstEvent", (x) => x + 2);
    const sub3 = emitter.subscribe("firstEvent", (x) => x + 3);
    expect(sub2.unsubscribe()).toBe(undefined); // undefined
    expect(sub3.unsubscribe()).toBe(undefined); // undefined
    expect(emitter.emit("firstEvent", [5])).toEqual([6]); // [7]
  });
});
