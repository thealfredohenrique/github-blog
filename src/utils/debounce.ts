export default function debounce<
  T extends (...args: any[]) => void | Promise<void>
>(func: T, delay = 500): (...args: Parameters<T>) => void | Promise<void> {
  let timerId: number;

  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      void func.apply(this, args);
    }, delay);
  };
}
