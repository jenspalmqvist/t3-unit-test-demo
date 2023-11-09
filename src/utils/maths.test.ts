import Maths from "./maths";

describe("Maths", () => {
  it("Should add numbers when operation is 'Add'", () => {
    const result = Maths(4, 12, "Add");
    expect(result).toEqual(16);
  });
  it("Should subtract numbers when operation is 'Subtract'", () => {
    const result = Maths(4, 12, "Subtract");
    expect(result).toEqual(-8);
  });
  it("Should divide numbers when operation is 'Divide' and numbers are non-zero", () => {
    const result = Maths(8, 2, "Divide");
    expect(result).toEqual(4);
  });
  it("Should return Infinity when operation is 'Divide' and one number is zero", () => {
    const result = Maths(8, 0, "Divide");
    expect(result).toEqual(Infinity);
  });
});
