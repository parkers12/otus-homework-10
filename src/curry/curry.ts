export const totalSum = (...args: any[]) =>
  args.reduce((acc, cur) => acc + cur);


export function curry(func: any) {
  let argsArray: number[] = [];
  return function curried(...args: any[]) {
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

export const hof = curry(totalSum);