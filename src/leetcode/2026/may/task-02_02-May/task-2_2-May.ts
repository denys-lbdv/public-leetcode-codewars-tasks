export function numOfUnplacedFruits(
  fruits: number[],
  baskets: number[],
): number {
  for (let i = 0; i < fruits.length; i++) {
    let currentFruit = fruits[i];
    for (let j = 0; j < baskets.length; j++) {
      let currentBasket = baskets[j];
      if (currentFruit <= currentBasket) {
        baskets.splice(j, 1);
        fruits.splice(i, 1);
        i--;
        break;
      }
    }
  }

  return fruits.length;
}
