import { expect, test } from "@playwright/test";
import { MyQueue } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-15_31-March/task-15_31-March";

test.describe("Implement Queue using Stacks", async () => {
  test("Implement Queue using Stacks case 1", async () => {
    let myQueue: MyQueue = new MyQueue();
    myQueue.push(1); // queue is: [1]
    myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
    expect(myQueue.peek()).toBe(1); // return 1
    expect(myQueue.pop()).toBe(1); // return 1, queue is [2]
    expect(myQueue.empty()).toBe(false); // return false
  });
});
