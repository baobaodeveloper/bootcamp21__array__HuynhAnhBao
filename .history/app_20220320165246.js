const number = document.getElementById("number");
let arr = [];
document.getElementById("input").addEventListener("click", () => {
  const numberValue = number.value;
  if (!numberValue) return;
  console.log(numberValue);
});
