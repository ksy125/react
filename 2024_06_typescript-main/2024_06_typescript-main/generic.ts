//generic.ts -> generalize[일반화하다]
type G<T, K> = {
  first: T;
  second: K;
};
const test: G<string, number> = {
  first: "문자넣어야하고",
  second: 1234,
};

type HamburgerSet<A, B, C> = {
  main: A;
  side: B;
  drink: C;
};

type Morning = "머핀";
type NotMorning = "참깨빵";
type Rice = "라이스";

type Hamburger<T> = {
  bread: T;
  content: "불고기" | "쉬림프" | "치킨" | "토마토에그";
};
type Side = "감자튀김" | "코우슬로" | "맥너겟" | "소프트아이스크림";
type Coffee = "드립커피" | "아메리카노" | "디카페인" | "라떼";
type Beverage = "콜라" | "스프라이트" | "제로콜라" | "환타";

const MacMorning: HamburgerSet<
  Hamburger<Rice | Morning>,
  Side,
  Coffee | Beverage
> = {
  main: {
    bread: "머핀",
    content: "토마토에그",
  },
  side: "감자튀김",
  drink: "드립커피",
};

type Success<T> = {
  result: "success";
  value: T;
};

type Fail = {
  result: "fail";
  value: "error";
};

type Response_<T> = Success<T> | Fail;
const test2 = (b: Response_<number>) => {
  if (b.result === "success") {
    return b.value + 100;
  } else {
    console.log(b.value);
  }
};
