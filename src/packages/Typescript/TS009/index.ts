/**
 * 函数类型
 * 协变与逆变的比较
 * https://dev.to/codeoz/how-i-understand-covariance-contravariance-in-typescript-2766
 */

class Animal {
  asPet() {}
}

class Dog extends Animal {
  bark() {}
}

class Corgi extends Dog {
  cute() {}
}

class Greyhound extends Dog {}

type FooFunc = () => string;

type BarFunc = () => 'literal types';

type BazFunc = (input: string) => number;

// 对于一个接受 Dog 类型并返回 Dog 类型的函数

type DogFactory = (args: Dog) => Dog;

function makeDogBark(dog: Dog) {
  dog.bark();
}

makeDogBark(new Corgi()); // 没问题
makeDogBark(new Animal()); // 不行

type AsFuncArgType<T> = (arg: T) => void;
type AsFuncReturnType<T> = (arg: unknown) => T;

// 1 成立：(T -> Corgi) ≼ (T -> Dog)
type CheckReturnType = AsFuncReturnType<Corgi> extends AsFuncReturnType<Dog>
  ? 1
  : 2;

// 2 不成立：(Dog -> T) ≼ (Animal -> T)
type CheckArgType = AsFuncArgType<Dog> extends AsFuncArgType<Animal> ? 1 : 2;
