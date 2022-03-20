const number = document.getElementById("number");
let arr = [];
document.getElementById("input").addEventListener("click", () => {
  const numberValue = number.value;
  if (!numberValue) return;

  arr.push(+numberValue);
  number.value = "";
  console.log(arr);
  document.getElementById("array-current").value = arr;
});
