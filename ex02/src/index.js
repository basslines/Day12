function myCounter(n) {
  if (n < 1) {
    return [];
  } else {
    const newArray = myCounter(n - 1);
    newArray.unshift(n);
    return newArray;
  }
}

console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));

module.exports = myCounter;
