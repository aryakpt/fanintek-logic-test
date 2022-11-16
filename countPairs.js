// Soal Nomor 1

const countPairs = (arr) => {
  let totalPairs = 0;
  const obj = {};
  arr.forEach((data) => {
    if (!obj[data]) {
      obj[data] = 1;
    } else {
      totalPairs++;
      obj[data] = 0;
    }
  });
  return totalPairs;
};

console.log(countPairs([5, 7, 7, 9, 10, 4, 5, 10, 6, 5])); // return 3
console.log(countPairs([10, 20, 20, 10, 10, 30, 50, 10, 20])); // return 3
console.log(countPairs([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5])); //return 6
console.log(countPairs([1, 1, 3, 1, 2, 1, 3, 3, 3, 3])); // return 4

// Additional Test
console.log(countPairs([1, 1, 1]));
console.log(countPairs([1, 1, 1, 1]));
console.log(countPairs([1, 1, 13, 13]));
