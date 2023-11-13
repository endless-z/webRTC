/**
 * 函数的类型签名
 */

function getUser(name: string): number {
  return name.length;
}

// 变量进行类型声明
// (name: string): number 函数类型签名
const foo: (name: string) => number = function (name) {
  return name.length;
};

// 使用类型别名将函数类型抽离
type FuncFoo = (name: string) => number;

const Foo: FuncFoo = (name) => {
  return name.length;
};

interface FuncFooStruct {
  (name: string): number;
}

/**
 * void 类型
 *
 * 在 TypeScript 中，一个没有返回值（即没有调用 return 语句）的函数，
 * 其返回类型应当被标记为 void 而不是 undefined，即使它实际的值是 undefined。
 */

// 没有调用 return 语句
function User(): void {}

// 调用了 return 语句，但没有返回值
function bar(): void {
  return;
}

function bar1(): undefined {
  return;
}

interface Props {
  getUserName: () => void;
}

// 可选参数与 rest 参数
// 可选参数必须位于必选参数之后
// 在函数逻辑中注入可选参数默认值
function foo1(name: string, age?: number): number {
  const inputAge = age || 18; // 或使用 age ?? 18
  return name.length + inputAge;
}

// 直接为可选参数声明默认值
function foo2(name: string, age: number = 18): number {
  const inputAge = age;
  return name.length + inputAge;
}

function foo3(arg1: string, ...rest: any[]) {}

foo3('linbudu', 18, true);

// 函数重载
// function func(foo: number, bar?: boolean): string | number {
//   if (bar) {
//     return String(foo);
//   } else {
//     return foo * 599;
//   }
// }

function func(foo: number, bar: true): string;
function func(foo: number, bar?: false): number;
function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}

const res1 = func(599); // number
const res2 = func(599, true); // string
const res3 = func(599, false); // number

// 类与类成员的类型签名

class Person {
  prop: string;

  constructor(inputProp: string) {
    this.prop = inputProp;
  }

  print(addon: string): void {
    console.log(`${this.prop} and ${addon}`);
  }

  get propA(): string {
    return `${this.prop}+A`;
  }

  set propA(value: string) {
    this.prop = `${value}+A`;
  }
}

/**
 * 修饰符
 * public / private / protected / readonly。除 readonly 以外，其他三位都属于访问性修饰符，
 * 而 readonly 属于操作性修饰符（就和 interface 中的 readonly 意义一致）。
 */

class Person1 {
  private prop: string;

  constructor(inputProp: string) {
    this.prop = inputProp;
  }

  protected print(addon: string): void {
    console.log(`${this.prop} and ${addon}`);
  }

  public get propA(): string {
    return `${this.prop}+A`;
  }

  public set propA(value: string) {
    this.propA = `${value}+A`;
  }
}

/**
 * 静态成员
 */

class Utils {
  public static identifier = 'linbudu';

  public static makeUHappy() {
    Utils.studyWithU();
    // ...
  }

  public static studyWithU() {}
}

Utils.makeUHappy();

/**
 * 继承
 */

class Base {}

class Derived extends Base {}

class Base1 {
  printWithLove() {}
  print() {}
}

class Derived1 extends Base1 {
  override print() {
    // ...
  }
}

/**
 * 抽象类
 * 对于抽象类，它的本质就是描述类的结构。看到结构，
 * 你是否又想到了 interface？是的。interface 不仅可以声明函数结构，也可以声明类的结构：
 */

abstract class AbsFoo {
  abstract absProp: string;
  abstract get absGetter(): string;
  abstract absMethod(name: string): string;
}

class Foo3 implements AbsFoo {
  absProp: string = 'linbudu';

  get absGetter() {
    return 'linbudu';
  }

  absMethod(name: string) {
    return name;
  }
}
