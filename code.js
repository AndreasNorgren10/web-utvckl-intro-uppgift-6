const input = document.querySelector("#input1");
const button = document.querySelector("#addBtn");

button.addEventListener(
    "click",
    inputUpperCase

)

function inputUpperCase(){
  let inputValue = input.value;
  inputValue = inputValue.toUpperCase();
  console.log(inputValue);
}


