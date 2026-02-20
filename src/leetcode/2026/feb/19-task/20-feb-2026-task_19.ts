/**
 Do not return anything, modify nums in-place instead.
 */
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => {
    return a - b;
  });
}
