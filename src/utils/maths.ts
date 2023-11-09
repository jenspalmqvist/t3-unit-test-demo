export default function Maths(
  number1: number,
  number2: number,
  operation: "Add" | "Subtract" | "Divide",
) {
  if (operation === "Add") {
    return number1 + number2;
  } else if (operation == "Subtract") {
    return number1 - number2;
  }
  return number1 / number2;
}
