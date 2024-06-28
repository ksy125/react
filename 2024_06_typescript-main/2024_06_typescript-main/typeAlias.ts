// typeAlias:별칭,별명
type TTest = string | string[];
const test: TTest = "디카페인 아아";

type Bean = {
  shot: number;
  hasDecaffien: boolean;
};

type Liquid = {
  name: string;
  kcal: number;
  ingredients: string[];
};

type Carbonated = {
  isZero: boolean;
};

type Milk = {
  isLowFat: boolean;
  isSoy: boolean;
};

type Coffee = Bean & Liquid;
type Beverage = Carbonated & Liquid;
type LatteCoffee = Bean & Liquid & Milk;

// const coke:Beverage = {} ????

type MyTypograph = {
  font: string;
  fontWeight: number;
  color: string;
};

type MyButton = {
  border: string;
  borderRadius: number;
  backgroundColor: string;
  click: () => void;
};
