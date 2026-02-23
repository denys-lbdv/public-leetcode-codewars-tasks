export function intersection(nums1: number[], nums2: number[]): number[] {
  // Solution 1
  let set1 = new Set<number>(nums1);
  let result = new Set<number>();
  nums2.forEach((el) => {
    if (set1.has(el)) result.add(el);
  });

  return [...result];

  // Soluion 2
  // let set1 = new Set<number>(nums1);
  // return Array.from(set1.intersection(new Set(nums2)));
}
