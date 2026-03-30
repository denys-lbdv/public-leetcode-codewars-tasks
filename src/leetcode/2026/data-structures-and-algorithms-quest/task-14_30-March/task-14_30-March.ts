export function timeRequiredToBuy(tickets: number[], k: number): number {
  let map = new Map<number, number>();

  for (let i = 0; i < tickets.length; i++) {
    map.set(i, tickets[i]);
  }

  let countTime = 0;
  while (map.get(k) !== 0) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[0] === 0) {
        let current: number = tickets.shift();
        tickets.push(current);
      } else {
        countTime++;
        let current: number = tickets.shift();
        current--;
        map.set(i, current);
        tickets.push(current);
        if (map.get(k) === 0) {
          return countTime;
        }
      }
    }
  }
  return countTime;
}
