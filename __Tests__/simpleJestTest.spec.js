
function inputUpperCase(text){
  let inputValue = text;
  inputValue = inputValue.toUpperCase();
  console.log(inputValue);
  return inputValue;
}

describe("toUpperCase suite", () => {
  test("toUpperCase test", () => {
    

    expect(inputUpperCase("hello world")).toBe("HELLO WORLD");
  });
});