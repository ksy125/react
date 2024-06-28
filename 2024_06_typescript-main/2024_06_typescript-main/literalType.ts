// Hybrid Type
// type Coffee = Bean & Liquid

// Literal Type
type Direction = "north" | "south" | "west" | "east";
const destination: Direction = "south";

type PrimaryColor = "#05141F" | "#FFFFFF";
type SecondaryColor = "#5D7D2B" | "#4C5B35" | "#589000";
type FontSize = 11 | 12 | 13 | 14 | 16 | 20 | 24;

const component: {
  color: PrimaryColor | SecondaryColor;
  fontSize: FontSize;
}[] = [
  { color: "#05141F", fontSize: 13 },
  { color: "#FFFFFF", fontSize: 14 },
  { color: "#5D7D2B", fontSize: 20 },
];

component.forEach(({ color, fontSize }) => {
  const btn = document.createElement("button");
  btn.style.color = color;
  btn.style.fontSize = fontSize + "px";
});
