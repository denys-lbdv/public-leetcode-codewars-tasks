export class TimeLimitedCache {
  private cache = new Map<number, { value: number; timeoutId: any }>();

  constructor() {}

  set(key: number, value: number, duration: number): boolean {
    if (!this.cache.has(key)) {
      this.cache.set(key, {
        value: value,
        timeoutId: setTimeout(() => {
          this.cache.delete(key);
        }, duration),
      });
      return false;
    } else {
      clearTimeout(this.cache.get(key).timeoutId);

      this.cache.set(key, {
        value: value,
        timeoutId: setTimeout(() => {
          this.cache.delete(key);
        }, duration),
      });
      return true;
    }
  }

  get(key: number): number {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
  }

  count(): number {
    return this.cache.size;
  }
}
