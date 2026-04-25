export function maxContainers(n: number, w: number, maxWeight: number): number {
  let amountOfContainers: number = n * n;
  let currentWeight: number = amountOfContainers * w;
  if (currentWeight <= maxWeight) {
    return amountOfContainers;
  }

  
  while (currentWeight>maxWeight){
    currentWeight=currentWeight-w;
    amountOfContainers--;
  }

  return amountOfContainers;
}
