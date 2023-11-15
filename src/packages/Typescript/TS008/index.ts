// const arr2 = ['apple', 'banana', 1];
// const arr3 = ['apple', 1, 'banana'];

// function areArraysContentEqual(arr: any, arr1: any) {
//   if (arr.length !== arr1.length) return false;

//   const countMap1 = count(arr1);
//   const countMap2 = count(arr1);

//   function count(arr = []) {
//     const resMap = new Map();
//     for (const item of arr) {
//       resMap.set(item, (resMap.get(item) || 0) + 1);
//     }
//     return resMap;
//   }

//   for (const [key, count] of countMap1) {
//     if (countMap2.get(key) !== count) {
//       return false;
//     }
//   }
//   return true;
// }

// areArraysContentEqual(arr2, arr3);

// 类型查询操作符

const str = 'linbudu';

const objB = { name: 'linbudu' };

const nullVar = null;
const undefinedVar = undefined;

const func1 = (input: string) => {
  return input.length > 10;
};

type Str = typeof str; // "linbudu"
type Obj = typeof obj; // { name: string; }
type Null = typeof nullVar; // null
type Undefined = typeof undefined; // undefined
type Func = typeof func; // (input: string) => boolean

const funct = (val: string) => {
  return val.length > 10;
};

const func3: typeof funct = (val: string) => {
  return val === 'ningtiao';
};

const func4 = (input: string) => {
  return input.length > 10;
};

// boolean
type FuncReturnType = ReturnType<typeof func4>;

// 类型守卫

function foo2(input: string | number) {
  if (typeof input === 'string') {
  }
  if (typeof input === 'number') {
  }
  // ...
}

declare const strOrNumOrBool2: string | number | boolean;

if (typeof strOrNumOrBool2 === 'string') {
  // 一定是字符串！
  strOrNumOrBool2.charAt(1);
} else if (typeof strOrNumOrBool2 === 'number') {
  // 一定是数字！
  strOrNumOrBool2.toFixed();
} else if (typeof strOrNumOrBool2 === 'boolean') {
  // 一定是布尔值！
  strOrNumOrBool2 === true;
} else {
  // 要是走到这里就说明有问题！
  const _exhaustiveCheck: never = strOrNumOrBool2;
  throw new Error(`Unknown input type: ${_exhaustiveCheck}`);
}

// is 关键字
function isString(input: unknown): input is string {
  return typeof input === 'string';
}

function foo2(input: string | number) {
  if (isString(input)) {
    // 正确了
    input.replace('linbudu', 'linbudu599');
  }
  if (typeof input === 'number') {
  }
  // ...
}

// 基于 in 与 instanceof 的类型保护
interface Foo {
  foo: string;
  fooOnly: boolean;
  shared: number;
}

interface Bar {
  bar: string;
  barOnly: boolean;
  shared: number;
}

function handle(input: Foo | Bar) {
  if ('foo' in input) {
    input.fooOnly;
  } else {
    input.barOnly;
  }
}

// 类型断言守卫

import assert from 'assert';

let name: any = 'linbudu';

assert(typeof name === 'number');

// number 类型
name.toFixed();

let name2: any = 'linbudu';

function assertIsNumber(val: any): asserts val is number {
  if (typeof val !== 'number') {
    throw new Error('Not a number!');
  }
}

assertIsNumber(name2);

// number 类型！
name2.toFixed();
