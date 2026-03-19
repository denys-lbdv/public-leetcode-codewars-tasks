export function finalPrices(prices: number[]): number[] {
  let result: number[] = new Array();
  for (let i = 0; i < prices.length; i++) {
    let j = i + 1;
    while (j <= prices.length) {
      if (prices[j] <= prices[i] && j < prices.length) {
        result[i] = prices[i] - prices[j];
        break;
      }
      if (j === prices.length) {
        result[i] = prices[i];
      }
      j++;
    }
  }
  return result;
}
