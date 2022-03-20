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
let arr = [4, 6, 2, 9, 3];
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

  document.getElementById("result4").value = positive[0];
});

// 5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
document.getElementById("even-end").addEventListener("click", () => {
  const numEven = arr.filter((cur) => cur % 2 === 0);
  let numEvenEnd;
  if (numEven.length > 0) {
    numEvenEnd = numEven[numEven.length - 1];
  } else {
    numEvenEnd = -1;
  }
  document.getElementById("result5").value = numEvenEnd;
});

// 7. Sắp xếp mảng theo thứ tự tăng dần.
document.getElementById("increase").addEventListener("click", () => {
  const increaArr = arr.sort((a, b) => a - b);
  document.getElementById("result7").value = increaArr.join("  ");
});

// 8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.

document.getElementById("num-prime-first").addEventListener("click", () => {
  const prime = arr.filter((cur) => cur > 1);

  let numPrimeFirst = -1;
  for (let i = 0; i < prime.length; i++) {
    if (prime[i] === 2) {
      numPrimeFirst = prime[i];
      break;
    } else if (prime[i] % 2 !== 0) {
      let check = true;
      for (let j = 2; j < prime[i]; j++) {
        if (prime[i] % j === 0) {
          check = false;
        }
      }
      if (check) {
        numPrimeFirst = prime[i];
        break;
      }
    }
  }
  document.getElementById("result8").value = numPrimeFirst;
});

// 10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.

document.getElementById("combine").addEventListener("click", () => {
  const positive = arr.filter((cur) => cur > 0);
  const negative = arr.filter((cur) => cur < 0);
  let combine = "";
  if (positive.length < negative.length) {
    combine = `Số lượng số âm là ${negative.length} lớn hơn số lượng số dương là    ${positive.length}`;
  } else if (positive.length > negative.length) {
    combine = `Số lượng số dương là ${positive.length} lớn hơn số lượng số âm là ${negative.length}`;
  } else {
    combine = `Số lượng số dương bằng số lượng số âm ${negative.length}`;
  }

  document.getElementById("result10").value = combine;
});

// 6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
const position1 = document.getElementById("position-1");
const position2 = document.getElementById("position-2");
document.getElementById("change").addEventListener("click", () => {
  if (!position1.value && !position2.value) return;

  const position1Value = +position1.value;
  const position2Value = +position2.value;

  [arr[position1Value], arr[position2Value]] = [
    arr[position2Value],
    arr[position1Value],
  ];
  console.log(arr);
});
