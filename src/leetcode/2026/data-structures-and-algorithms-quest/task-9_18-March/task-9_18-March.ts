export function exclusiveTime(n: number, logs: string[]): number[] {
  const stack = [];
  const results = new Array(n).fill(0);

  let prev = 0;
  for (const log of logs) {
    const [process, flag, time] = log.split(":");
    if (flag === "start") {
      if (stack.length > 0)
        // add the current gap to last process's total count
        results[stack[stack.length - 1]] += parseInt(time) - prev;
      prev = parseInt(time);
      stack.push(parseInt(process));
    }
    if (flag === "end") {
      results[stack.pop()] += parseInt(time) - prev + 1;
      prev = parseInt(time) + 1;
    }
  }

  return results;
}
