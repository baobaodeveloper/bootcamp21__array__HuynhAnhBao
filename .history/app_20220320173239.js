// const number = document.getElementById("number");
// let arr = [];
// document.getElementById("input").addEventListener("click", () => {
//   const numberValue = number.value;
//   if (!numberValue) return;

//   arr.push(+numberValue);
//   number.value = "";
//   console.log(arr);
//   document.getElementById("array-current").value = arr.join("  ");
// });
let arr = [2, 1, 3, 6, -1, -3, -5, 4, -10];
document.getElementById("array-current").value = arr;
// 1. Tổng các số dương trong mảng.
document
  .getElementById("calculate-total-positive")
  .addEventListener("click", () => {
    const totalArrPositive = arr
      .filter((cur) => cur > 0)
      .reduce((cur, acc) => cur + acc, 0);
    document.getElementById("result1").value = totalArrPositive;
  });

// 2. Đếm có bao nhiêu số dương trong mảng.
document
  .getElementById("total-number-position")
  .addEventListener("click", () => {
    const totalArrPositive = arr.filter((cur) => cur > 0).length;
    document.getElementById("result2").value = totalArrPositive;
  });

//3. Tìm số nhỏ nhất trong mảng.
document.getElementById("min-number").addEventListener("click", () => {
  let minNumber = arr[0];
  arr.forEach((num) => {
    if (num < minNumber) minNumber = num;
  });
  document.getElementById("result3").value = minNumber;
});

// 4. Tìm số dương nhỏ nhất trong mảng.
document.getElementById("min-positive").addEventListener("click", () => {
  const positive = arr.filter((cur) => cur > 0).sort((a, b) => a - b);
  console.log(positive);
});
