type F = (...args: number[]) => void;

export function debounce(fn: F, t: number): F {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, t);
  };
}
