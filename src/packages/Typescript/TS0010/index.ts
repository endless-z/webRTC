/**
 * TS 泛型
 */

type IFactory<T> = T | number | string;

type IStringify<T> = {
  [K in keyof T]: string;
};

type IClone<T> = {
  [K in keyof T]: T[K];
};

// Stringify 会将一个对象类型的所有属性类型置为 string ，而 Clone 则会进行类型的完全复制。
// TypeScript 的内置工具类型实现：
type IPartial<T> = {
  [P in keyof T]?: T[P];
};

interface IFoo {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: () => void;
}

type PartialIFoo = IPartial<IFoo>;

// 等价于
interface IPartialIFoo {
  prop1?: string;
  prop2?: number;
  prop3?: boolean;
  prop4?: () => void;
}

// 条件类型

type IsEqual<T> = T extends true ? 1 : 2;

type IA = IsEqual<true>;

type IB = IsEqual<false>;

type IC = IsEqual<'ningtiao'>;

type FactoryT<T = boolean> = T | number | string;

/**
 * 开发 master----->feature------>develop
 * 发布 feature------> release ----> master
 * bugfix master----->hotfix---->master
 *
 *
 *
 * Git Flow 工作流
 *
 * 开发 develop-----> feature/xxxx ----> PR ---> develop   打tag v0.0.1.develop
 * 测试 feature/xxx ----> release/20231228 ---- PR ---->   release 打 tag v0.0.1.release
 *
 * 热修复  origin/release 对应测试环境
 *
 * origin/release ---> release_hotfix_gx ---PR --- release 打 tag v0.0.2.release
 *
 * 开发分支也有bug  此时也需要 将 release_hotfix_gx ---> delelop 开发分支
 *
 *
 * 生产发布
 *
 * 完成release版本的提测工作、BUG修复工作后  需要将release分支的版本发布到master上，完成生产环境版本的发布
 *
 *
 */
