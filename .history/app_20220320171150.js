// const number = document.getElementById("number");
// let arr = [];
// document.getElementById("input").addEventListener("click", () => {
//   const numberValue = number.value;
//   if (!numberValue) return;

//   arr.push(+numberValue);
//   number.value = "";
//   console.log(arr);
//   document.getElementById("array-current").value = arr.join(" - ");
// });
let arr = [2, 1, 3, 6, -1, -3, -5, 4];
document.getElementById("array-current").value = arr;

document
  .getElementById("calculate-total-positive")
  .addEventListener("click", () => {
    const totalArrPositive = arr
      .filter((cur) => cur > 0)
      .reduce((cur, acc) => cur + acc, 0);
    document.getElementById("result1").value = totalArrPositive;
  });

document
  .getElementById("total-number-position")
  .addEventListener("click", () => {
    const totalArrPositive = arr
      .filter((cur) => cur > 0)
      .reduce((cur, acc) => cur + acc, 0);
    document.getElementById("result1").value = totalArrPositive;
  });
