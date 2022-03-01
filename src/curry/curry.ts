interface CurriedFunction1<T, R> {
  (t1: T): R;
}

interface CurriedFunction2<T, R> {
  (t1: T, t2: T): R;
  (t1: T): CurriedFunction1<T, R>;
}

interface CurriedFunction3<T, R> {
  (t1: T, t2: T, t3: T): R;
  (t1: T, t2: T): CurriedFunction1<T, R>;
  (t1: T): CurriedFunction2<T, R>;
}

interface CurriedFunction4<T, R> {
  (t1: T, t2: T, t3: T, t4: T): R;
  (t1: T, t2: T, t3: T): CurriedFunction1<T, R>;
  (t1: T, t2: T): CurriedFunction2<T, R>;
  (t1: T): CurriedFunction3<T, R>;
}

interface CurriedFunction5<T, R> {
  (t1: T, t2: T, t3: T, t4: T, t5: T): R;
  (t1: T, t2: T, t3: T, t4: T): CurriedFunction1<T, R>;
  (t1: T, t2: T, t3: T): CurriedFunction2<T, R>;
  (t1: T, t2: T): CurriedFunction3<T, R>;
  (t1: T): CurriedFunction4<T, R>;
}

export type CurriedFunction<T, R> = T extends [R, R, R, R, R]
  ? CurriedFunction5<R, R>
  : T extends [R, R, R, R]
  ? CurriedFunction4<R, R>
  : T extends [R, R, R]
  ? CurriedFunction3<R, R>
  : T extends [R, R]
  ? CurriedFunction2<R, R>
  : T extends [R]
  ? CurriedFunction1<R, R>
  : never;

export function curry<T extends any[], R>(
  func: (...args: T) => R
): CurriedFunction<T, R>;

export function curry(func: (...args: any[]) => any): any {
  const arrLn = func.length;
  return function curried(...args: any[]) {
    if (args.length >= arrLn) {
      return func(...args);
    }
    return function pass(...args2: any[]) {
      return curried(...args.concat(args2));
    };
  };
}
