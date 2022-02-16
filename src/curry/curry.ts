export const sum = (...args: number[]) =>
  args.reduce((acc, cur) => acc + cur, 0);

export function curry(func: Function) {
  let argsArray: number[] = [];
  return function curried(this: any, ...args: number[]): any {
    let res;
    if (args.length === 0) {
      res = func(...argsArray);
    } else {
      argsArray = argsArray.concat(args);
      res = function pass(...args2: any[]) {
        return curried.apply(this, args2);
      }
    }
    return res;
  }
}

export const hof = curry(sum);