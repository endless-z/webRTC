export const DEFAULT_NAME = 'Umi Max';

// 泛型

function identify<T>(args: T): T {
  return args;
}

let message = identify<string>('柠条');

console.log(message, 'identity1');

let num = identify<number>(8888);

console.log(num);

function getUserName<T, U>(value: T, message: U): T {
  console.log(value, '--');
  return value;
}

console.log(getUserName(27, '柠条'));

// 泛型接口

interface Identities<V, M> {
  value: V;
  message: M;
}

function identity<T, U>(value: T, message: U): Identities<T, U> {
  console.log(value + ': ' + typeof value);
  console.log(message + ': ' + typeof message);
  let identities: Identities<T, U> = {
    value,
    message,
  };
  return identities;
}

console.log(identity(68, 'Semlinker'));

// 工具

/**
 * Partial
 * Partial<T> 的作用就是将某个类型里的属性全部变为可选项
 */

// type Partial<T> = {
//   [p in keyof T]?: T[p];
// };

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

/**
 * Record
 * Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型。
 */

interface PageInfo {
  title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
  about: { title: 'about' },
  contact: { title: 'contact' },
  home: { title: 'home' },
};
