/**
 * any 类型
 */

// 被标记为 any 类型的变量可以拥有任意类型的值
let anyVar: any = 'linbudu';

anyVar = false;
anyVar = 'linbudu';
anyVar = {
  site: 'juejin',
};

anyVar = () => {};

// 标记为具体类型的变量也可以接受任何 any 类型的值
const val1: string = anyVar;
const val2: number = anyVar;
const val3: () => {} = anyVar;
const val4: {} = anyVar;

/**
 * 如果是类型不兼容报错导致你使用 any，考虑用类型断言替代
 * 如果是类型太复杂导致你不想全部声明而使用 any，考虑将这一处的类型去断言为你需要的最简类型。如你需要调用 foo.bar.baz()，就可以先将 foo 断言为一个具有 bar 方法的类型。
 * 如果你是想表达一个未知类型，更合理的方式是使用 unknown
 */

let unknown: unknown = 'ningtiao';

unknown = false;
unknown = '2222';
unknown = {
  name: 'ninhgtiao',
};

// unknown.foo() // 报错

let unknownVar: unknown;

(unknownVar as { foo: () => {} }).foo();

/**
 * never 类型
 */

type UnionWithNever = 'linbubu' | 599 | true | void | never;

declare const strOrNumOrBool: string | number | boolean;

if (typeof strOrNumOrBool === 'string') {
  console.log('str!');
} else if (typeof strOrNumOrBool === 'number') {
  console.log('num!');
} else if (typeof strOrNumOrBool === 'boolean') {
  console.log('bool!');
} else {
  const _exhaustiveCheck: never = strOrNumOrBool;
  throw new Error(`Unknown input type: ${_exhaustiveCheck}`);
}

/**类型断言还有一种用法是作为代码提示的辅助工具，比如对于以下这个稍微复杂的接口： */

interface IStruct {
  foo: string;
  bar: {
    barPropA: string;
    barPropB: number;
    barMethod: () => void;
    baz: {
      handler: () => Promise<void>;
    };
  };
}

const obj2 = <IStruct>{
  bar: {
    baz: {},
  },
};
