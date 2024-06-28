// Union 연산자[합집합]
const a1: string | number = 123;
const a2: Element | null = document.querySelector(".box");
const a3: () => number = () => 1;

const maratang: { ingreidents: string[]; price: number | string } = {
  ingreidents: ["숙주", "푸주", "버섯"],
  price: "7500원",
};

// Intersection 연산자 [교집합]
const pizza: { size: string } & { toppings: string[] } & { eat: () => void } = {
  size: "L",
  toppings: ["버섯", "치즈", "페퍼로니"],
  eat: () => {
    console.log("피자꿀맛");
  },
};
