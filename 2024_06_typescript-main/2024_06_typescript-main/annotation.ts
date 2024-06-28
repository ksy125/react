//annotation.ts
const coffee: string = "아메리카노";
const isIcecream: boolean = false;
const cars: string[] = ["제네시스", "테슬라", "모닝"];
const lotto: number[] = [1, 2, 3, 4, 5, 6];
const cake: { name: string; price: number } = {
  name: "치즈케이크",
  price: 3000,
};

// student: 객체 이름, 프로그래밍 수업들, 나이, 현재재학중
const student: {
  name: string;
  classes: string[];
  age: number;
  isAttending: boolean;
} = {
  name: "김연우",
  classes: ["리액트", "자바", "주말"],
  age: 20,
  isAttending: true,
};

const test: null = null;
const test1: undefined = undefined;
const test2: any = "이것은 최후의 보루 anyscript";

const add = (a: number, b: number): number => a + b;
const add1 = (a: number, b: string): string => a + b;
