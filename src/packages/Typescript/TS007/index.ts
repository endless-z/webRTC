/**
 * 类型工具可以分成三类：操作符、关键字与专用语法
 */

type A = string;

type StatusCode = 200 | 301 | 400 | 500 | 502;
type PossibleDataTypes = string | number | (() => unknown);

const statusMap: StatusCode = 502;

// 抽离函数
type Handler = (e: Event) => void;

const clickHandler: Handler = (e) => {};
const moveHandler: Handler = (e) => {};
const dragHandler: Handler = (e) => {};

type ObjType = {
  name: string;
  age: number;
};

// 工具类

type Factory<T> = T | number | string;

const foo5: Factory<boolean> = true;

type FactoryWithBool = Factory<boolean>;

const FooType: FactoryWithBool = true;

type Factory1<NewType> = NewType | number | string;

type MaybeNull<T> = T | null;

function process1(input: MaybeNull<{ handler: () => {} }>) {
  input?.handler();
}

type MaybeArray<T> = T | T[];

// 函数泛型我们会在后面了解~
function ensureArray<T>(input: MaybeArray<T>): T[] {
  return Array.isArray(input) ? input : [input];
}

// 交叉类型

interface NameStruct {
  name: string;
}

interface AgeStruct {
  age: number;
}

type ProfileStruct = NameStruct & AgeStruct;

const profile: ProfileStruct = {
  name: 'linbudu',
  age: 18,
};

type UnionIntersection1 = (1 | 2 | 3) & (1 | 2); // 1 | 2
type UnionIntersection2 = (string | number | symbol) & string; // string

// 索引类型

// 索引签名类型
interface AllStringTypes {
  [key: string]: string;
}

// type AllStringTypes = {
//   [key: string]: string;
// };

type PropType1 = AllStringTypes['linbudu']; // string
type PropType2 = AllStringTypes['599']; // string

const AllType: AllStringTypes = {
  linbudu: '599',
  599: 'linbudu',
  [Symbol('ddd')]: 'symbol',
};

// interface AllStringTypes2 {
//   // 类型“number”的属性“propA”不能赋给“string”索引类型“boolean”。
//   propA: number;
//   [key: string]: boolean;
// }

interface StringOrBooleanTypes {
  propA: number;
  propB: boolean;
  [key: string]: number | boolean;
}

interface AnyTypeHere {
  [key: string]: any;
}

const AnyType: AnyTypeHere['linbudu'] = 'any value';

// 索引类型查询

interface Foo {
  linbudu: 1;
  599: 2;
}

type FooKeysList = keyof Foo; // "linbudu" | 599
// 在 VS Code 中悬浮鼠标只能看到 'keyof Foo'
// 看不到其中的实际值，你可以这么做：
type FooKeys = keyof Foo & {}; // "linbudu" | 599

// type FooKeys = Object.keys(Foo).join(" | ");

// 索引类型访问

interface NumberRecord {
  [key: string]: number;
}

type PropType = NumberRecord[string]; // number

interface Foo {
  propA: number;
  propB: boolean;
}

type PropAType = Foo['propA']; // number
type PropBType = Foo['propB']; // boolean

interface Foo {
  propA: number;
  propB: boolean;
  propC: string;
}

// 一次性获取这个对象所有的键的字面量类型
type PropTypeUnion = Foo[keyof Foo]; // string | number | boolean

// interface Foo {
//   propA: number;
// }

// 类型“Foo”没有匹配的类型“string”的索引签名。
// type PropAType2 = Foo[string];

// 映射类型

type Stringify<T> = {
  [K in keyof T]: string;
};

interface Foo {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: () => void;
}

type StringifiedFoo = Stringify<Foo>;

// 等价于
// interface StringifiedFoo {
//   prop1: string;
//   prop2: string;
//   prop3: string;
//   prop4: string;
// }

// 为代码

// const StringifiedFoo = {};
// for (const k of Object.keys(Foo)){
//   StringifiedFoo[k] = string;
// }

type Clone<T> = {
  [K in keyof T]: T[K];
};
